import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Clip from "./Clip";
import { OBClips } from "./OBClips";
export default function Clips() {
	const clips = OBClips;
	return (
		<div>
			<Header page={"ویدئو‌های آموزشی"} />
			<div
				dir="rtl"
				className="p-10 flex gap-10 flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center bg-sky-50"
			>
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
