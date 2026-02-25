import Submit from "./Submit";
import Tests from "./Tests";
import Timer from "./Timer";

export default function Exam() {
	const questions = [
		{
			shortKey: "111",
			question1:
				"اگر A دارای n عضو باشد ، همه زیر مجموعه های آن چند زیرمجموعه دارد؟",
			g11: "2^n^2",
			g12: "n^2",
			g13: "2^2^n",
			g14: "2n",
			question2:
				"کدام یک از گزینه‌ها ، یک مجموعه را مشخص می کند؟",
			g21: "10 عدد گویای کوچک تر از 10",
			g22: "مضرب های صحیح و کوچک تر از هزار عدد 7",
			g23: "چهار عدد فرد طبیعی",
			g24: "سه شمارنده طبیعی عدد 8",
			question3:
				"کدام یک از مجموعه های زیر ، تهی است؟",
			g31: "اعداد طبیعی کوچک تر از 8 که مکعب کامل باشند",
			g32: "بزرگ ترین عدد صحیح کوچک تر از صفر",
			g33: "مقسوم‍‌علیه های زوج عدد 123",
			g34: "دو شمارنده اول عدد 120",
		},
		{
			shortKey: "112",
			question: "",
			g1: "",
			g2: "",
			g3: "",
			g4: "",
		},
		{
			shortKey: "113",
			question: "",
			g1: "",
			g2: "",
			g3: "",
			g4: "",
		},
	];
	return (
		<div className="bg-blue-100 pb-12">
			<Timer/>
			{questions.map((question) =>
				question.shortKey == localStorage.getItem("shortKey") ? (
					<Tests
						question1={question.question1}
						g11={question.g11}
						g12={question.g12}
						g13={question.g13}
						g14={question.g14}
						question2={question.question2}
						g21={question.g21}
						g22={question.g22}
						g23={question.g23}
						g24={question.g24}
						question3={question.question3}
						g31={question.g31}
						g32={question.g32}
						g33={question.g33}
						g34={question.g34}
					/>
				) : (
					<div></div>
				),
			)}
			<Submit/>
		</div>
	);
}
