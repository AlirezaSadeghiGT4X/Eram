import { Link } from "react-router-dom";

export default function QuickAccess() {
	const parts = [
		"خانه",
		"درسنامه",
		"آزمون آنلاین",
		"آزمون های جامع",
		"دستیار هوشمند",
		"نسخه ویندوز",
		"مقالات",
	];
	return (
		<div className="flex flex-col text-white items-center">
			<p>دسترسی سریع</p>
			<p>----------------------</p>
			<ul className="flex flex-col items-center gap-1">
				{parts.map((part) => (
					<Link
						className="hover:text-blue-600 cursor-pointer transition duration-200"
						to={`${part == "خانه" ? "/" : part == "درسنامه" ? "/Textbook" : part == "آزمون آنلاین" ? "/OnlineTest" : part == "آزمون های جامع" ? "/GeneralTest" : part == "دستیار هوشمند" ? "/AI" : part == "نسخه ویندوز" ? "/DownloadApp" : part == "مقالات" ? "/Articles" : "/NotFound"}`}
					>
						{part}
					</Link>
				))}
			</ul>
		</div>
	);
}
