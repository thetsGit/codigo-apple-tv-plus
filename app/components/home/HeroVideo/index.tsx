import ReactPlayer from "react-player";
import { SetState } from "@/app/types/shared";
import { FC } from "react";

type HeroVideoProps = {
	play: boolean;
	setIsLoading: SetState<boolean>;
};

const HeroVideo: FC<HeroVideoProps> = ({ play, setIsLoading }) => (
	<div className="w-full fixed top-0 z-heroVideo">
		<ReactPlayer
			className="m-0 p-0"
			url="/hero-video.mp4"
			width="100%"
			height="100%"
			muted
			playing={play}
			loop
			onReady={() => setIsLoading(false)}
		/>
	</div>
);

export default HeroVideo;
