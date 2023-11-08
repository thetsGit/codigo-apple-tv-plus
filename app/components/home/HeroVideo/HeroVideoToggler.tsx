import React, { useEffect, useRef, FC } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VideoPlayButton } from "@/app/components/utils";
import { SetState } from "@/app/types/shared";
import { Spinner } from "@/app/components/utils";

type HeroVideoTogglerProps = {
	play: boolean;
	setPlay: SetState<boolean>;
	isLoading: boolean;
};

export const HeroVideoToggler: FC<HeroVideoTogglerProps> = ({
	play,
	setPlay,
	isLoading,
}) => {
	const animateRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const element = animateRef.current;

		if (element) {
			gsap.fromTo(
				element,
				{
					opacity: 1,
				},
				{
					opacity: 0,
					duration: 1,
					scrollTrigger: {
						trigger: element,
						start: "top 80%",
						end: "bottom 0%",
						scrub: 0.5,
					},
				}
			);
		}
	}, []);

	return (
		<div
			ref={animateRef}
			className="z-heroVideoToggler fixed bottom-[40px] right-[40px]">
			{isLoading ? (
				<Spinner />
			) : (
				<VideoPlayButton play={play} setPlay={setPlay} />
			)}
		</div>
	);
};
