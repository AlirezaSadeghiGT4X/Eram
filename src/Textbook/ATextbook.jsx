export default function ATextbook({ imageURL, text, downloadURL }) {
	return (
		<div className="flex flex-col border-2 rounded-xl overflow-hidden shadow-lg shadow-blue-500 gap-2 mb-8 bg-white">
			<img src={imageURL} alt={text} className="w-full" />
			<div className="flex flex-col xl:p-4 px-2 py-4 gap-10">
				<p className="text-blue-700">{text}</p>
				<div className="flex flex-row-reverse">
					<a href={downloadURL} target="_blank">
						<button className="w-25 rounded-lg bg-blue-800 text-white px-5 py-2 text-sm cursor-pointer hover:ring-4 hover:bg-blue-600 ring-blue-900 transition">
							دانلود
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
