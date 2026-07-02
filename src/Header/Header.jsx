import { useEffect } from "react";
import Navbar from "./Navbar";
import { OBPages } from "./OBPages";

export default function Header({ page }) {
	const pages = OBPages;
	let goalPage = pages.find((Apage) => Apage.pageTitle == page);
	useEffect(() => {
		document.title = goalPage.pageName;
	}, [goalPage.pageName, page]);
	return (
		<div className="bg-linear-to-r from-blue-700 to-sky-400">
			<Navbar page={page} />
		</div>
	);
}
