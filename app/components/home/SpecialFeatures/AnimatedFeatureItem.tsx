import { useRef, useEffect, FC } from "react";
import { useScrollBasedAnimation } from "@/app/hooks";

type AnimatedFeatureItemProps = {
	name: string;
};

export const AnimatedFeatureItem: FC<AnimatedFeatureItemProps> = ({ name }) => {
	const animateRef = useScrollBasedAnimation();

	return (
		<li
			ref={animateRef}
			className="text-white mb-10 text-[2rem] md:text-[2.5rem] lg:text-[3.125rem] font-bold max-w-[1200px] leading-tight">
			{name}
		</li>
	);
};
