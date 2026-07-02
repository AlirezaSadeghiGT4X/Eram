import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function NotFound() {
	return (
		<div>
			<Header page={"خانه"} />
			<div className="w-full md:h-auto sm:h-dvh flex justify-center items-center flex-col">
				<video
					src="/Animations/404.mp4"
					className="w-6xl sm:my-0 my-45"
					loop
					autoPlay
				></video>
			</div>
			<Footer />
		</div>
	);
}
