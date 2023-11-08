import { FC } from "react";
import clsx from "clsx";
import { useScrollBasedAnimation } from "@/app/hooks";

type AnimatedOverlayProps = {
	className?: string;
};

export const AnimatedOverlay: FC<AnimatedOverlayProps> = ({ className }) => {
	const animateRef = useScrollBasedAnimation(
		{
			opacity: 0,
		},
		{
			opacity: 1,
			duration: 0.5,
			scrollTrigger: {
				start: "top 0%",
				end: "top -100%",
				scrub: 0.5,
			},
		}
	);

	return (
		<div
			ref={animateRef}
			className={clsx("w-full h-full bg-dark absolute top-0", className)}
		/>
	);
};
