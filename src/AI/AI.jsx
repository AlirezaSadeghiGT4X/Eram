import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AIChat from "./AIChat";

export default function AI() {
	return (
		<div className="bg-sky-100">
			<Header />
			<div className="w-full flex justify-center my-30 ">
				<AIChat />
			</div>
			<Footer />
		</div>
	);
}
