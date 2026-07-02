import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GeneralTests from "./GeneralTests";

export default function GeneralTest() {
	return (
		<div className="bg-sky-50">
			<Header page={"آزمون های جامع"} />
			<GeneralTests />
			<Footer />
		</div>
	);
}
