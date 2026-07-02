import Exam from "./Exam/Exam";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AnswerSheet from "./AnswerSheet/AnswerSheet";
import NotFound from "../NotFound/NotFound";
import { useState } from "react";
export default function GeneralTesting() {
    let [show, setShow] = useState(localStorage.getItem("showStatus"));
	const id = setInterval(() => {
		setShow(localStorage.getItem("showStatus"));
		if (show == "answerSheet") {
			clearInterval(id);
		}
	}, 100);
	return (
		<div>
			{show == "questions" ? (
				<div>
					<Header page={"آزمون های جامع"} />
					<Exam />
				</div>
			) : show == "answerSheet" ? (
				<div>
					<Header page={"آزمون های جامع"} />
					<AnswerSheet />
				</div>
			) : (
				<NotFound />
			)}
		</div>
	);
}
