import { OBTests } from "../OBTests";
import Answer from "./Answer";

export default function Answers() {
	let userAnswers = [];
	let string = "answer1";
	for (let i = 1; i <= 30; i++) {
		string = "answer" + i;
		userAnswers.push(localStorage.getItem(string));
	}
	//////////////////////////////////////////////////////////
	let correctAnswers = [];
	const tests = OBTests;
	let id = localStorage.getItem("generalTestID");
	const questions = tests.find((test) => test.id == id);
	correctAnswers.push(questions.answer1);
	correctAnswers.push(questions.answer2);
	correctAnswers.push(questions.answer3);
	correctAnswers.push(questions.answer4);
	correctAnswers.push(questions.answer5);
	correctAnswers.push(questions.answer6);
	correctAnswers.push(questions.answer7);
	correctAnswers.push(questions.answer8);
	correctAnswers.push(questions.answer9);
	correctAnswers.push(questions.answer10);
	correctAnswers.push(questions.answer11);
	correctAnswers.push(questions.answer12);
	correctAnswers.push(questions.answer13);
	correctAnswers.push(questions.answer14);
	correctAnswers.push(questions.answer15);
	correctAnswers.push(questions.answer16);
	correctAnswers.push(questions.answer17);
	correctAnswers.push(questions.answer18);
	correctAnswers.push(questions.answer19);
	correctAnswers.push(questions.answer20);
	correctAnswers.push(questions.answer21);
	correctAnswers.push(questions.answer22);
	correctAnswers.push(questions.answer23);
	correctAnswers.push(questions.answer24);
	correctAnswers.push(questions.answer25);
	correctAnswers.push(questions.answer26);
	correctAnswers.push(questions.answer27);
	correctAnswers.push(questions.answer28);
	correctAnswers.push(questions.answer29);
	correctAnswers.push(questions.answer30);
	//////////////////////////////////////////////////////////
	let numberOfCorrectAnswers = 0;
	for (let k = 0; k <= 29; k++) {
		if (userAnswers[k] == correctAnswers[k]) {
			numberOfCorrectAnswers += 1;
		}
	}
	//////////////////////////////////////////////////////////
	let resultBGColor =
		"flex border-b-2 border-t-2 items-center justify-center py-2 ";
	let resultColor = "";
	let result = "";
	if (numberOfCorrectAnswers == 0) {
		resultBGColor += "bg-black border-white";
		resultColor = "text-white";
		result = "شما به هیچ یک از سوالات پاسخ صحیح ندادید!";
	} else {
		result = `شما به ${numberOfCorrectAnswers} سوال از 30 سوال پاسخ صحیح دادید!`;
		if (numberOfCorrectAnswers <= 5) {
			resultBGColor += "bg-gray-800 border-white";
			resultColor = "text-white";
		} else if (numberOfCorrectAnswers <= 10) {
			resultBGColor += "bg-red-300 border-red-700";
			resultColor = "text-red-700";
		} else if (numberOfCorrectAnswers <= 15) {
			resultBGColor += "bg-orange-300 border-orange-600";
			resultColor = "text-orange-600";
		} else if (numberOfCorrectAnswers <= 20) {
			resultBGColor += "bg-yellow-200 border-yellow-600";
			resultColor = "text-yellow-600";
		} else if (numberOfCorrectAnswers <= 25) {
			resultBGColor += "bg-sky-200 border-sky-600";
			resultColor = "text-sky-600";
		} else if (numberOfCorrectAnswers <= 29) {
			resultBGColor += "bg-lime-200 border-lime-600";
			resultColor = "text-lime-600";
		} else if (numberOfCorrectAnswers == 30) {
			resultBGColor += "bg-green-200 border-green-700";
			resultColor = "text-green-700";
		}
	}
	//////////////////////////////////////////////////////////
	let i1To15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	let i16To30 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
	let i1To30 = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30,
	];
	return (
		<div>
			<div>
				<div className={resultBGColor}>
					<p dir="rtl" className={resultColor}>
						{result}
					</p>
				</div>
				<div className="hidden md:flex md:justify-center">
					<div className="flex justify-center items-center gap-8 pt-12 pb-6 flex-row-reverse">
						<div className="border rounded-xl p-6 space-y-2">
							{i1To15.map((i) => (
								<Answer
									no={i}
									correctAnswer={correctAnswers[i + 1]}
									userAnswer={userAnswers[i + 1]}
								/>
							))}
						</div>
						<div className="border rounded-xl p-6 space-y-2">
							{i16To30.map((i) => (
								<Answer
									no={i}
									correctAnswer={correctAnswers[i + 1]}
									userAnswer={userAnswers[i + 1]}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="md:hidden px-16 flex justify-center items-center gap-8 pt-12 pb-6 flex-row-reverse">
					<div className="border rounded-xl p-6 space-y-2">
						{i1To30.map((i) => (
							<Answer
								no={i}
								correctAnswer={correctAnswers[i + 1]}
								userAnswer={userAnswers[i + 1]}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
