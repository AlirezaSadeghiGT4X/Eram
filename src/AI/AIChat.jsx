import { useState } from "react";
import Chats from "./Chats";
import SendBox from "./SendBox";

const API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-4o";

const SYSTEM_PROMPT = `
You are Eram, a Persian educational assistant.
- Reply in user language.
- Only can answer to math questions.
- Answer only study-related questions.
- For valid study questions, give step-by-step numbered answers.
- If non-educational, politely refuse in Persian in one short sentence.
- Keep responses concise and clean.
- Use at most 1 emoji.
`.trim();

function makeId(prefix = "msg") {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function AIChat() {
    const [messages, setMessages] = useState([
        { id: makeId("assistant"), sender: "assistant", text: "سلام، من ارم هستم. سوال درسی‌ات را بپرس." }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const sendMessage = async () => {
        const content = inputValue.trim();
        if (!content || isLoading) return;

        const userMessage = { id: makeId("user"), sender: "user", text: content };
        const nextMessages = [...messages, userMessage];

        setMessages(nextMessages);
        setInputValue("");
        setError("");
        setIsLoading(true);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                signal: controller.signal,
                // headers: {
                //     "Content-Type": "application/json",
                //     "Authorization": `Bearer ${}`,
                // },
                body: JSON.stringify({
                    model: MODEL,
                    temperature: 0.2,
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...nextMessages.map((msg) => ({
                            role: msg.sender === "user" ? "user" : "assistant",
                            content: msg.text,
                        })),
                    ],
                }),
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error?.message || "خطا در برقراری ارتباط با سرور");
            }

            const assistantText = data.choices?.[0]?.message?.content?.trim();

            if (!assistantText) throw new Error("پاسخی از سمت سرور دریافت نشد.");

            setMessages((prev) => [
                ...prev,
                { id: makeId("assistant"), sender: "assistant", text: assistantText },
            ]);
        } catch (err) {
            if (err.name === "AbortError") {
                setError("زمان پاسخگویی تمام شد. دوباره تلاش کنید.");
            } else {
                setError(err.message || "خطای غیرمنتظره‌ای رخ داد.");
            }
        } finally {
            clearTimeout(timeoutId);
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-4xl h-144 md:border md:rounded-2xl bg-white overflow-hidden">
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
