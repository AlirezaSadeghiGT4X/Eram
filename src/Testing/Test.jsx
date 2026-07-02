import { useState } from "react";

export default function Test({
	question,
	picture,
	g1,
	g2,
	g3,
	g4,
	answer,
	no,
}) {
	const questionNo = "answer" + no;
	let userAnswer = null;
	let [g1Checked, setG1Checked] = useState(false);
	let [g2Checked, setG2Checked] = useState(false);
	let [g3Checked, setG3Checked] = useState(false);
	let [g4Checked, setG4Checked] = useState(false);
	function g1ChangeHandler() {
		if (g1Checked == false) {
			setG1Checked(true);
		} else {
			setG1Checked(false);
		}
		setG2Checked(false);
		setG3Checked(false);
		setG4Checked(false);
		if (event.target.checked == true) {
			// eslint-disable-next-line react-hooks/immutability
			userAnswer = "1";
		} else if (event.target.checked == false) {
			userAnswer = null;
		}
		if (userAnswer == answer) {
			localStorage.setItem(questionNo, "Yes");
		}
		if (userAnswer != answer) {
			localStorage.setItem(questionNo, "No");
		}
	}
	function g2ChangeHandler() {
		setG1Checked(false);
		if (g2Checked == false) {
			setG2Checked(true);
		} else {
			setG2Checked(false);
		}
		setG3Checked(false);
		setG4Checked(false);
		if (event.target.checked == true) {
			userAnswer = "2";
		} else if (event.target.checked == false) {
			userAnswer = null;
		}
		if (userAnswer == answer) {
			localStorage.setItem(questionNo, "Yes");
		}
		if (userAnswer != answer) {
			localStorage.setItem(questionNo, "No");
		}
	}
	function g3ChangeHandler() {
		setG1Checked(false);
		setG2Checked(false);
		if (g3Checked == false) {
			setG3Checked(true);
		} else {
			setG3Checked(false);
		}
		setG4Checked(false);
		if (event.target.checked == true) {
			userAnswer = "3";
		} else if (event.target.checked == false) {
			userAnswer = null;
		}
		if (userAnswer == answer) {
			localStorage.setItem(questionNo, "Yes");
		}
		if (userAnswer != answer) {
			localStorage.setItem(questionNo, "No");
		}
	}
	function g4ChangeHandler() {
		setG1Checked(false);
		setG2Checked(false);
		setG3Checked(false);
		if (g4Checked == false) {
			setG4Checked(true);
		} else {
			setG4Checked(false);
		}
		if (event.target.checked == true) {
			userAnswer = "4";
		} else if (event.target.checked == false) {
			userAnswer = null;
		}
		if (userAnswer == answer) {
			localStorage.setItem(questionNo, "Yes");
		}
		if (userAnswer != answer) {
			localStorage.setItem(questionNo, "No");
		}
	}
	return (
		<div
			dir="rtl"
			className="flex flex-col gap-4 border p-3 rounded-2xl bg-white"
		>
			<div className="flex md:flex-row flex-col justify-between gap-4">
				<div className="flex">
					<p>{no}-</p>
					<p className="text-justify no-copy">{question}</p>
				</div>
				<div className="flex justify-center sm:justify-end">
					<picture>
						<img src={picture} />
					</picture>
				</div>
			</div>
			<div className="flex flex-col gap-3">
				<div className="flex gap-1">
					<input
						type="checkbox"
						onChange={g1ChangeHandler}
						checked={g1Checked}
						className="cursor-pointer"
					/>
					<div className="flex mb-0.5 gap-1">
						<p>1)</p>
						<p className="text-justify no-copy">{g1}</p>
					</div>
				</div>
				<div className="flex gap-1">
					<input
						type="checkbox"
						onChange={g2ChangeHandler}
						checked={g2Checked}
						className="cursor-pointer"
					/>
					<div className="flex mb-0.5 gap-1">
						<p>2)</p>
						<p className="text-justify no-copy">{g2}</p>
					</div>
				</div>
				<div className="flex gap-1">
					<input
						type="checkbox"
						onChange={g3ChangeHandler}
						checked={g3Checked}
						className="cursor-pointer"
					/>
					<div className="flex mb-0.5 gap-1">
						<p>3)</p>
						<p className="text-justify no-copy">{g3}</p>
					</div>
				</div>
				<div className="flex gap-1">
					<input
						type="checkbox"
						onChange={g4ChangeHandler}
						checked={g4Checked}
						className="cursor-pointer"
					/>
					<div className="flex mb-0.5 gap-1">
						<p>4)</p>
						<p className="text-justify no-copy">{g4}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
