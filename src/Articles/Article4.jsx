export default function Article4() {
	return (
		<div className="p-6 md:py-20 md:px-50 max-w-7xl w-auto">
			<div className="flex flex-col items-center justify-center mb-10">
				<div className="mb-8">
					<picture>
						<img
							src="/Images/Article4.webp"
							className="max-w-2xl w-xl rounded-2xl max-h-105"
							alt="0.999... = 1"
						/>
					</picture>
				</div>
				<div className="flex items-center justify-center mb-3">
					<h1 className="font-black sm:text-2xl text-center text-shadow-blue-400 text-shadow-md">
						چرا ...۰.۹۹۹ دقیقاً برابر با ۱ است؟
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
							مطالعه: 3دقیقه
						</p>
					</div>
				</div>
			</div>
			<div dir="rtl">
				<div className="mb-12">
					<p className="text-lg text-center">
						تا حالا شده با یه دوست یا همکلاسیت بحث کنی و اون اصرار داشته باشه که
						عدد ۰.۹۹۹ (با خط بی‌نهایت روی ۹ها) همیشه یه ذره کمتر از ۱ هست؟ انگار
						یه فاصله‌ی خیلی خیلی ریز بین این دو تا وجود داره. اما بذار یه خبر
						تعجب‌آور بهت بدم: در ریاضیات، این دو تا عدد دقیقاً و کاملاً با هم
						برابرند! نه تقریباً، نه نزدیک، بلکه دقیقاً یکسان.
					</p>
				</div>
				<div className="mb-12">
					<p className="font-bold text-xl mb-2 text-sky-800">
						اثبات با کسرهای ساده
					</p>
					<div>
						<p className="mb-3">
							بیاییم از یه کسر معروف شروع کنیم: یک‌سوم. می‌دونیم که 1/3 برابر
							است با ...0.3333 (عدد ۳ بی‌نهایت تکرار می‌شه). حالا اگه طرفین و
							مخارج این کسر رو در ۳ ضرب کنیم، چی می‌شه؟
						</p>
						<p dir="ltr" className="text-center text-lg mb-2">
							1/3 × 3 = 1
						</p>
						<p dir="ltr" className="text-center text-lg mb-4">
							0.3333... × 3 = 0.9999...
						</p>
						<p className="text-center">
							چون ما صورت و مخرج رو در یک عدد ضرب کردیم، ارزش کسر عوض نمی‌شه. پس
							نتیجه می‌گیریم که ...0.9999 باید دقیقاً برابر با 1 باشه.
						</p>
					</div>
				</div>
				<div className="mb-12">
					<p className="font-bold text-xl mb-2 text-sky-800">اثبات جبری</p>
					<div>
						<div>
							<p className="mb-3">فرض کن ϰ برابر با ...0.999 باشه.</p>
							<p dir="ltr" className="text-center text-lg mb-4">
								ϰ = 0.999...
							</p>
						</div>
						<div>
							<p className="mb-3">حالا طرفین معادله رو در ۱۰ ضرب می‌کنیم:</p>
							<p dir="ltr" className="text-center text-lg mb-4">
								10ϰ = 9.999...
							</p>
						</div>
						<div>
							<p className="mb-3">
								حالا از معادله اول (ϰ) از معادله دوم (10ϰ) کم می‌کنیم:
							</p>
							<p dir="ltr" className="text-center text-lg mb-4">
								10ϰ - ϰ = 9.999... - 0.999...
							</p>
							<p dir="ltr" className="text-center text-lg mb-4">
								9ϰ = 9
							</p>
						</div>
						<div>
							<p className="mb-7">اگه طرفین رو بر ۹ تقسیم کنیم، می‌رسیم به:</p>
							<p className="text-center font-bold text-amber-500 outline-2 outline-offset-8 rounded-sm outline-dashed">
								ϰ = 1
							</p>
						</div>
					</div>
				</div>
				<div className="mb-12">
					<p className="font-bold text-xl mb-2 text-sky-800">
						چرا ذهن ما مقاومت می‌کنه؟
					</p>
					<p className="mb-0.5">
						دلیل اینکه این موضوع برامون عجیبه، اینه که ما عادت داریم اعداد رو به
						صورت «محدود» ببینیم. وقتی می‌گیم 0.9، بعد 0.99 و بعد 0.999، ذهنمون
						فکر می‌کنه داریم به ۱ نزدیک می‌شیم ولی هیچ‌وقت بهش نمی‌رسیم. اما در
						ریاضیات، نقطه‌ی ...0.999 (با بی‌نهایت ۹) دیگه یه فرآیندِ «نزدیک شدن»
						نیست، بلکه یه مقدارِ «ثابت و نهایی» هست.
					</p>
					<p>
						تصور کن روی خط اعداد هستی. اگر دو تا عدد با هم برابر نباشن، باید
						بینشون یه فاصله‌ی کوچولو باشه و بتونی یه عدد دیگه رو بینشون بذاری.
						اما کجا می‌تونی عددی بین ...0.999 و 1 بذاری؟ هیچ‌جا! چون هیچ عددی
						وجود نداره که از ...0.999 بزرگتر و از 1 کوچکتر باشه. پس این دو تا،
						در واقع یه نقطه‌ی واحد روی خط اعدادن.
					</p>
				</div>
				<div>
					<p className="text-center">
						ریاضیات پر از این حقایقیه که با شهود اولیه‌ی ما در تضادن، اما با
						منطق محکم ثابت می‌شن. این فقط یه بازی با اعداد نیست؛ بلکه
						نشون‌دهنده‌ی عمق و دقت سیستم اعداد ماست. دفعه بعد که این موضوع رو
						دیدی، به جای تعجب، از زیبایی منطقی‌اش لذت ببر!
					</p>
				</div>
			</div>
		</div>
	);
}
