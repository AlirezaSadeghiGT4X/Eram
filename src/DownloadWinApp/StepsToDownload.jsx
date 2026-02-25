export default function StepsToDownload() {
	return (
		<div className="flex flex-col px-8 mt-8 text-right mb-12">
			<p className="lg:text-2xl text-xl text-blue-700">مراحل دانلود اپلیکیشن ویندوز</p>
			<div className="mt-7 flex flex-col gap-6">
				<div className="flex flex-row-reverse">
					<p> -1</p>
					<p>
						ابتدا با استفاده از گزینه بالا یا اسکن کیو آر کد وارد سایت دانلود
						فایل شوید
					</p>
				</div>
				<div className="flex justify-center">
					<img
						src="/Images/Download1.png"
						alt="سایت دانلود"
						className="w-4xl border-2 border-blue-900 rounded-2xl"
					/>
				</div>
			</div>
            <div className="mt-7 flex flex-col gap-6">
				<div className="flex flex-row-reverse">
					<p> -2</p>
					<p >
						با استفاده از گزینه - برای دریافت فایل کلیک کنید - فایل فشرده را دانلود کنید
					</p>
				</div>
				<div className="flex justify-center">
					<img
						src="/Images/Download2.png"
						alt="سایت دانلود"
						className="w-4xl border-2 border-blue-900 rounded-2xl"
					/>
				</div>
			</div>
            <div className="mt-7 flex flex-col gap-6">
				<div className="flex flex-row-reverse">
					<p> -3</p>
					<p >
						.پس از دانلود ، فایل را از حالت فشرده خارج کنید
					</p>
				</div>
				<div className="flex justify-center">
					<img
						src="/Images/Download3.png"
						alt="سایت دانلود"
						className="w-4xl border-2 border-blue-900 rounded-2xl"
					/>
				</div>
			</div>
            <div className="mt-7 flex flex-col gap-6">
				<div className="flex lg:flex-row-reverse lg:text-right text-center flex-col text-rose-600">
					<p> : نکته</p>
					<p>
						برای استفاده بهینه‌تر شما در هر بخش می توانید شما با استفاده از گزینه - درباره این برنامه - خلاصه ای از کاربرد و نحوه استفاده از آن بخش را مشاهده کنید
					</p>
				</div>
				<div className="flex justify-center">
					<img
						src="/Images/Download5.png"
						alt="سایت دانلود"
						className="w-4xl border-2 border-blue-900 rounded-2xl"
					/>
				</div>
			</div>
		</div>
	);
}
