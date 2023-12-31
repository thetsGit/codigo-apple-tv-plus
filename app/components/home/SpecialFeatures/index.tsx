import { SPECIAL_FEATURES } from "@/app/data";
import { AnimatedFeatureItem } from "./AnimatedFeatureItem";

export const SpecialFeatures = () => {
	return (
		<div className="w-full py-12 z-mainContent relative px-8 sm:px-16">
			<ul className="container mx-auto">
				{SPECIAL_FEATURES.map((feature) => (
					<AnimatedFeatureItem key={feature} name={feature} />
				))}
			</ul>
		</div>
	);
};
