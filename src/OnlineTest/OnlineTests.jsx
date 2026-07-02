/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AnOnlineTest from "./AnOnlineTest";
import { OBTests } from "./OBTests";
export default function OnlineTests() {
	// eslint-disable-next-line no-unused-vars
	let [grade, setGrade] = useState("all");
	let [season, setSeason] = useState("all");
	let [level, setLevel] = useState("all");
	let [subSeason, setSubSeason] = useState("all");
	let [firstSub, setFirstSub] = useState("");
	let [secondSub, setSecondSub] = useState("");
	let [thirdSub, setThirdSub] = useState("");
	let [forthSub, setForthSub] = useState("");
	let [fifthSub, setFifthSub] = useState("");
	let [firstSubState, setFirstSubState] = useState("hidden");
	let [secondSubState, setSecondSubState] = useState("hidden");
	let [thirdSubState, setThirdSubState] = useState("hidden");
	let [forthSubState, setForthSubState] = useState("hidden");
	let [fifthSubState, setFifthSubState] = useState("hidden");
	let [subSelectedIndex, setSubSelectedIndex] = useState("all");
	let [showFilter, setShowFilter] = useState(
		"hidden w-full flex xl:flex-row-reverse xl:justify-between xl:px-20 flex-col items-center justify-center h-full gap-5 transition-all",
	);
	let [showTextFilter, setShowTextFilter] = useState(
		"w-16 text-xl xl:mr-4 flex items-center justify-center gap-0",
	);
	let [showBtnShowFilter, setShowBtnShowFilter] = useState(
		"hidden cursor-pointer w-5 ml-2",
	);
	let [levelIndex, setLevelIndex] = useState("all");
	useEffect(() => {
		if (window.innerWidth <= 1280) {
			setShowBtnShowFilter("cursor-pointer w-5 ml-2");
			setShowFilter(
				"hidden w-full flex xl:flex-row-reverse xl:justify-between xl:px-20 flex-col items-center justify-center h-full gap-5 transition-all",
			);
		} else if (window.innerWidth > 1280) {
			setShowFilter("hidden cursor-pointer w-5 ml-2");
			setShowFilter(
				"w-full flex xl:flex-row-reverse xl:justify-between xl:px-20 flex-col items-center justify-center h-full gap-5 transition-all",
			);
		}
	}, [window.innerWidth]);
	function changeGradeHandler() {
		if (
			event.target.selectedIndex == "0" ||
			event.target.selectedIndex == "1"
		) {
			setGrade("all");
		}
	}
	function changeSeasonHandler() {
		setSubSelectedIndex("all");
		if (event.target.selectedIndex == "0") {
			setSeason("all");
			setFirstSubState("hidden");
			setSecondSubState("hidden");
			setThirdSubState("hidden");
			setForthSubState("hidden");
			setFifthSubState("hidden");
			setFirstSub("");
			setSecondSub("");
			setThirdSub("");
			setForthSub("");
			setFifthSub("");
		} else if (event.target.selectedIndex == "1") {
			setSeason("اول(مجموعه‌ها)");
			console.log("runed");
			setFirstSubState("");
			setSecondSubState("");
			setThirdSubState("");
			setForthSubState("");
			setFifthSubState("hidden");
			setFirstSub("معرفی مجموعه");
			setSecondSub("مجموعه‌های برابر و نمایش آن‌");
			setThirdSub("اجتماع ، اشتراک و تفاضل");
			setForthSub("مجموعه و احتمال");
		} else if (event.target.selectedIndex == "2") {
			setSeason("دوم(عدد‌های حقیقی)");
			setFirstSubState("");
			setSecondSubState("");
			setThirdSubState("");
			setForthSubState("hidden");
			setFifthSubState("hidden");
			setFirstSub("عدد‌های گویا");
			setSecondSub("عدد‌های حقیقی");
			setThirdSub("قدرمطلق و محاسبه تقریبی");
		} else if (event.target.selectedIndex == "3") {
			setSeason("سوم(هندسه)");
			setFirstSubState("");
			setSecondSubState("");
			setThirdSubState("");
			setForthSubState("");
			setFifthSubState("");
			setFirstSub("استدلال");
			setSecondSub("آشنایی با اثبات در هندسه");
			setThirdSub("هم‌نهشتی مثلث‌ها");
			setForthSub("حل مسئله در هندسه");
			setFifthSub("شکل‌های متشابه");
		} else if (event.target.selectedIndex == "4") {
			setSeason("چهارم(توان و ریشه)");
			setFirstSubState("");
			setSecondSubState("");
			setThirdSubState("");
			setForthSubState("");
			setFifthSubState("hidden");
			setFirstSub("توان صحیح");
			setSecondSub("نماد علمی");
			setThirdSub("ریشه گیری");
			setForthSub("جمع و تفریق رادیکال ها");
		} else if (event.target.selectedIndex == "5") {
			setSeason("پنجم(عبارت‌های جبری)");
			setFirstSubState("");
			setSecondSubState("");
			setThirdSubState("");
			setForthSubState("hidden");
			setFifthSubState("hidden");
			setFirstSub("عبارت‌های جبری و مفهوم اتحاد");
			setSecondSub("چند اتحاد ، تجزیه و کاربرد‌ها");
			setThirdSub("نابرابری‌ها و نامعادله‌ها");
		} else if (event.target.selectedIndex == "6") {
			setSeason("ششم(خط و معادله‌های خط)");
			setFirstSubState("");
			setSecondSubState("");
			setThirdSubState("");
			setForthSubState("hidden");
			setFifthSubState("hidden");
			setFirstSub("معادله خط");
			setSecondSub("شیب خط و عرض از مبدأ");
			setThirdSub("دستگاه معادله‌های خطی");
		} else if (event.target.selectedIndex == "7") {
			setSeason("هفتم(عبارت‌های گویا)");
			setFirstSubState("");
			setSecondSubState("");
			setThirdSubState("");
			setForthSubState("hidden");
			setFifthSubState("hidden");
			setFirstSub("معرفی و ساده عبارت‌های گویا");
			setSecondSub("محاسبات عبارت‌های گویا");
			setThirdSub("تقسیم چند‌جمله‌ای‌ها");
		} else if (event.target.selectedIndex == "8") {
			setSeason("هشتم(حجم و مساحت)");
			setFirstSubState("");
			setSecondSubState("");
			setThirdSubState("");
			setForthSubState("hidden");
			setFifthSubState("hidden");
			setFirstSub("حجم و مساحت کره");
			setSecondSub("حجم هرم و مخروط");
			setThirdSub("سطح و حجم");
		}
	}
	function changeSubSeasonHandler() {
		setSubSelectedIndex(event.target.selectedIndex.value);
		setSubSeason(event.target.value);
	}
	function showFilterHandler() {
		if (
			showFilter ===
			"hidden w-full flex xl:flex-row-reverse xl:justify-between xl:px-20 flex-col items-center justify-center h-full gap-5 transition-all"
		) {
			setShowFilter(
				"w-full flex xl:flex-row-reverse xl:justify-between xl:px-20 flex-col items-center justify-center h-full gap-5 transition-all",
			);
			setShowTextFilter(
				"hidden w-16 text-xl xl:mr-4 flex items-center justify-center gap-0",
			);
		} else if (
			showFilter !=
			"hidden w-full flex xl:flex-row-reverse xl:justify-between xl:px-20 flex-col items-center justify-center h-full gap-5 transition-all"
		) {
			setShowFilter(
				"hidden w-full flex xl:flex-row-reverse xl:justify-between xl:px-20 flex-col items-center justify-center h-full gap-5 transition-all",
			);
			setShowTextFilter(
				"w-16 text-xl xl:mr-4 flex items-center justify-center gap-0",
			);
		}
	}
	function changeLevelHandler() {
		setLevelIndex(event.target.selectedIndex.value);
		setLevel(event.target.value);
	}
	const tests = OBTests;
	useEffect(() => {
		{
			tests.map((test) => {
				if (season == test.season || season == "all") {
					if (subSeason == test.subSeason || subSeason == "all") {
						if (level == test.level || level == "all") {
							return (
								<AnOnlineTest
									title={test.title}
									season={test.season}
									subSeason={test.subSeason}
									level={test.level}
									shortKey={test.shortKey}
								/>
							);
						}
					}
				}
			});
		}
	}, [season, subSeason, level]);
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	return (
		<div>
			<div className="flex flex-row-reverse w-full border-b py-2 items-center justify-between bg-teal-600 px-2">
				<div className={showTextFilter}>
					<svg
						fill="#000000"
						width="25px"
						height="25px"
						viewBox="0 0 32 32"
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
							<path d="M12,25l6.67,6.67a1,1,0,0,0,.7.29.91.91,0,0,0,.39-.08,1,1,0,0,0,.61-.92V13.08L31.71,1.71A1,1,0,0,0,31.92.62,1,1,0,0,0,31,0H1A1,1,0,0,0,.08.62,1,1,0,0,0,.29,1.71L11.67,13.08V24.33A1,1,0,0,0,12,25ZM3.41,2H28.59l-10,10a1,1,0,0,0-.3.71V28.59l-4.66-4.67V12.67a1,1,0,0,0-.3-.71Z"></path>{" "}
						</g>
					</svg>
					<p>فیلتر</p>
				</div>
				<div className={showFilter}>
					<div dir="rtl" className="flex items-center gap-1 mr-2">
						<p className="text-sm mr-2 text-white">پایه</p>
						<select
							className="border px-2 py-1 rounded-2xl bg-white xl:w-50 w-65"
							dir="rtl"
							name="Grade"
							onChange={changeGradeHandler}
						>
							<option value="all">همه</option>
							<option value="ninth">نهم</option>
						</select>
					</div>
					<div dir="rtl" className="flex items-center gap-1 mr-1">
						<p className="text-sm mr-2 text-white">فصل</p>
						<select
							className="border px-2 py-1 rounded-2xl bg-white xl:w-50 w-65"
							dir="rtl"
							name="season"
							onChange={changeSeasonHandler}
						>
							<option value="all">همه</option>
							<option value="first">فصل اول</option>
							<option value="second">فصل دوم</option>
							<option value="third">فصل سوم</option>
							<option value="forth">فصل چهارم</option>
							<option value="fifth">فصل پنجم</option>
							<option value="sixth">فصل ششم</option>
							<option value="seventh">فصل هفتم</option>
							<option value="eighth">فصل هشتم</option>
						</select>
					</div>
					<div dir="rtl" className="flex items-center gap-1">
						<p className="text-sm mr-2 text-white">مبحث</p>
						<select
							className="border px-2 py-1 rounded-2xl bg-white w-65"
							dir="rtl"
							name="sub-season"
							onChange={changeSubSeasonHandler}
							value={subSelectedIndex}
						>
							<option value="all">همه</option>
							<option value={firstSub} className={firstSubState}>
								{firstSub}
							</option>
							<option value={secondSub} className={secondSubState}>
								{secondSub}
							</option>
							<option value={thirdSub} className={thirdSubState}>
								{thirdSub}
							</option>
							<option value={forthSub} className={forthSubState}>
								{forthSub}
							</option>
							<option value={fifthSub} className={fifthSubState}>
								{fifthSub}
							</option>
						</select>
					</div>
					<div dir="rtl" className="flex items-center gap-1">
						<p className="text-sm mr-2 text-white">سطح</p>
						<select
							className="border px-2 py-1 rounded-2xl bg-white xl:w-50 w-65"
							dir="rtl"
							name="level"
							onChange={changeLevelHandler}
							value={levelIndex}
						>
							<option value="all">همه</option>
							<option value="آسان">آسان</option>
							<option value="متوسط">متوسط</option>
							<option value="سخت">سخت</option>
						</select>
					</div>
				</div>
				<div className={showBtnShowFilter} onClick={showFilterHandler}>
					<svg
						fill="#000000"
						width="25px"
						height="25px"
						viewBox="0 0 32 32"
						version="1.1"
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
							<path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z"></path>{" "}
						</g>
					</svg>
				</div>
			</div>
			<div
				dir=""
				className="xl:grid xl:grid-flow-row-dense xl:grid-cols-3 xl:grid-rows-3 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 xl:gap-12 lg:gap-12 gap-10 p-8"
			>
				{tests.map((test) => {
					if (season == test.season || season == "all") {
						if (subSeason == test.subSeason || subSeason == "all") {
							if (level == test.level || level == "all") {
								return (
									<AnOnlineTest
										title={test.title}
										season={test.season}
										subSeason={test.subSeason}
										level={test.level}
										shortKey={test.shortKey}
									/>
								);
							}
						}
					}
				})}
			</div>
		</div>
	);
}
