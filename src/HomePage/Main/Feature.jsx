import { Link } from "react-router-dom";

export default function Feature({ title, description, imageURL, justify }) {
	return (
		<div>
			{justify === "right" ? (
				<div className="w-full justify-end flex" id="container">
					<div className="flex flex-col xl:flex-row h-fit m-4 xl:m-0 px-5 py-8 xl:rounded-l-4xl xl:rounded-r-none bg-white rounded-2xl border-2">
						<div className="rounded-2xl border-2 shadow-lg shadow-blue-300 mx-2.5 overflow-hidden xl:w-2xl p-2">
							<img src={imageURL} alt="Feature image" />
						</div>
						<div className="flex flex-col justify-between gap-8">
							<div className="xl:w-85 pr-4 pl-2 xl:gap-6 flex flex-col mt-2 xl:mt-6 lg:gap-4">
								<div className="flex justify-end pt-2 text-xl xl:text-2xl lg:text-3xl text-blue-950 hover:font-bold">
									<label className="cursor-pointer">{title}</label>
								</div>
								<div className="text-xs mt-2.5 text-end xl:text-base lg:text-base">
									<p>{description}</p>
								</div>
							</div>
							<div className="w-full flex justify-end">
								<Link
									to={`${title == "خانه" ? "/" : title == "درسنامه" ? "/Textbook" : title == "آزمون آنلاین" ? "/OnlineTest" : title == "آزمون های جامع" ? "/GeneralTest" : title == "دستیار هوشمند" ? "/AI" : title == "نسخه ویندوز" ? "/DownloadApp" : title == "مقالات" ? "/Articles" : title == "ویدئو‌های آموزشی" ? "/Clips" : "/NotFound"}`}
								>
									<button className="rounded-lg bg-blue-800 text-white p-2 text-sm cursor-pointer hover:ring-4 hover:bg-blue-600 ring-blue-900 transition">
										« ورود به بخش {title}
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="w-full flex" id="container">
					<div className="flex flex-col xl:flex-row-reverse h-fit m-4 xl:m-0 px-4 py-8 xl:rounded-r-4xl xl:rounded-l-none bg-white rounded-2xl">
						<div className="rounded-2xl border-2 mx-2.5 shadow-lg shadow-blue-300 overflow-hidden xl:w-2xl p-2 flex justify-center">
							<img src={imageURL} alt="Feature image" />
						</div>
						<div className="flex flex-col justify-between gap-8">
							<div className="pr-4 xl:w-lg xl:gap-8 flex flex-col mt-3 xl:mt-4 lg:gap-4">
								<div className="flex justify-end pt-2 text-xl xl:text-2xl lg:text-3xl text-blue-950 hover:font-bold">
									<label className="cursor-pointer">{title}</label>
								</div>
								<div className="text-xs mt-2.5 text-center xl:text-base lg:text-base">
									<p>{description}</p>
								</div>
							</div>
							<div className="w-full flex justify-end xl:justify-normal">
								<Link
									to={`${title == "خانه" ? "/" : title == "درسنامه" ? "/Textbook" : title == "آزمون آنلاین" ? "/OnlineTest" : title == "آزمون های جامع" ? "/GeneralTest" : title == "دستیار هوشمند" ? "/AI" : title == "نسخه ویندوز" ? "/DownloadApp" : title == "مقالات" ? "/Articles" : title == "ویدئو‌های آموزشی" ? "/Clips" : "/NotFound"}`}
								>
									<button className="rounded-lg bg-blue-800 text-white p-2 text-sm cursor-pointer hover:ring-4 hover:bg-blue-600 ring-blue-900 transition">
										« ورود به بخش {title}
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
