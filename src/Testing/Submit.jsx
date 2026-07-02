export default function Submit() {
	function clickHandler() {
		localStorage.setItem("show", "answer");
		window.scrollTo(0, 0);
	}
	return (
		<div>
			<button
				className="ml-4 rounded-lg bg-green-600 text-white px-5 py-2 text-sm cursor-pointer hover:ring-4 hover:bg-green-500 ring-green-700 transition"
				onClick={clickHandler}
			>
				ثبت پاسخ‌ها
			</button>
		</div>
	);
}
