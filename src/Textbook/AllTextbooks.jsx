import ATextbook from "./ATextbook";
import { OBTextbooks } from "./OBTextbooks";

export default function AllTextbooks() {
	const textbooks = OBTextbooks;
	return (
		<div
			dir="rtl"
			className="xl:grid xl:grid-flow-row-dense xl:grid-cols-3 xl:grid-rows-3 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-12 sm:text-sm xl:px-12 px-6 text-sm xl:text-base xl:gap-12 my-8"
		>
			{textbooks.map((textbook, index) => (
				<ATextbook
					imageURL={textbook.imageURL}
					text={textbook.text}
					downloadURL={textbook.downloadURL}
					key={index}
				/>
			))}
		</div>
	);
}
