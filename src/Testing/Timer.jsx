import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Timer() {
	const [seconds, setSeconds] = useState(180);
	const [isRunning, setIsRunning] = useState(true);
	useEffect(() => {
		if (!isRunning) return;
		const id = setInterval(() => setSeconds((s) => s - 1), 1000);
		return () => clearInterval(id);
	}, [isRunning]);
	// useEffect(() => {
	// 	if (seconds <= 0) {
	// 		timeUp.clicke();
	// 	}
	// }, [seconds]);
	return (
		<div className="flex w-50 fixed items-center">
			<div>
				<svg
					width="40px"
					height="40px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M12 8V12L15 15"
							stroke="#000000"
							stroke-width="2"
							stroke-linecap="round"
						></path>{" "}
						<circle
							cx="12"
							cy="12"
							r="9"
							stroke="#000000"
							stroke-width="2"
						></circle>{" "}
					</g>
				</svg>
			</div>
			<div className="flex flex-row-reverse gap-2 items-center mb-2">
				<p>{seconds}</p>
				<p>ثانیه</p>
			</div>
		</div>
	);
}
