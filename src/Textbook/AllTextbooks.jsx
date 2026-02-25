import ATextbook from "./ATextbook";

export default function AllTextbooks() {
	const textbooks = [
		{
			imageURL: "/Images/Textbook1.png",
			text: " فصل( اول ریاضی نهم(مجموعه ها)",
			downloadURL: "https://uploadkon.ir/uploads/695221_26TextbookLesson1.rar",
		},
		{
			imageURL: "/Images/Textbook2.png",
			text: " فصل دوم ریاضی نهم(عدد های حقیقی)",
			downloadURL: "https://uploadkon.ir/uploads/ef9a21_26TextbookLesson2.rar",
		},
		{
			imageURL: "/Images/Textbook3.png",
			text: " فصل سوم ریاضی نهم(استدلال و اثبات در هندسه)",
			downloadURL: "https://uploadkon.ir/uploads/77fd21_26TextbookLesson3.rar",
		},
		{
			imageURL: "/Images/Textbook4.png",
			text: " فصل چهارم ریاضی نهم(توان و ریشه)",
			downloadURL: "https://uploadkon.ir/uploads/2ec921_26TextbookLesson4.rar",
		},
		{
			imageURL: "/Images/Textbook5.png",
			text: " فصل پنجم ریاضی نهم(عبارت های جبری)",
			downloadURL: "https://uploadkon.ir/uploads/cb1e21_26TextbookLesson5.rar",
		},
		{
			imageURL: "/Images/Textbook6.png",
			text: " فصل ششم ریاضی نهم(خط و معادله های خطی)",
			downloadURL: "https://uploadkon.ir/uploads/ea3921_26TextbookLesson6.rar",
		},
		{
			imageURL: "/Images/Textbook7.png",
			text: " فصل هفتم ریاضی نهم(عبارت های گویا)",
			downloadURL: "https://uploadkon.ir/uploads/f2c221_26TextbookLesson7.rar",
		},
		{
			imageURL: "/Images/Textbook8.png",
			text: " فصل هشتم ریاضی نهم(حجم و مساحت)",
			downloadURL: "https://uploadkon.ir/uploads/635b21_26TextbookLesson8.rar",
		},
	];
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
