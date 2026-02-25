import { Link } from "react-router-dom";

export default function AnOnlineTest({
	title,
	season,
	subSeason,
	level,
	shortKey,
}) {
	let titleStyle = "";
	if (level === "آسان") {
		titleStyle = "text-lg text-green-600";
	} else if (level === "متوسط") {
		titleStyle = "text-lg text-yellow-500";
	} else if (level === "سخت") {
		titleStyle = "text-lg text-red-600";
	}
	function clickHandler() {
		localStorage.setItem("shortKey", event.target.id);
	}
	return (
		<div className="flex flex-col gap-4 border-2 xl:shadow-xl shadow-lg shadow-blue-500  p-6 rounded-xl mb-10">
			<div dir="rtl" className={titleStyle}>
				{title}
			</div>
			<div className="flex flex-row-reverse items-center justify-between">
				<div className="flex flex-col gap-2 text-sm">
					<div className="flex flex-row-reverse text-xs md:text-base gap-2">
						<p> : فصل</p>
						<p>{season}</p>
					</div>
					<div className="flex flex-row-reverse text-xs md:text-base gap-1">
						<p> : مبحث</p>
						<p>{subSeason}</p>
					</div>
					<div className="flex flex-row-reverse text-xs md:text-base gap-2">
						<p> : سطح</p>
						<p>{level}</p>
					</div>
				</div>
				<img src="/public/EramIcon.png" alt="Test" className="md:w-20 w-15" />
			</div>
			<div>
				<Link to={"/Testing"}>
					<button
						className="rounded-lg bg-blue-800 text-white p-2 text-sm cursor-pointer hover:ring-4 hover:bg-blue-600 ring-blue-900 transition"
						id={shortKey}
						onClick={clickHandler}
					>
						« ورود به آزمون
					</button>
				</Link>
			</div>
		</div>
	);
}
