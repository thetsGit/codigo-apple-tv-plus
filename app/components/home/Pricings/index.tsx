import { PRICINGS } from "@/app/data";
import { AnimatedPricingItem } from "./AnimatedPricingItem";

export const Pricings = () => {
	return (
		<div className="bg-dark w-full py-16 z-mainContent px-8 sm:px-16">
			<ul className="text-white gap-14 lg:gap-8 container mx-auto grid grid-cols-1 lg:grid-cols-3">
				{PRICINGS.map((price) => (
					<AnimatedPricingItem key={price.eyebrow} item={price} />
				))}
			</ul>
		</div>
	);
};
