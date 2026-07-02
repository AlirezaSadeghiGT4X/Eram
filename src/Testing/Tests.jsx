import Test from "./Test";

export default function Tests({
	question1,
	picture1,
	g11,
	g12,
	g13,
	g14,
	answer1,
	question2,
	picture2,
	g21,
	g22,
	g23,
	g24,
	answer2,
	question3,
	picture3,
	g31,
	g32,
	g33,
	g34,
	answer3,
}) {
	return (
		<div dir="rtl" className="flex flex-col gap-6 p-5 lg:mx-2">
			<Test
				question={question1}
				picture={picture1}
				g1={g11}
				g2={g12}
				g3={g13}
				g4={g14}
				answer={answer1}
				no={"1"}
			/>
			<Test
				question={question2}
				picture={picture2}
				g1={g21}
				g2={g22}
				g3={g23}
				g4={g24}
				answer={answer2}
				no={"2"}
			/>
			<Test
				question={question3}
				picture={picture3}
				g1={g31}
				g2={g32}
				g3={g33}
				g4={g34}
				answer={answer3}
				no={"3"}
			/>
		</div>
	);
}
