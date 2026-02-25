import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AIChat from "./AIChat";
import Alert from "./Alert";

export default function AI() {
	return (
		<div className="bg-sky-100">
			<Header page={"دستیار هوشمند"} />
			<Alert />
			<div className="w-full flex justify-center md:my-30">
				<AIChat />
			</div>
			<Footer />
		</div>
	);
}
