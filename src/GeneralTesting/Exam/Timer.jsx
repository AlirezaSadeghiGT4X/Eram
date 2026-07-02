import { useEffect, useState } from "react";

export default function Timer() {
	const [seconds, setSeconds] = useState(60);
	const [minutes, setMinutes] = useState(59);
	useEffect(() => {
		const id = setInterval(() => setSeconds((s) => s - 1), 1000);
		return () => clearInterval(id);
	},[]);
	useEffect(() => {
		if (seconds <= 0) {
			if(minutes <= 0){
				localStorage.setItem("showStatus", "answerSheet");
			}
			else{
				setSeconds(60);
				setMinutes(minutes-1);
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [seconds]);
	return (
		<div className="flex sticky top-2 w-40 bg-blue-700 items-center justify-center gap-1 py-2 px-4 ml-2 rounded-2xl">
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
							stroke="#ffffff"
							stroke-width="2"
							stroke-linecap="round"
						></path>{" "}
						<circle
							cx="12"
							cy="12"
							r="9"
							stroke="#ffffff"
							stroke-width="2"
						></circle>{" "}
					</g>
				</svg>
			</div>
			<div className="flex flex-row-reverse gap-2 items-center text-white">
				<p>{seconds}''</p>
				<p>:</p>
				<p>{minutes}'</p>
			</div>
		</div>
	);
}
