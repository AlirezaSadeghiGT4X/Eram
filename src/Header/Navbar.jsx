import Logo from "./Logo";
import Parts from "./Parts";

export default function Navbar({page}) {
	return (
		<div className="w-full flex flex-row-reverse px-5 py-2 gap-12 justify-between md:justify-normal items-center">
			<Logo />
			<Parts page={page} />
		</div>
	);
}
