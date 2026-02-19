import { useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import DownloadWinApp from "./DownloadWinApp/DownloadWinApp";
import {
	HashRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Textbook from "./Textbook/Textbook";
import OnlineTest from "./OnlineTest/OnlineTest";
import GeneralTest from "./GeneralTest/GeneralTest";
import AI from "./AI/AI";
import Articles from "./Articles/Articles";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

export default function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Textbook" element={<Textbook />} />
				<Route path="/OnlineTest" element={<OnlineTest />} />
				<Route path="/GeneralTest" element={<GeneralTest />} />
				<Route path="/AI" element={<AI />} />
				<Route path="/DownloadApp" element={<DownloadWinApp />} />
				<Route path="/Articles" element={<Articles />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
