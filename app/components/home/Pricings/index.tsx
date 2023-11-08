import { PRICINGS } from "@/app/data";
import { AnimatedPricingItem } from "./AnimatedPricingItem";

export const Pricings = () => {
	return (
		<div className="bg-dark w-full py-16 z-mainContent">
			<ul className="flex text-white gap-8 container mx-auto">
				{PRICINGS.map((price) => (
					<AnimatedPricingItem key={price.eyebrow} item={price} />
				))}
			</ul>
		</div>
	);
};
