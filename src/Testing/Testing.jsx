import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Exam from "./Exam";

export default function Testing() {
	localStorage.setItem("show", "question");
	return (
		<>
			<Header page={"آزمون آنلاین"} />
			<Exam />
		</>
	);
}
