import { useEffect, useRef } from "react";
import Chat from "./Chat";

export default function Chats({ messages, isLoading, error }) {
	const bottomRef = useRef(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, isLoading, error]);

	return (
		<div className="flex-1 min-h-0 overflow-y-auto p-5 space-y-3">
			{messages.map((message) => (
				<Chat key={message.id} text={message.text} sender={message.sender} />
			))}
			{isLoading ? <Chat text="در حال نوشتن پاسخ..." sender="assistant" /> : null}
			{error ? <p className="text-sm text-red-600">{error}</p> : null}
			<div ref={bottomRef} />
		</div>
	);
}
