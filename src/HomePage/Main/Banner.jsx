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
		}, 3500);
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
		<section className="z-0 px-4 py-3">
			<div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl shadow-lg">
				<div
					className={`flex ${isSliding ? "transition-transform duration-500 ease-in-out" : ""} ${
						isSliding ? "-translate-x-full" : "translate-x-0"
					}`}
				>
					<img
						src={images[currentIndex]}
						alt="Banner"
						className="min-w-full object-cover"
					/>
					<img
						src={images[nextIndex]}
						alt="Banner"
						className="min-w-full object-cover"
					/>
				</div>
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 from-black/25 to-transparent" />
				<div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
					{images.map((_, index) => (
						<span
							key={index}
							className={`h-1.5 rounded-full transition-all ${
								index === currentIndex ? "w-6 bg-white" : "w-2.5 bg-white/65"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
