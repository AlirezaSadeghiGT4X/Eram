import ATextbook from "./ATextbook";

export default function AllTextbooks() {
	const textbooks = [
		{
			imageURL: "/Images/Textbook1.png",
			text: "درسنامه فصل اول ریاضی نهم(مجموعه ها)",
		},
		{
			imageURL: "/Images/Textbook2.png",
			text: "درسنامه فصل دوم ریاضی نهم(عدد های حقیقی)",
		},
		{
			imageURL: "/Images/Textbook3.png",
			text: "درسنامه فصل سوم ریاضی نهم(استدلال و اثبات در هندسه)",
		},
		{
			imageURL: "/Images/Textbook4.png",
			text: "درسنامه فصل چهارم ریاضی نهم(توان و ریشه)",
		},
		{
			imageURL: "/Images/Textbook5.png",
			text: "درسنامه فصل پنجم ریاضی نهم(عبارت های جبری)",
		},
		{
			imageURL: "/Images/Textbook6.png",
			text: "درسنامه فصل ششم ریاضی نهم(خط و معادله های خطی)",
		},
		{
			imageURL: "/Images/Textbook7.png",
			text: "درسنامه فصل هفتم ریاضی نهم(عبارت های گویا)",
		},
		{
			imageURL: "/Images/Textbook8.png",
			text: "درسنامه فصل هشتم ریاضی نهم(حجم و مساحت)",
		},
	];
	return (
		<div dir="rtl" className="xl:grid xl:grid-cols-3 xl:px-12 px-6 text-xs xl:text-base xl:gap-12 my-8">
			{textbooks.map((textbook, index) => (
				<ATextbook
					imageURL={textbook.imageURL}
					text={textbook.text}
					key={index}
				/>
			))}
		</div>
	);
}
