import { useRef, useEffect, ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimationOptions = {
	[key: string]: any;
};

type UseScrollBasedAnimation = (
	from?: AnimationOptions,
	to?: AnimationOptions
) => React.MutableRefObject<any>;

export const useScrollBasedAnimation: UseScrollBasedAnimation = (from, to) => {
	const animateRef = useRef(null);

	const defaultProps = {
		from: {
			y: 100,
			opacity: 0,
		},
		to: {
			y: 0,
			opacity: 1,
			duration: 0.5,
			scrollTrigger: {
				start: "top 95%",
				end: "bottom 90%",
				scrub: 0.5,
			},
		},
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const element = animateRef.current;

		if (element) {
			gsap.fromTo(element, from || defaultProps.from, {
				...(to || defaultProps.to),
				scrollTrigger: {
					trigger: element, // append trigger value whether default values are fallen back
					...(to?.scrollTrigger || defaultProps.to.scrollTrigger),
				},
			});
		}
	}, [from, to]);

	return animateRef;
};
