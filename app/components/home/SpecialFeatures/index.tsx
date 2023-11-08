import { SPECIAL_FEATURES } from "@/app/data";

export const SpecialFeatures = () => {
	return (
		<div className="w-full bg-dark py-12 z-mainContent">
			<ul className="container mx-auto">
				{SPECIAL_FEATURES.map((feature) => (
					<li
						className="text-white mb-10 text-[3.125rem] font-bold max-w-[1200px] leading-tight"
						key={feature}>
						{feature}
					</li>
				))}
			</ul>
		</div>
	);
};
