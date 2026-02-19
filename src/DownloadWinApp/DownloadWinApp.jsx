import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Banner from "./Banner";
import DownloadAppButton from "./DownloadAppButton";
import StepsToDownload from "./StepsToDownload";

export default function DownloadWinApp() {
	return (
		<div className="bg-sky-100">
			<Header />
			<Banner />
			<DownloadAppButton />
			<StepsToDownload />
			<Footer />
		</div>
	);
}
