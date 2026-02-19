export default function Chat({ text, sender }) {
	const isUser = sender === "user";

	return (
		<div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
			<div
				className={`max-w-[85%] rounded-2xl p-3 leading-7 whitespace-pre-wrap ${
					isUser
						? "bg-blue-600 text-white rounded-br-sm text-end" 
						: "bg-gray-200 text-gray-900 rounded-bl-sm text-end"
				}`}
			>
				{text}
			</div>
		</div>
	);
}
