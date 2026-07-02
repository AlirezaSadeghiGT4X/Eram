import Submit from "./Submit";
import Tests from "./Tests";
import Timer from "./Timer";

export default function Exam() {
	return (
		<div className="bg-blue-50 pb-12">
			<Timer />
			<Tests />
			<Submit />
		</div>
	);
}
