import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import clsx from "clsx";
import { SetState } from "@/app/types/shared";

type VideoPlayerButtonProps = {
	play: boolean;
	setPlay: SetState<boolean>;
	className?: string;
};

export const VideoPlayButton: FC<VideoPlayerButtonProps> = ({
	play,
	setPlay,
	className,
}) => {
	return (
		<button
			type="button"
			onClick={() => setPlay((play) => !play)}
			className={clsx(
				"border border-white rounded-full w-[2rem] h-[2rem] flex justify-center items-center",
				className
			)}>
			{play ? (
				<PauseIcon className="h-4 w-4 inline text-white" />
			) : (
				<PlayIcon className="h-4 w-4 inline text-white" />
			)}
		</button>
	);
};
