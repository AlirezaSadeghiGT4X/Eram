export default function Article2() {
	return (
		<div dir="rtl" className="p-6 md:py-20 md:px-50 max-w-7xl w-auto  select-none">
			<div className="flex flex-col items-center justify-center mb-10">
				<div className="mb-8">
					<picture>
						<img
							src="/Images/Article2.webp"
							className="max-w-2xl rounded-2xl"
							alt="1089"
						/>
					</picture>
				</div>
				<div className="flex items-center justify-center mb-3">
					<p className="font-black sm:text-2xl text-center text-shadow-blue-400 text-shadow-md">
						چرا اعداد عجیب و غریب همیشه تکرار می‌شوند؟ (قدرت جادویی ۱۰۸۹)
					</p>
				</div>
				<div dir="rtl" className="flex items-center justify-center gap-2">
					<div>
						<svg
							width="18"
							height="20"
							viewBox="0 0 18 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 9V13C1 16.3137 3.68629 19 7 19H11C14.3137 19 17 16.3137 17 13V9C17 5.68629 14.3137 3 11 3H7C3.68629 3 1 5.68629 1 9Z"
								stroke="#C1C1C1"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M9 6L9 11"
								stroke="#C1C1C1"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M11 3V2C11 1.44772 10.5523 1 10 1H8C7.44772 1 7 1.44772 7 2V3"
								stroke="#C1C1C1"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M16.139 5.44971L16.7617 4.81667C17.149 4.42294 17.1438 3.7898 16.75 3.40251L16.0371 2.70125C15.6434 2.31396 15.0103 2.31918 14.623 2.71291L14.0003 3.34595"
								stroke="#C1C1C1"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</div>
					<div className="mb-0.5">
						<p dir="rtl" className="font-medium text-gray-500">
							مطالعه: 3دقیقه
						</p>
					</div>
				</div>
			</div>
			<div className="mb-12">
				<p className="text-lg text-center">
					بیا یک بازی ریاضی ساده و فوق‌العاده جالب انجام بدیم که نتیجه‌اش همیشه
					یک عدد ثابت و شگفت‌انگیزه. این موضوع نیازی به دانش پیچیده نداره و با
					همون ریاضی دبیرستان قابل درکه، اما نتیجه‌اش مثل جادوئه!
				</p>
			</div>
			<div className="mb-8">
				<p className="font-bold text-xl mb-2 text-sky-800">
					بازی ریاضی: فرمول ۱۰۸۹
				</p>
				<div>
					<p className="mb-2">
						این مراحل رو با هر عدد سه رقمی که دوست داری (به شرطی که رقم اول و
						سوم فرق داشته باشن) انجام بده:
					</p>
					<ul className="list-decimal mr-4 flex flex-col gap-2">
						<li className="font-medium">
							<p>یک عدد سه رقمی انتخاب کن:</p>
							<p>مثلاً: ۷۵۳</p>
							<p>(شرط: رقم صدگان و یکان نباید یکی باشن. مثلاً ۷۵۷ نشه)</p>
						</li>
						<li className="font-medium">
							<p>همون عدد رو برعکس بنویس:</p>
							<p>برعکس ۷۵۳ میشه: ۳۵۷</p>
						</li>
						<li className="font-medium">
							<p className="mb-3">عدد کوچک‌تر رو از عدد بزرگ‌تر کم کن:</p>
							<p dir="ltr" className="text-center">
								753 − 357 = 396
							</p>
						</li>
						<li className="font-medium">
							<p>حاصل تفریق رو دوباره برعکس کن:</p>
							<p>برعکس ۳۹۶ میشه: ۶۹۳</p>
						</li>
						<li className="font-medium">
							<p className="mb-3">
								حاصل تفریق (مرحله ۳) رو با برعکس خودش (مرحله ۴) جمع کن:
							</p>
							<div className="flex flex-row-reverse justify-center items-center">
								<p dir="ltr" className="text-center">
									396 + 693 =
								</p>
								<p className="text-amber-500 text-xl text-shadow-black text-shadow-xs pb-0.5">
									1089
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="mb-8">
				<p className="font-bold text-xl mb-2 text-sky-800">
					آیا همیشه ۱۰۸۹ میشه؟
				</p>
				<div>
					<p className="mb-2">
						بله! با هر عدد سه رقمی که شرط اول و آخرش فرق داشته باشه، به این عدد
						می‌رسی. بیاییم با یک عدد دیگه تست کنیم: ۹۱۲
					</p>
					<ul className="list-decimal mr-4 flex flex-col gap-2">
						<li>
							<p>برعکس: 219</p>
						</li>
						<li>
							<p>تفریق: 912 − 219 = 693</p>
						</li>
						<li>
							<p>برعکس تفریق: 396</p>
						</li>
						<li>
							<p>جمع: 693 + 396 = 1089</p>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<p className="font-bold text-xl mb-2 text-sky-800">
					اثبات ریاضی (چرا این اتفاق می‌افتد؟)
				</p>
				<div className="space-y-2">
					<p>فرض کن عدد سه رقمی ما ABC باشه.</p>
					<p>یعنی: 100A + 10 B + C</p>
					<p>که در اون A رقم صدگان، B دهگان و C یکان هست.</p>
					<p className="mb-4">شرط ما اینه که A {">"} C (تا تفریق منفی نشه).</p>
					<ul className="list-decimal mr-4 flex flex-col gap-2">
						<li className="mb-2.5">
							<p className="font-medium mb-4 text-lg">عدد برعکس:</p>
							<p>A + 10B + 100C : CBA</p>
						</li>
						<li className="mb-2.5">
							<p className="font-medium mb-4 text-lg">
								تفریق (عدد اصلی منهای برعکس):
							</p>
							<div dir="ltr" className="space-y-4 text-lg text-center mb-4">
								<p>( 100 A + 10 B + C ) − ( 100 C + 10 B + A )</p>
								<p>= 100 A − A + 10 B − 10 B + C − 100 C</p>
								<p>= 99 A − 99 C</p>
								<p>= 99 ( A − C )</p>
							</div>
							<div className="space-y-1">
								<p>پس حاصل تفریق همیشه مضربی از ۹۹ هست.</p>
								<p>
									چون A و C ارقام ۱ تا ۹ هستن و A {">"} C، اختلاف ( C − A )
									می‌تونه از ۱ تا ۹ باشه.
								</p>
								<p>پس حاصل تفریق یکی از این عددهاست:</p>
								<p>99 , 198 , 297 , 396 , 495 , 594 , 693 , 792 , 891</p>
							</div>
						</li>
						<li className="mb-2.5">
							<p className="font-medium mb-4 text-lg">نکته جالب:</p>
							<p className="mb-2">اگر به این لیست دقت کنی، در همه این اعداد:</p>
							<ul className="list-disc mr-4 flex flex-col gap-2">
								<li>رقم وسط همیشه ۹ هست.</li>
								<li className="space-y-1">
									<p>جمع رقم اول و رقم آخر همیشه ۹ میشه.</p>
									<p>مثلاً در 396 : 3 + 6 = 9</p>
									<p>یا در 495 : 4 + 5 =9</p>
								</li>
							</ul>
						</li>
						<li>
							<p className="font-medium mb-4 text-lg">جمع نهایی:</p>
							<p>فرض کن حاصل تفریق ما عددی به شکل X 9 Y X9Y باشه.</p>
							<p>می‌دونیم که X + Y = 9.</p>
							<p className="mb-4">
								وقتی این عدد رو برعکس می‌کنیم (Y9X) و با خودش جمع می‌کنیم:
							</p>
							<div dir="ltr" className="space-y-4 text-lg text-center mb-4">
								<p>( 100 X + 90 + Y ) + ( 100 Y + 90 + X )</p>
								<p>= 100 ( X + Y ) + 180 + ( X + Y )</p>
								<p dir="ltr" className="text-right">
									: X + Y = 9 چون
								</p>
								<p>= 100 (9) + 180 + 9</p>
								<p>= 900 + 180 + 9</p>
								<div className="flex justify-center gap-1.5 items-center">
									<p>= </p>
									<p className="text-amber-500 text-xl text-shadow-black text-shadow-xs pb-0.5">
										1089
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
