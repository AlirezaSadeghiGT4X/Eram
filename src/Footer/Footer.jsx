import AboutEram from "./AboutEram";
import ContactUs from "./ContactUs";
import Copyright from "./Copyright";
import QuickAccess from "./QuickAccess";
import SocialMedia from "./SocialMedia";

export default function Footer() {
	return (
		<div className="flex flex-col bg-gray-900 px-12 pt-12 pb-4 mt-12 gap-6">
			<div className="flex lg:flex-row flex-col gap-8 text-xs xl:text-base sm:text-lg justify-between items-center">
				<AboutEram />
				<QuickAccess />
				<ContactUs />
			</div>
			<div>
				<SocialMedia />
			</div>
			<div className="xl:flex hidden">   
				<Copyright />
			</div>
		</div>
	);
}
