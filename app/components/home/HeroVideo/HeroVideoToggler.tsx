import React, { FC } from "react";
import { VideoPlayButton } from "@/app/components/utils";
import { SetState } from "@/app/types/shared";
import { Spinner } from "@/app/components/utils";
import { useScrollBasedAnimation } from "@/app/hooks";

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
	const animateRef = useScrollBasedAnimation(
		{
			opacity: 1,
		},
		{
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				start: "top 80%",
				end: "bottom 0%",
				scrub: 0.5,
			},
		}
	);

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
