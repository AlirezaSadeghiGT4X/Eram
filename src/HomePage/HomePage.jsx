import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "./Main/Main";

export default function HomePage() {
	return (
		<div className="bg-linear-to-r from-blue-800 to-sky-400 w-full h-max">
			<Header />
			<Main />
			<Footer/>
		</div>
	);
}
