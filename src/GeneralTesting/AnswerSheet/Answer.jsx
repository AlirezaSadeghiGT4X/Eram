import AnAnswer from "./AnAnswer";

export default function Answer({ no, correctAnswer, userAnswer }) {
	const i1To4 = [1, 2, 3, 4];
	let status1 = "w-7 h-4 border rounded-md",
		status2 = "w-7 h-4 border rounded-md",
		status3 = "w-7 h-4 border rounded-md",
		status4 = "w-7 h-4 border rounded-md";
	if (userAnswer == null || userAnswer == undefined) {
		if (correctAnswer == 1) {
			status1 += "bg-red-600";
		} else if (correctAnswer == 2) {
			status2 += "bg-red-600";
		} else if (correctAnswer == 3) {
			status3 += "bg-red-600";
		} else if (correctAnswer == 4) {
			status4 += "bg-red-600";
		}
	}
	///////////////////////////////////////////////////////////////////////////////////////////
	else if (userAnswer == correctAnswer) {
		if (correctAnswer == 1) {
			status1 += "bg-green-600";
		} else if (correctAnswer == 2) {
			status2 += "bg-green-600";
		} else if (correctAnswer == 3) {
			status3 += "bg-green-600";
		} else if (correctAnswer == 4) {
			status4 += "bg-green-600";
		}
	}
	///////////////////////////////////////////////////////////////////////////////////////////
	else if (
		userAnswer != null &&
		userAnswer != undefined &&
		userAnswer != correctAnswer
	) {
		if (correctAnswer == 1) {
			status1 += "bg-green-600";
		} else if (correctAnswer == 2) {
			status2 += "bg-green-600";
		} else if (correctAnswer == 3) {
			status3 += "bg-green-600";
		} else if (correctAnswer == 4) {
			status4 += "bg-green-600";
		}
		if (userAnswer == 1) {
			status1 += "bg-red-600";
		} else if (userAnswer == 2) {
			status2 += "bg-red-600";
		} else if (userAnswer == 3) {
			status3 += "bg-red-600";
		} else if (userAnswer == 4) {
			status4 += "bg-red-600";
		}
	}
	return (
		<div dir="rtl" className="w-50 flex justify-between">
			<div className="flex gap-0.5 w-7">
				<p>{no}</p>
				<p>.</p>
			</div>
			<div className="flex gap-2">
				{i1To4.map((i) => {
					if (i == 1) {
						return <AnAnswer status={status1} />;
					}
					if (i == 2) {
						return <AnAnswer status={status2} />;
					}
					if (i == 3) {
						return <AnAnswer status={status3} />;
					}
					if (i == 4) {
						return <AnAnswer status={status4} />;
					}
				})}
			</div>
		</div>
	);
}
