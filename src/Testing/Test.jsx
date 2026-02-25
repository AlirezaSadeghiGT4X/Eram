export default function Test({ question, g1, g2, g3, g4, no }) {
	return (
		<div dir="rtl" className="flex flex-col gap-4 border p-3 rounded-2xl bg-white">
			<div className="flex">
				<p>{no}-</p>
				<p>{question}</p>
			</div>
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-1">
					<input type="checkbox"/>
                    <div className="flex mb-0.5 gap-1">
                        <p>1)</p>
                        <p>{g1}</p>
                    </div>
				</div>
				<div className="flex items-center gap-1">
					<input type="checkbox"/>
                    <div className="flex mb-0.5 gap-1">
                        <p>2)</p>
                        <p>{g2}</p>
                    </div>
				</div>
				<div className="flex items-center gap-1">
					<input type="checkbox"/>
                    <div className="flex mb-0.5 gap-1">
                        <p>3)</p>
                        <p>{g3}</p>
                    </div>
				</div>
				<div className="flex items-center gap-1">
					<input type="checkbox"/>
                    <div className="flex mb-0.5 gap-1">
                        <p>4)</p>
                        <p>{g4}</p>
                    </div>
				</div>
			</div>
		</div>
	);
}
