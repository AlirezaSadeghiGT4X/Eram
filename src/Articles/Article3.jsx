export default function Article3() {
	return (
		<div className="p-6 md:py-20 md:px-50 max-w-7xl w-auto">
			<div className="flex flex-col items-center justify-center mb-10">
				<div className="mb-8">
					<picture>
						<img
							src="/Images/Article3.webp"
							className="max-w-2xl w-xl rounded-2xl"
							alt="فیبوناچی"
						/>
					</picture>
				</div>
				<div className="flex items-center justify-center mb-3">
					<h1 className="font-black sm:text-2xl text-center text-shadow-blue-400 text-shadow-md">
						اعداد فیبوناچی: امضای پنهان طبیعت‌
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
							مطالعه: 4دقیقه
						</p>
					</div>
				</div>
			</div>
			<div dir="rtl">
				<div className="mb-12">
					<p className="text-lg text-center">
						تا حالا دقت کردی که گل آفتابگردان، صدف حلزون، یا حتی طوفان‌های
						کهکشانی، همگی یه الگوی خاص و تکراری دارن؟ این الگو تصادفی نیست! این
						“رقص اعداد” هست که بهش می‌گن دنباله فیبوناچی و نسبت طلایی.
					</p>
				</div>
				<div className="mb-8">
					<p className="font-bold text-xl mb-2 text-sky-800">اعداد فیبوناچی</p>
					<div>
						<p className="mb-2">
							این دنباله از ایتالیا و ریاضیدانی به نام “لئوناردو پیسا” (که به
							فیبوناچی معروفه) شروع شد. اما فرمولش خیلی ساده‌ست:
						</p>
						<p className="mb-2 font-bold">
							هر عدد، حاصل جمع دو عدد قبلی خودش هست.
						</p>
						<p className="mb-4">بیایید شروع کنیم:</p>
						<ul className="list-decimal mr-4 mb-2 flex flex-col gap-2">
							<li>1</li>
							<li>1</li>
							<li>1 + 1 = 2</li>
							<li>1 + 2 = 3</li>
							<li>2 + 3 = 5</li>
							<li>3 + 5 = 8</li>
							<li>5 + 8 = 13</li>
							<li>8 + 13 = 21</li>
							<li>...</li>
						</ul>
						<p>
							به نظر می‌رسه یه سری عدد ساده باشن، اما وقتی شروع می‌کنیم به تقسیم
							کردن هر عدد بر عدد قبلی‌اش، یه چیز جادویی اتفاق می‌افته!
						</p>
					</div>
				</div>
				<div className="mb-8">
					<p className="font-bold text-xl mb-2 text-sky-800">
						ظهور عدد طلایی (Phi - ϕ)
					</p>
					<p className="mb-4">
						اگه هر عدد در دنباله فیبوناچی رو بر عدد قبلی‌اش تقسیم کنی، به یک عدد
						ثابت و عجیب می‌رسی:
					</p>
					<div className="flex justify-between items-center">
						<ul className="list-disc mb-2 mr-4 flex flex-col gap-2">
							<li>2 ÷ 1 = 2</li>
							<li>3 ÷ 2 = 1.5</li>
							<li>5 ÷ 3 ≈ 1.666</li>
							<li>8 ÷ 5 = 1.6</li>
							<li>13 ÷ 8 = 1.625</li>
							<li>21 ÷ 13 ≈ 1.615</li>
							<li>...</li>
							<li>144 ÷ 89 ≈ ...1.6179</li>
						</ul>
						<div className="mb-6 hidden md:flex">
							<img
								src="/Images/Article32.webp"
								alt="عدد طلایی"
								className="w-auto h-auto"
							/>
						</div>
					</div>
					<p className="mb-2">
						همونطور که می‌بینی، هرچی جلوتر می‌ریم، جواب به عدد ...۱.۶۱۸۰۳۳۹
						نزدیک‌تر می‌شه. به این عدد میگن نسبت طلایی یا فی (ϕ).
					</p>
					<p className="mb-4">
						این عدد اونقدر زیبا و متعادل هست که انسان‌ها از هزاران سال پیش،
						ناخودآگاه ازش استفاده کردن.
					</p>
					<div className="flex justify-center md:hidden">
						<img src="/Images/Article32.webp" alt="عدد طلایی" />
					</div>
				</div>
				<div className="mb-8">
					<p className="font-bold text-xl mb-2 text-sky-800">
						فیبوناچی در طبیعت
					</p>
					<p className="mb-4">
						این اعداد فقط توی کتاب‌های ریاضی نیستن؛ اون‌ها زبان طبیعتن!
					</p>
					<ul className="list-disc mb-2 mr-4 flex flex-col gap-2">
						<li>
							<p className="font-bold">گل آفتابگردان:</p>
							<p className="mb-2">
								دانه‌های وسط گل آفتابگردان به صورت مارپیچ چیده شدن. اگه دقت کنی،
								تعداد مارپیچ‌های ساعت‌گرد و پادساعت‌گرد، همیشه دو تا عدد متوالی
								در دنباله فیبوناچی هستن (مثلاً ۳۴ و ۵۵، یا ۵۵ و ۸۹). این چیدمان
								باعث می‌شه بیشترین تعداد دانه در کمترین فضا جا بشه!
							</p>
							<div className="flex justify-center">
								<img
									className="rounded-2xl w-60"
									src="/Images/Article33.webp"
									alt="عدد طلایی در گل آفتابگردان"
								/>
							</div>
						</li>
						<li>
							<p className="font-bold">صدف حلزون:</p>
							<p className="mb-2">
								اگه شکل صدف حلزون رو نگاه کنی، می‌بینی که هر دور جدیدش، دقیقاً
								با نسبت طلایی بزرگ‌تر می‌شه. به این شکل می‌گن “اسپیرال طلایی”.
							</p>
							<div className="flex justify-center">
								<img
									className="rounded-2xl w-60"
									src="/Images/Article34.webp"
									alt="عدد طلایی در صدف حلزون"
								/>
							</div>
						</li>
						<li>
							<p className="font-bold">گل رز و کاکتوس:</p>
							<p className="mb-2">
								تعداد گلبرگ‌های خیلی از گل‌ها (مثل رزها با ۵ یا ۸ گلبرگ، یا
								زنبق‌ها با ۳ گلبرگ) از اعداد فیبوناچی پیروی می‌کنه.
							</p>
							<div className="flex justify-center">
								<img
									className="rounded-2xl w-60"
									src="/Images/Article35.webp"
									alt="عدد طلایی در گل رز"
								/>
							</div>
						</li>
						<li>
							<p className="font-bold">کهکشان‌ها:</p>
							<p className="mb-2">
								بازوهای کهکشان راه شیری هم یه مارپیچ طلایی هستن!
							</p>
							<div className="flex justify-center">
								<img
									className="rounded-2xl w-62"
									src="/Images/Article36.webp"
									alt="عدد طلایی در بازوهای کهکشان راه‌شیری"
								/>
							</div>
						</li>
					</ul>
				</div>
				<div className="mb-12">
					<p className="font-bold text-xl mb-2 text-sky-800">
						فیبوناچی در هنر و معماری
					</p>
					<p className="mb-4">
						هنرمندان و معماران هم از این نسبت استفاده کردن تا کارهایشون “جذاب” و
						“متعادل” به نظر برسن:
					</p>
					<ul className="list-disc mb-2 mr-4 flex flex-col gap-2">
						<li>
							پارتنون یونان: نسبت عرض به ارتفاع ستون‌های معروف پارتنون، تقریباً
							همون نسبت طلایی هست.
						</li>
						<li>
							نقاشی‌های داوینچی: در تابلوی معروف “مونالیزا”، اگه یه مستطیل طلایی
							دور صورتش بکشی، دقیقاً با نسبت فی هم‌خوانی داره.
						</li>
						<li>
							معماری مدرن: حتی در طراحی لوگوهای معروف مثل اپل یا توییتر، از
							نسبت‌های نزدیک به طلایی استفاده شده تا چشم رو خسته نکنن.
						</li>
					</ul>
				</div>
				<div>
					<p className="text-center">
						اعداد فیبوناچی و نسبت طلایی نشون می‌دن که ریاضی، زبان پنهان جهان
						هست. از کوچک‌ترین دانه‌های گل تا بزرگ‌ترین کهکشان‌ها، همه تحت تأثیر
						این الگوهای ریاضی هستن. دفعه بعد که به یه گل نگاه کردی، یادت باشه که
						داری یه شاهکار ریاضی رو تماشا می‌کنی!{" "}
					</p>
				</div>
			</div>
		</div>
	);
}
