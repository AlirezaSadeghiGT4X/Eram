import Test from "./Test";

export default function Tests({
	question1,
	g11,
	g12,
	g13,
	g14,
	question2,
	g21,
	g22,
	g23,
	g24,
	question3,
	g31,
	g32,
	g33,
	g34,
}) {
	return (
		<div dir="rtl" className="flex flex-col gap-6 p-5">
			<Test question={question1} g1={g11} g2={g12} g3={g13} g4={g14} no={"1"} />
			<Test question={question2} g1={g21} g2={g22} g3={g23} g4={g24} no={"2"} />
			<Test question={question3} g1={g31} g2={g32} g3={g33} g4={g34} no={"3"} />
		</div>
	);
}
