import { useEffect, useState } from "react";

export default function Slider() {
	const images = [
		"/Images/EramBanner.png",
		"/Images/EramDownloadAppBanner.png",
		"/Images/EramTextbookBanner.png",
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isSliding, setIsSliding] = useState(false);

	const nextIndex = (currentIndex + 1) % images.length;

	useEffect(() => {
		const id = setInterval(() => {
			setIsSliding(true);
		}, 3000);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		if (!isSliding) return;
		const id = setTimeout(() => {
			setCurrentIndex(nextIndex);
			setIsSliding(false);
		}, 230);
		return () => clearTimeout(id);
	}, [isSliding, nextIndex]);

	return (
		<div className="h-fit flex justify-center z-0">
			<div className="relative w-full overflow-hidden">
				<div
					className={`flex ${isSliding ? "transition-transform duration-500 ease-in-out" : ""} ${
						isSliding ? "translate-x-full" : "translate-x-0"
					}`}
				>
					<img
						src={images[currentIndex]}
						alt="Banner"
						className="min-w-full h-120"
					/>
					<img
						src={images[nextIndex]}
						alt="Banner"
						className="min-w-full h-120"
					/>
				</div>
			</div>
		</div>
	);
}
