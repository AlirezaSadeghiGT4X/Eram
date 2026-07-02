import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OnlineTests from "./OnlineTests";

export default function OnlineTest() {
	return (
		<div className="bg-sky-50">
			<Header page={"آزمون آنلاین"} />
			<OnlineTests />
			<Footer />
		</div>
	);
}
