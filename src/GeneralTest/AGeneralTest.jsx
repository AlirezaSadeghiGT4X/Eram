import { Link } from "react-router-dom";

export default function AGeneralTest({ id, title, level }) {
	function ClickHandler() {
		localStorage.setItem("generalTestID", id);
		localStorage.setItem("showStatus", "questions");
	}
	return (
		<div className="flex border-2 rounded-2xl p-4 shadow-lg shadow-blue-500 gap-4 sm:justify-between mb-8 sm:mb-0 bg-white">
			<div>
				<img src="/images/MathBook.webp" alt="Math book" className="w-30" />
			</div>
			<div className="flex flex-col gap-4 w-full">
				<div className="flex flex-col gap-6 md:ml-6 text-xs sm:text-sm">
					<div>
						<p className="text-blue-800 xl:text-lg">{title}</p>
					</div>
					<div className="flex md:flex-row flex-col justify-between p-2 border border-dashed border-blue-600 rounded-lg gap-4 text-xs sm:text-sm">
						<div className="flex md:flex-col justify-center items-center gap-2">
							<p>تعداد سوالات :</p>
							<p>30</p>
						</div>
						<div className="flex md:flex-col justify-center items-center gap-2">
							<p>سطح سوالات :</p>
							<p>{level}</p>
						</div>
					</div>
				</div>
				<div className="flex justify-end">
					<Link to={"/GeneralTest/GeneralTesting"}>
						<button
							className="rounded-lg bg-blue-800 text-white p-2 text-sm cursor-pointer hover:ring-4 hover:bg-blue-600 ring-blue-900 transition"
							onClick={ClickHandler}
						>
							ورود به آزمون »
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
