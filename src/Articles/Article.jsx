import { Link } from "react-router-dom";

export default function Article({ id, picture, title, time, description }) {
	function clickHandler() {
		localStorage.setItem("articleID", id);
	}
	return (
		<div className="sm:w-fit sm:h-123 flex flex-col border-2 rounded-2xl">
			<div className="p-2 border-b-2">
				<picture>
					<img src={picture} className="sm:h-65 w-full rounded-t-2xl" alt="مقاله" />
				</picture>
			</div>
			<div dir="rtl" className="p-4 flex flex-col gap-6">
				<div className="flex justify-between">
					<div className="xl:text-2xl lg:text-xl md:text-lg sm:text-base font-bold ">
						{title}
					</div>
					<div className="flex items-center font-light">
						<p>(</p>
						<div className="flex gap-0.5">
							<p>{time}</p>
							<p>دقیقه</p>
						</div>
						<p>)</p>
					</div>
				</div>
				<div>
					<p className="line-clamp-3 text-justify">{description}</p>
				</div>
			</div>
			<div dir="ltr" className="ml-3 mb-3">
				<Link to={"/AnArticle"}>
					<button
						className="rounded-lg bg-blue-800 text-white p-2 text-sm cursor-pointer hover:ring-4 hover:bg-blue-600 ring-blue-900 transition"
						onClick={clickHandler}
					>
						« مشاهده کامل مقاله
					</button>
				</Link>
			</div>
		</div>
	);
}
