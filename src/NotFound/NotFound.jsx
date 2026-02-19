import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function NotFound() {
	return (
		<div>
			<Header />
			<div className="w-full flex justify-center items-center mt-14 flex-col">
				<video
					src="/Animations/404.mp4"
					className="w-7xl"
					loop
					autoPlay
				></video>
                <p className="xl:text-2xl">! صفحه مورد نظر شما یافت نشد</p>
			</div>
			<Footer />
		</div>
	);
}
