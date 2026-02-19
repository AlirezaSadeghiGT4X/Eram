export default function SendBox({ value, onChange, onSend, isLoading }) {
	const canSend = value.trim().length > 0 && !isLoading;

	const handleSubmit = (event) => {
		event.preventDefault();
		if (canSend) {
			onSend();
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			if (canSend) {
				onSend();
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center gap-2 border-t p-3">
			<textarea
				name="message"
				placeholder="...پیامت را بنویس"
				value={value}
				onChange={(event) => onChange(event.target.value)}
				onKeyDown={handleKeyDown}
				disabled={isLoading}
				rows={2}
				className="border rounded-md p-2 w-full resize-none focus:border-blue-600 text-end"
			/>
			<button
				type="submit"
				disabled={!canSend}
				className="flex justify-center items-center bg-black w-10 h-10 rounded-full p-2 cursor-pointer hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
							fill="#ffffff"
						></path>
					</g>
				</svg>
			</button>
		</form>
	);
}
