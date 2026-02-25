import Navbar from "./Navbar";

export default function Header({page}) {
	return (
		<div className="bg-linear-to-r from-blue-800 to-sky-400">
			<Navbar page={page} />
		</div>
	);
}
