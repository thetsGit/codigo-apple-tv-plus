import { useRef, useEffect, FC } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

type AnimatedOverlayProps = {
	className?: string;
};

export const AnimatedOverlay: FC<AnimatedOverlayProps> = ({ className }) => {
	const animateRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const element = animateRef.current;

		if (element) {
			gsap.fromTo(
				element,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.5,
					scrollTrigger: {
						trigger: element,
						start: "top 0%",
						end: "top -100%",
						scrub: 0.5,
					},
				}
			);
		}
	}, []);

	return (
		<div
			ref={animateRef}
			className={clsx("w-full h-full bg-dark absolute top-0", className)}
		/>
	);
};
