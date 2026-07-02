import { useState } from "react";
import { Link } from "react-router-dom";

export default function Parts({ page }) {
	const parts = [
		"خانه",
		"درسنامه",
		"آزمون آنلاین",
		"آزمون های جامع",
		"دستیار هوشمند",
		"نسخه ویندوز",
		"ویدئو‌های آموزشی",
		"مقالات",
	];
	let [dropdownState, dropdownStateSeter] = useState(
		localStorage.getItem("dropdown"),
	);
	setInterval(() => {
		dropdownStateSeter(localStorage.getItem("dropdown"));
	}, 100);
	function ShowDropdownHandler() {
		if (dropdownState == "none") {
			dropdownStateSeter("flex");
			localStorage.setItem("dropdown", "flex");
		} else if (dropdownState == "flex") {
			dropdownStateSeter("none");
			localStorage.setItem("dropdown", "none");
		}
		localStorage.setItem("svgClicked", "true");
	}
	return (
		<div className="z-10 xl:ml-80">
			<div className="hidden flex-row-reverse lg:gap-8 sm:gap-3.5 lg:text-lg sm:text-sm xl:flex">
				{parts.map((part) =>
					part == page ? (
						<Link
							className="cursor-pointer text-gray-900 hover:text-black pb-2 transition-all duration-75 border-b-2 border-white"
							to={`${part == "خانه" ? "/" : part == "درسنامه" ? "/Textbook" : part == "آزمون آنلاین" ? "/OnlineTest" : part == "آزمون های جامع" ? "/GeneralTest" : part == "دستیار هوشمند" ? "/AI" : part == "نسخه ویندوز" ? "/DownloadApp" : part == "مقالات" ? "/Articles" : part == "ویدئو‌های آموزشی" ? "/Clips" : "/NotFound"}`}
						>
							{part}
						</Link>
					) : (
						<Link
							className="cursor-pointer text-gray-900 hover:text-black pb-2 transition-all duration-75"
							to={`${part == "خانه" ? "/" : part == "درسنامه" ? "/Textbook" : part == "آزمون آنلاین" ? "/OnlineTest" : part == "آزمون های جامع" ? "/GeneralTest" : part == "دستیار هوشمند" ? "/AI" : part == "نسخه ویندوز" ? "/DownloadApp" : part == "مقالات" ? "/Articles" : part == "ویدئو‌های آموزشی" ? "/Clips" : "/NotFound"}`}
						>
							{part}
						</Link>
					),
				)}
			</div>
			<div className="xl:hidden">
				<div
					className="cursor-pointer hover:rotate-180 transition-all duration-400 w-fit"
					onClick={ShowDropdownHandler}
				>
					<svg
						width="30px"
						height="30px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							{" "}
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
								fill="#a3a3a3"
							></path>{" "}
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
								fill="#a3a3a3"
							></path>{" "}
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
								fill="#a3a3a3"
							></path>{" "}
						</g>
					</svg>
				</div>
				{dropdownState === "flex" ? (
					<div
						className="absolute flex flex-col justify-end md:flex items-end border-2 pr-1 pl-4 py-3 rounded-2xl bg-white shadow-xl shadow-black transition duration-200"
						id="dropdwon"
					>
						{parts.map((part) => (
							<div className="flex flex-row-reverse items-center cursor-pointer mb-1.5 text-xs md:text-sm hover:text-blue-700 hover:font-bold border-sky-100 transition-all duration-75">
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
											fill="#1C4D8D"
										></path>{" "}
									</g>
								</svg>
								<Link
									className="mb-1 text-gray-900"
									to={`${part == "خانه" ? "/" : part == "درسنامه" ? "/Textbook" : part == "آزمون آنلاین" ? "/OnlineTest" : part == "آزمون های جامع" ? "/GeneralTest" : part == "دستیار هوشمند" ? "/AI" : part == "نسخه ویندوز" ? "/DownloadApp" : part == "مقالات" ? "/Articles" : part == "ویدئو‌های آموزشی" ? "/Clips" : "/NotFound"}`}
								>
									{part}
								</Link>
							</div>
						))}
					</div>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}
