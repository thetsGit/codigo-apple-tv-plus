import { useRef, useEffect, FC } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimatedFeatureItemProps = {
	name: string;
};

export const AnimatedFeatureItem: FC<AnimatedFeatureItemProps> = ({ name }) => {
	const animateRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const element = animateRef.current;

		if (element) {
			gsap.fromTo(
				element,
				{
					y: 100,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					scrollTrigger: {
						trigger: element,
						start: "top 95%",
						end: "bottom 90%",
						scrub: 0.5,
					},
				}
			);
		}
	}, []);

	return (
		<li
			ref={animateRef}
			className="text-white mb-10 text-[3.125rem] font-bold max-w-[1200px] leading-tight">
			{name}
		</li>
	);
};
