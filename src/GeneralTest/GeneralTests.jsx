import AGeneralTest from "./AGeneralTest";

export default function GeneralTests() {
	const tests = [
		{
			id: "1",
			title: "آزمون نوبت دوم پایه نهم",
			level: "آسان",
		},
		{
			id: "2",
			title: "آزمون نوبت دوم پایه نهم",
			level: "متوسط",
		},
		{
			id: "3",
			title: "آزمون نوبت دوم پایه نهم",
			level: "سخت",
		},
	];
	return (
		<div
			dir="rtl"
			className="xl:grid xl:grid-flow-row-dense xl:grid-cols-3 xl:grid-rows-3 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-12 sm:text-sm xl:px-12 px-6 text-sm xl:text-base xl:gap-12 my-8"
		>
			{tests.map((test) => (
				<AGeneralTest id={test.id} title={test.title} level={test.level} />
			))}
		</div>
	);
}
