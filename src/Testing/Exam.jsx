/* eslint-disable react-hooks/immutability */
import { useState } from "react";
import Submit from "./Submit";
import Tests from "./Tests";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import { OBQuestions } from "./OBQuestions";
import Footer from "../Footer/Footer";

export default function Exam() {
	const questions = OBQuestions;
	let [show, setShow] = useState(localStorage.getItem("show"));
	const id = setInterval(() => {
		setShow(localStorage.getItem("show"));
		if (show == "answer") {
			localStorage.setItem("answer1", "");
			localStorage.setItem("answer2", "");
			localStorage.setItem("answer3", "");
			clearInterval(id);
		}
	}, 100);
	let result = "";
	let resultColor = "";
	let resultBGColor = "";
	let questionResult1 = localStorage.getItem("answer1");
	let questionResult2 = localStorage.getItem("answer2");
	let questionResult3 = localStorage.getItem("answer3");
	let borderColorQuestion1 =
		"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
	let borderColorQuestion2 =
		"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
	let borderColorQuestion3 =
		"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
	let pictureAnswer1SRC = "";
	let pictureAnswer2SRC = "";
	let pictureAnswer3SRC = "";
	//Check answers
	if (
		questionResult1 == "Yes" &&
		questionResult2 == "Yes" &&
		questionResult3 == "Yes"
	) {
		result = "تبریک میگم! شما به تمام سوالات پاسخ صحیح دادید";
		resultColor = "text-green-700";
		resultBGColor =
			"bg-green-200 flex border-b-2 border-t-2 border-green-700 items-center justify-center py-2";
		borderColorQuestion1 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion2 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion3 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
	} else if (
		questionResult1 == "Yes" &&
		questionResult2 == "Yes" &&
		questionResult3 != "Yes"
	) {
		result = "!شما به سوال 1 و 2 پاسخ صحیح دادید";
		resultColor = "text-indigo-700";
		resultBGColor =
			"bg-indigo-200 flex border-b-2 border-t-2 border-blue-700 items-center justify-center py-2";
		borderColorQuestion1 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion2 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion3 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
	} else if (
		questionResult1 == "Yes" &&
		questionResult2 != "Yes" &&
		questionResult3 == "Yes"
	) {
		result = "!شما به سوال 1 و 3 پاسخ صحیح دادید";
		resultColor = "text-indigo-700";
		resultBGColor =
			"bg-indigo-200 flex border-b-2 border-t-2 border-blue-700 items-center justify-center py-2";
		borderColorQuestion1 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion2 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion3 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
	} else if (
		questionResult1 != "Yes" &&
		questionResult2 == "Yes" &&
		questionResult3 == "Yes"
	) {
		result = "!شما به سوال 2 و 3 پاسخ صحیح دادید";
		resultColor = "text-indigo-700";
		resultBGColor =
			"bg-indigo-200 flex border-b-2 border-t-2 border-blue-700 items-center justify-center py-2";
		borderColorQuestion1 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion2 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion3 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
	} else if (
		questionResult1 == "Yes" &&
		questionResult2 != "Yes" &&
		questionResult3 != "Yes"
	) {
		result = ".شما تنها به سوال 1 پاسخ صحیح دادید";
		resultColor = "text-yellow-600";
		resultBGColor =
			"bg-yellow-100 flex border-b-2 border-t-2 border-yellow-600 items-center justify-center py-2";
		borderColorQuestion1 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion2 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion3 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
	} else if (
		questionResult1 != "Yes" &&
		questionResult2 == "Yes" &&
		questionResult3 != "Yes"
	) {
		result = ".شما تنها به سوال 2 پاسخ صحیح دادید";
		resultColor = "text-yellow-600";
		resultBGColor =
			"bg-yellow-100 flex border-b-2 border-t-2 border-yellow-600 items-center justify-center py-2";
		borderColorQuestion1 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion2 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion3 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
	} else if (
		questionResult1 != "Yes" &&
		questionResult2 != "Yes" &&
		questionResult3 == "Yes"
	) {
		result = ".شما تنها به سوال 3 پاسخ صحیح دادید";
		resultColor = "text-yellow-600";
		resultBGColor =
			"bg-yellow-100 flex border-b-2 border-t-2 border-yellow-600 items-center justify-center py-2";
		borderColorQuestion1 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion2 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion3 =
			"border-2 border-green-700 rounded-xl p-4 flex flex-col gap-2";
	} else if (
		questionResult1 != "Yes" &&
		questionResult2 != "Yes" &&
		questionResult3 != "Yes"
	) {
		result = ".شما به هیچ یک از سوالات پاسخ صحیح ندادید";
		resultColor = "text-red-700";
		resultBGColor =
			"bg-red-200 flex border-b-2 border-t-2 border-red-700 items-center justify-center py-2";
		borderColorQuestion1 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion2 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
		borderColorQuestion3 =
			"border-2 border-red-700 rounded-xl p-4 flex flex-col gap-2";
	}
	//Return
	function clickReturnHandler() {
		localStorage.setItem("show", "question");
	}
	return (
		<div>
			{show == "question" ? (
				<div className="bg-blue-50 pb-12">
					<Timer />
					{questions.map((question) =>
						question.shortKey == localStorage.getItem("shortKey") ? (
							<Tests
								question1={question.question1}
								picture1={question.picture1}
								g11={question.g11}
								g12={question.g12}
								g13={question.g13}
								g14={question.g14}
								answer1={question.answer1}
								question2={question.question2}
								picture2={question.picture2}
								g21={question.g21}
								g22={question.g22}
								g23={question.g23}
								g24={question.g24}
								answer2={question.answer2}
								question3={question.question3}
								picture3={question.picture3}
								g31={question.g31}
								g32={question.g32}
								g33={question.g33}
								g34={question.g34}
								answer3={question.answer3}
							/>
						) : (
							<div></div>
						),
					)}
					<Submit />
				</div>
			) : (
				<div>
					<div className={resultBGColor}>
						<p className={resultColor}>{result}</p>
					</div>
					<div className="p-8 flex flex-col gap-8">
						<div className="flex items-center justify-end">
							<div
								dir="rtl"
								className="border rounded-2xl p-4 flex flex-col gap-4 w-5xl"
							>
								<div className={borderColorQuestion1}>
									<p className="text-blue-600">پاسخ تشریحی سوال 1 :</p>
									<div className="flex flex-col gap-6 lg:gap-1">
										<p className="text-justify">
											{questions.map((question) => {
												if (
													question.shortKey == localStorage.getItem("shortKey")
												) {
													pictureAnswer1SRC = question.pictureAnswer1;
													return question.completeAnswer1;
												}
											})}
										</p>
										<div className="flex flex-row-reverse">
											<img src={pictureAnswer1SRC} />
										</div>
									</div>
								</div>
								<div className={borderColorQuestion2}>
									<p className="text-blue-600">پاسخ تشریحی سوال 2 :</p>
									<div className="flex flex-col gap-6 lg:gap-1">
										<p className="text-justify">
											{questions.map((question) => {
												if (
													question.shortKey == localStorage.getItem("shortKey")
												) {
													pictureAnswer2SRC = question.pictureAnswer2;
													return question.completeAnswer2;
												}
											})}
										</p>
										<div className="flex flex-row-reverse">
											<img src={pictureAnswer2SRC} />
										</div>
									</div>
								</div>
								<div className={borderColorQuestion3}>
									<p className="text-blue-600">پاسخ تشریحی سوال 3 :</p>
									<div className="flex flex-col gap-6 lg:gap-1">
										<p className="text-justify">
											{questions.map((question) => {
												if (
													question.shortKey == localStorage.getItem("shortKey")
												) {
													pictureAnswer3SRC = question.pictureAnswer3;
													return question.completeAnswer3;
												}
											})}
										</p>
										<div className="flex flex-row-reverse">
											<img src={pictureAnswer3SRC} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<Link to={"/OnlineTest"}>
								<button
									onClick={clickReturnHandler}
									className="ml-4 rounded-lg bg-red-700 text-white px-5 py-2 text-sm cursor-pointer hover:ring-4 hover:bg-red-500 ring-red-700 transition"
								>
									بازگشت
								</button>
							</Link>
						</div>
					</div>
					<Footer />
				</div>
			)}
		</div>
	);
}
