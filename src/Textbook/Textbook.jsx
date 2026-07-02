import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AllTextbooks from "./AllTextbooks";
import Banner from "./Banner";

export default function Textbook() {
	return (
		<div className="bg-sky-50">
			<Header page={"درسنامه"} />
			<Banner />
			<AllTextbooks />
			<Footer />
		</div>
	);
}
