import Feature from "./Feature";
import { OBFeatures } from "./OBFeatures";
export default function Features() {
	const features = OBFeatures;
	return (
		<div className="flex flex-col gap-10 xl:mt-16">
			{features.map((feature) => (
				<Feature
					key={feature.title}
					title={feature.title}
					description={feature.description}
					imageURL={feature.imageURL}
					justify={feature.justify}
				/>
			))}
		</div>
	);
}
