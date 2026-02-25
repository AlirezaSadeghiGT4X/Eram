export default function Clip({ imageURL, title, description, downloadURL }) {
	return (
		<div
			className="flex flex-col items-center justify-between w-80 text-right border rounded-3xl overflow-hidden h-115"
		>
			<div>
				<img src={imageURL} alt={title} />
			</div>
			<div className="p-5 flex flex-col justify-between gap-5">
				<div dir="rtl" className="flex flex-col gap-4">
					<p className="text-xl font-bold text-shadow-blue-600 text-shadow-lg">
						{title}
					</p>
					<p>{description}</p>
				</div>
				<div className="w-full text-left">
					<a href={downloadURL}>
						<button  className="rounded-lg bg-blue-800 text-white p-2 text-sm cursor-pointer hover:ring-4 hover:bg-blue-600 ring-blue-900 transition">
							 مشاهده ویدئو »
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
