import { Link } from "react-router-dom";

export default function Submit() {
	return (
		<div>
			<Link to={"/Answers"}>
				<button className="ml-4 rounded-lg bg-green-600 text-white px-5 py-2 text-sm cursor-pointer hover:ring-4 hover:bg-green-500 ring-green-700 transition">
					ثبت پاسخ‌ها
				</button>
			</Link>
		</div>
	);
}
