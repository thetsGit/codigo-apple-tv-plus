import { VideoPlayButton } from "@/app/components/utils";
import { FC } from "react";
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
	return (
		<div className="z-heroVideoToggler fixed bottom-[40px] right-[40px]">
			{isLoading ? (
				<Spinner />
			) : (
				<VideoPlayButton play={play} setPlay={setPlay} />
			)}
		</div>
	);
};
