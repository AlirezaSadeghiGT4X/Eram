import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to={"/"}>
			<img src="/EramLogo.webp" alt="Logo" className="w-40 lg:w-48 cursor-pointer" />
		</Link>
	);
}
