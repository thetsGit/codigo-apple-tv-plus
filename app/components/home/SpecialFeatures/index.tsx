import { BENEFITS } from "@/app/data";

export const SpecialFeatures = () => {
	return (
		<div className="w-full bg-dark py-12">
			<ul className="container mx-auto">
				{BENEFITS.map((benefit) => (
					<li
						className="text-white mb-10 text-[3.125rem] font-bold max-w-[1200px] leading-tight"
						key={benefit}>
						{benefit}
					</li>
				))}
			</ul>
		</div>
	);
};
