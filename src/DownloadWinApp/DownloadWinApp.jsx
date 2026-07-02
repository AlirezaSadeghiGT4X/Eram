import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Banner from "./Banner";
import DownloadAppButton from "./DownloadAppButton";
import StepsToDownload from "./StepsToDownload";

export default function DownloadWinApp() {
	return (
		<div className="lg:text-base text-xs bg-sky-50">
			<Header page={"نسخه ویندوز"} />
			<Banner />
			<DownloadAppButton />
			<StepsToDownload />
			<Footer />
		</div>
	);
}
