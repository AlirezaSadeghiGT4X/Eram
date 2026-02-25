import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Clip from "./Clip";
export default function Clips() {
	const clips = [
		{
			imageURL: "/Images/Clip1.png",
			title: "عدد صفر",
			description:
				" صفر؛ داستان هیچ که دنیا را تغییر داداز هند باستان تا کامپیوترهای مدرن، عدد صفر مسیر ریاضیات را برای همیشه عوض کرد. سفری به تاریخچه اختراع صفر، سفرش به ایران و اروپا، و نقش شگفت‌انگیزش در دنیای دیجیتال امروز.",
			downloadURL: "https://www.aparat.com/v/zgld001",
		},
		{
			imageURL: "/Images/Clip2.png",
			title: "بی نهایت",
			description:
				"بینهایت؛ سفری به دنیای بی‌پایان . آیا تا به حال به بی‌نهایت فکر کرده‌اید؟ از هتل عجیب بینهایت گرفته تا کشف کانتور که نشان داد بعضی بی‌نهایت‌ها از بعضی دیگر بزرگترند. سفری جذاب به دنیای بی‌کران ریاضیات.",
			downloadURL: "https://www.aparat.com/v/yxarf49",
		},
		{
			imageURL: "/Images/Clip3.png",
			title: "عدد پی",
			description:
				"عدد پی؛ معمای ریاضی که هنوز حل نشدهعدد پی یا ۳/۱۴، معروف‌ترین عدد ریاضی که هنوز رازهایش کشف نشده. از ارشمیدس و جمشید کاشانی تا ۶۲/۸ تریلیون رقم محاسبه شده. آیا می‌دانستید تاریخ تولد شما توی پی پیدا می‌شود؟",
			downloadURL: "https://www.aparat.com/v/ghvv21q",
		},
	];
	return (
		<div>
			<Header page={"ویدئو‌های آموزشی"} />
			<div dir="rtl" className="p-10 flex gap-10 flex-col lg:flex-row items-center">
				{clips.map((clip) => (
					<Clip
						imageURL={clip.imageURL}
						title={clip.title}
						description={clip.description}
						downloadURL={clip.downloadURL}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
}
