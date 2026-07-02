export default function Article1() {
	return (
		<div className="p-6 md:py-20 md:px-50 max-w-7xl w-auto">
			<div className="flex flex-col items-center justify-center mb-10">
				<div className="mb-8">
					<picture>
						<img
							src="/Images/Article1.webp"
							className="max-w-2xl"
							alt="مونتی هال"
						/>
					</picture>
				</div>
				<div className="flex items-center justify-center mb-3">
					<h1 className="font-black sm:text-2xl text-center text-shadow-blue-400 text-shadow-md">
						مونتی هال : رازی که احتمال را زیر و رو می‌کند
					</h1>
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
							مطالعه: 5دقیقه
						</p>
					</div>
				</div>
			</div>
			<div dir="rtl">
				<div className="mb-5">
					<p className="font-bold text-xl mb-2 text-sky-800">
						یک بازی ساده، یک معمای ابدی
					</p>
					<div className="text-gray-800 text-justify">
						<p className="indent-4 text-gray-800 text-justify">
							تصور کن در یک برنامه تلویزیونی هیجان‌انگیز ایستاده‌ای. سه درب بزرگ
							جلویت: درب ۱، ۲ و ۳. پشت یکی ماشین لوکس، پشت دوتای دیگر بزغاله‌های
							بداخلاق! مجری لبخند می‌زنه و می‌گه: “یکی رو انتخاب کن.” تو درب ۱
							رو برمی‌داری. ناگهان مجری درب ۳ رو باز می‌کنه و… بزغاله!
						</p>
						<p>حالا سؤال کلیدی: بمونی روی درب ۱ یا به درب ۲ تعویض کنی؟</p>
						<p>
							غریزه‌ات می‌گه: “حالا دو درب مونده، شانس ۵۰-۵۰!” اما اشتباه
							بزرگیه. تعویض ۶۶٪ شانس برد می‌ده! این پارادوکس مونتی هاله،
							نام‌گذاری‌شده به افتخار مجری واقعی، مونتی هال. از ۱۹۷۵ تا حالا،
							ذهن میلیون‌ها نفر رو به هم ریخته – حتی ریاضیدان‌ها!
						</p>
					</div>
				</div>
				<div className="mb-5">
					<p className="font-bold text-xl mb-2 text-sky-800">
						تاریخچه: از تلویزیون به دانشگاه
					</p>
					<div className="text-gray-800 text-justify">
						<p className="indent-4 text-gray-800 text-justify">
							پارادوکس در سال ۱۹۷۵ در مجله Scientific American توسط استیو سلوی
							توصیف شد، بر اساس بازی واقعی مونتی هال (۱۹۶۰ها). اولش همه مسخره‌ش
							کردن: “۵۰-۵۰ واضحه!” اما پل اردوش (ریاضیدان افسانه‌ای) باور نکرد
							تا جرالد روزنبرگ با کامپیوتر ثابت کرد.
						</p>
						<ul className="list-disc mt-3 mr-1">
							<li>
								۱۹۹۰: مجله Vogue مقاله‌ای نوشت و خواننده‌ها خشمگین شدن – نامه‌ها
								مثل سیل اومد!
							</li>
							<li>
								۱۹۹۱: NPR در ۱۹۹۱ پخش کرد و جِرِمی کِسِنِر با ۱۰۰ هزار بازی
								کامپیوتری ثابت کرد: ماندن ۳۳%، تعویض ۶۷%.
							</li>
							<li>
								امروز: درس اجباری دانشگاه‌هاست – حتی فیزیک کوانتوم ازش الهام
								گرفته!
							</li>
						</ul>
					</div>
				</div>
				<div className="mb-5">
					<p className="font-bold text-xl mb-2  text-sky-800">
						توضیح ساده: چرا مغزمون گول می‌خوره؟
					</p>
					<div className="text-gray-800 text-justify">
						<p className="mb-4">سناریو کلاسیک:</p>
						<ul className="list-decimal mt-3 mb-6 mr-1 flex gap-1.5 flex-col">
							<li>احتمال اولیه: هر درب ۱/۳.</li>
							<li>تو درب ۱ انتخاب می‌کنی (۱/۳ ماشین).</li>
							<li>
								مجری همیشه درب بزغاله باز می‌کنه (اگر دو بزغاله باشه، تصادفی
								انتخاب می‌کنه).
							</li>
							<li>
								حالا درب ۲ “جدید” به نظر می‌رسه، اما اطلاعات جدید اضافه شده!
							</li>
						</ul>
						<p className="mb-1 text-black">
							تصویر ذهنی غلط: “دو درب، شانس مساوی.”
						</p>
						<p>واقعیت: مجری “شانس درب‌های ۲+۳ (۲/۳)” رو به درب ۲ منتقل کرده!</p>
					</div>
				</div>
				<div className="mb-5">
					<p className="font-bold text-xl mb-2  text-sky-800">
						تحلیل منطقی (با فرض انتخاب درب ۱)
					</p>
					<div className="text-gray-800 text-justify mb-8">
						<p className="mb-4">
							برای اینکه موضوع کاملاً شفاف بشه، بیایم سناریو رو دقیق‌تر باز
							کنیم. فرض می‌کنیم تو همیشه درب ۱ رو انتخاب کردی. حالا مجری (Host)
							که می‌دونه ماشین کجاست، یکی از درب‌های دیگه (۲ یا ۳) رو باز می‌کنه
							که پشتش بزغاله باشه. در این حالت، دو استراتژی داری:
						</p>
						<ul className="list-decimal mt-3 mb-6 mr-1 flex gap-1.5 flex-col">
							<li>موندن روی درب 1</li>
							<li>تعویض به درب باقی‌مانده</li>
						</ul>
						<p className="text-black mb-5">
							تحلیل دقیق بر اساس جایگاه واقعی ماشین:
						</p>
						<p className="text-gray-900 font-semibold">
							حالت اول:ماشین پشت درب ۱ است(احتمال ۱/۳)
						</p>
						<ul className="list-disc">
							<li className="mb-1.5 mt-2">انتخاب تو: درب ۱</li>
							<li className="mb-1.5">
								رفتار مجری: مجری می‌تونه درب ۲ یا ۳ رو باز کنه (چون هر دو
								بزغاله‌ان). فرض کن درب ۲ رو باز کرد.
							</li>
							<li className="mb-1.5">
								اگر بمونی: برد (چون ماشین همون درب ۱ بود)
							</li>
							<li className="mb-6">
								اگر تعویض کنی: باخت (چون مجری درب ۲ رو باز کرد، پس درب ۳
								بزغاله‌ست)
							</li>
						</ul>
						<p className="text-gray-900 font-semibold">
							حالت دوم:ماشین پشت درب ۲ است(احتمال ۱/۳)
						</p>
						<ul className="list-disc">
							<li className="mb-1.5 mt-2">انتخاب تو: درب ۱</li>
							<li className="mb-1.5">
								رفتار مجری: مجری مجبوره درب ۳ رو باز کنه (چون درب ۲ ماشین داره و
								نمی‌تونه باز کنه).
							</li>
							<li className="mb-1.5">
								اگر بمونی: باخت (ماشین پشت درب ۲ بود، نه ۱)
							</li>
							<li className="mb-6">
								اگر تعویض کنی: برد (چون مجری درب ۳ رو باز کرد، پس ماشین پشت درب
								۲ است)
							</li>
						</ul>
						<p className="text-gray-900 font-semibold">
							حالت سوم:ماشین پشت درب ۳ است(احتمال ۱/۳)
						</p>
						<ul className="list-disc">
							<li className="mb-1.5 mt-2">انتخاب تو: درب ۱</li>
							<li className="mb-1.5">
								رفتار مجری: مجری مجبوره درب ۲ رو باز کنه (چون درب ۳ ماشین داره).
							</li>
							<li className="mb-1.5">
								اگر بمونی: باخت (ماشین پشت درب ۳ بود، نه ۱)
							</li>
							<li className="mb-1.5">
								اگر تعویض کنی: برد (چون مجری درب ۲ رو باز کرد، پس ماشین پشت درب
								۳ است)
							</li>
						</ul>
					</div>
					<div className="mb-5">
						<div className="flex items-center justify-center">
							<img src="/Images/Article12.webp" alt="پارادوکس مونتی هال" />
						</div>
					</div>
					<div className="mb-10">
						<p className="font-bold text-xl mb-2 text-sky-800">
							اثبات ریاضی: فرمول‌بندی دقیق
						</p>
						<div className="text-gray-800 text-justify">
							<p className="mb-2">
								فرض کن درب ۱ رو انتخاب کردی و مجری درب ۳ رو باز کرد.
							</p>
							<ul className="list-decimal">
								<li>
									<p className="text-gray-950 mb-4">
										فرمول بیز(Bayes’ Theorem)
									</p>
									<div className="w-full flex items-center justify-center">
										<img
											className="rounded-3xl mb-4"
											src="/Images/Article13.webp"
											alt="پارادوکس مونتی هال"
										/>
									</div>
								</li>
								<li className="mb-6">
									<p className="text-gray-950 mb-4">جایگذاری اعداد:</p>
									<ul className="list-disc flex flex-col gap-2">
										<li>P ( ماشین در ۱ ) = ۳ / ۱ (شانس اولیه)</li>
										<li>
											P ( باز شدن ۳ ∣ ماشین در ۱ ) = ۲ / ۱(اگر ماشین در ۱ باشه،
											مجری تصادفی ۲ یا ۳ رو باز می‌کنه)
										</li>
										<li>
											P ( باز شدن ۳ ) = ۲ / ۱ (محاسبه شده از مجموع حالات ممکن)
										</li>
									</ul>
								</li>
								<li>
									<p className="text-gray-950 mb-3">محاسبه نهایی:</p>
									<div className="w-full flex items-center justify-center">
										<img
											className="rounded-3xl mb-4"
											src="/Images/Article14.webp"
											alt="پارادوکس مونتی هال"
										/>
									</div>
									<div className="text-gray-950 mb-12">
										<p>نتیجه:</p>
										<p>
											شانس انتخاب اولت ۱/۳ ثابت می‌مونه. پس شانس درب باقی‌مانده
											(درب ۲) میشه.
										</p>
									</div>
									<p className="text-center font-bold text-amber-500 outline-2 outline-offset-8 rounded-sm outline-dashed">
										پس تعویض کردن شانس برد رو دو برابر می‌کنه!
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="mb-6 lg:mb-12">
						<p className="font-bold text-xl mb-4  text-sky-800">
							کاربردهای واقعی :
						</p>
						<ul className="list-disc flex flex-col gap-2">
							<li>
								<p>پزشکی: تست مثبت HIV – تعویض به تست دوم.</p>
							</li>
							<li>
								<p>
									جستجو: ناسا سیگنال فضایی پیدا کنه، “تعویض” به فرضیه‌های دیگه.
								</p>
							</li>
							<li>
								<p>اقتصاد: سهام – “ماندن” یا “تعویض” بر اساس اخبار.</p>
							</li>
							<li>
								<p>بازی‌ها: پوکر، Among Us.</p>
							</li>
						</ul>
					</div>
					<div>
						<p className="text-center">
							پارادوکس مونتی هال نشون می‌ده احتمال چقدر فریبنده‌ست. از TV به
							تصمیم‌گیری جهانی! دفعه بعد شرط بستی، تعویض کن.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
