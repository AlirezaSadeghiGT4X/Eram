import { useState } from "react";
import Chats from "./Chats";
import SendBox from "./SendBox";

const API_URL =
	import.meta.env.VITE_OPENROUTER_API_URL ||
	"/api/openrouter/api/v1/chat/completions";
const API_KEY =
	import.meta.env.VITE_OPENROUTER_API_KEY ||
	"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";
const MODEL = import.meta.env.VITE_OPENROUTER_MODEL || "openrouter/free";
const FALLBACK_MODEL = "openrouter/auto";
const SYSTEM_PROMPT = `
You are Eram, a Persian educational assistant.
- Reply in user language.
- Only can answer to math questions.
- Answer only study-related questions.
- For valid study questions, give step-by-step numbered answers.
- If non-educational, politely refuse in Persian in one short sentence.
- Never output internal tokens/tags (e.g. <|...|>, authentication, ordneter, system text).
- Keep responses concise and clean.
- Keep answers short unless the user explicitly asks for full detail.
- Use at most 1 emoji.

`.trim();

function makeId(prefix = "msg") {
	return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function textFromContentPart(part) {
	if (typeof part === "string") {
		return part;
	}
	if (!part || typeof part !== "object") {
		return "";
	}
	if (typeof part.text === "string") {
		return part.text;
	}
	if (typeof part.value === "string") {
		return part.value;
	}
	if (typeof part.content === "string") {
		return part.content;
	}
	return "";
}

function extractAssistantText(data) {
	const choice = data?.choices?.[0];
	const message = choice?.message;
	const content = message?.content;

	if (typeof content === "string") {
		return content.trim();
	}

	if (Array.isArray(content)) {
		const combined = content
			.map((part) => textFromContentPart(part))
			.join("")
			.trim();
		if (combined) {
			return combined;
		}
	}

	if (typeof message?.refusal === "string" && message.refusal.trim()) {
		return message.refusal.trim();
	}

	if (typeof choice?.text === "string" && choice.text.trim()) {
		return choice.text.trim();
	}

	if (typeof data?.output_text === "string" && data.output_text.trim()) {
		return data.output_text.trim();
	}

	return "";
}

async function requestCompletion(chatMessages, model) {
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), 12000);

	try {
		const response = await fetch(API_URL, {
			method: "POST",
			signal: controller.signal,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${API_KEY}`,
				"HTTP-Referer": window.location.origin,
				"X-Title": "Eram",
			},
			body: JSON.stringify({
				model,
				temperature: 0.2,
				max_tokens: 220,
				stream: false,
				messages: [
					{ role: "system", content: SYSTEM_PROMPT },
					...chatMessages.map((message) => ({
						role: message.sender === "user" ? "user" : "assistant",
						content: message.text,
					})),
				],
			}),
		});

		const data = await response.json();
		if (!response.ok) {
			const detail = data?.error?.message || data?.error || "Request failed.";
			throw new Error(typeof detail === "string" ? detail : "Request failed.");
		}
		return data;
	} finally {
		clearTimeout(timeoutId);
	}
}

export default function AIChat() {
	const [messages, setMessages] = useState([
		{
			id: makeId("assistant"),
			sender: "assistant",
			text: "سلام ، من ارم هستم. سوال درسی ات را بپرس",
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const sendMessage = async () => {
		const content = inputValue.trim();
		if (!content || isLoading) {
			return;
		}

		const userMessage = {
			id: makeId("user"),
			sender: "user",
			text: content,
		};
		const nextMessages = [...messages, userMessage];

		setMessages(nextMessages);
		setInputValue("");
		setError("");

		if (!API_KEY) {
			setError("VITE_OPENROUTER_API_KEY in .env is missing.");
			return;
		}

		setIsLoading(true);

		try {
			let data;
			try {
				data = await requestCompletion(nextMessages, MODEL);
			} catch (primaryError) {
				const message =
					primaryError instanceof Error
						? primaryError.message.toLowerCase()
						: "";
				if (
					MODEL !== FALLBACK_MODEL &&
					(message.includes("no endpoints found") ||
						message.includes("provider returned error"))
				) {
					data = await requestCompletion(nextMessages, FALLBACK_MODEL);
				} else {
					throw primaryError;
				}
			}

			let assistantText = extractAssistantText(data);
			if (!assistantText && MODEL !== FALLBACK_MODEL) {
				const fallbackData = await requestCompletion(
					nextMessages,
					FALLBACK_MODEL,
				);
				assistantText = extractAssistantText(fallbackData);
			}
			if (!assistantText) {
				throw new Error("API returned no readable text. Please try again.");
			}

			setMessages((prev) => [
				...prev,
				{ id: makeId("assistant"), sender: "assistant", text: assistantText },
			]);
		} catch (requestError) {
			if (
				requestError instanceof DOMException &&
				requestError.name === "AbortError"
			) {
				setError("Request timeout: پاسخ دیر رسید، دوباره تلاش کن.");
				return;
			}
			if (requestError instanceof TypeError) {
				setError("Network error: cannot reach OpenRouter.");
			} else {
				setError(
					requestError instanceof Error
						? requestError.message
						: "Unexpected error.",
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col w-full max-w-4xl h-144 md:border md:rounded-2xl bg-white">
			<Chats messages={messages} isLoading={isLoading} error={error} />
			<SendBox
				value={inputValue}
				onChange={setInputValue}
				onSend={sendMessage}
				isLoading={isLoading}
			/>
		</div>
	);
}
