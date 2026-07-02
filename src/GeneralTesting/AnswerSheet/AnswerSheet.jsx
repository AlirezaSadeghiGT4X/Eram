import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Answers from "./Answers";

export default function AnswerSheet() {
	return (
		<div>
			<Answers />
			<div className="mb-6">
				<Link to={"/GeneralTest"}>
					<button
						className="ml-4 rounded-lg bg-red-700 text-white px-5 py-2 text-sm cursor-pointer hover:ring-4 hover:bg-red-500 ring-red-700 transition"
					>
						بازگشت
					</button>
				</Link>
			</div>
			<Footer />
		</div>
	);
}
