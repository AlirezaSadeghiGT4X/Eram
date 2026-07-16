import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to={"/"}>
			<img src="/Images/EramLogo.webp" alt="Logo" className="w-30 lg:w-40 cursor-pointer" />
		</Link>
	);
}
