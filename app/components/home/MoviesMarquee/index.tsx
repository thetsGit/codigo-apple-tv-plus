"use client";

import Marquee from "react-fast-marquee";
import { Movies } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import {
	ChevronRightIcon,
	PlayCircleIcon,
	PlayIcon,
	PauseIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export const MoviesMarquee = () => {
	const [play, setPlay] = useState(true);

	// generate double marquee sections by fake populating with Array func
	return (
		<div className="w-full flex gap-6 flex-col bg-dark py-12">
			{new Array(2).fill(null).map((_, index) => (
				<Marquee
					key={index}
					speed={50 * (index + 1)} // calculate marquee speed using indexes to differ rotation speed between subsequent marquees
					className="text-white gap-3 m-0"
					pauseOnHover
					play={play}>
					{Movies.map((movie) => (
						<div
							key={movie.name}
							className="relative w-[378px] h-[212px] rounded-xl overflow-hidden mr-5">
							<Image
								src={movie.posterLink}
								fill={true}
								alt={movie.name}
							/>

							{/* overlay section */}
							<div className="group cursor-pointer w-full h-full bg-dark-80 opacity-0 hover:opacity-100 flex justify-center items-center relative transition-all">
								<Link
									href={movie.streamingLink}
									className="bg-white text-black text-xs rounded-full font-bold px-6 py-3 hover:opacity-90 transition-all tracking-wide inline-block translate-y-4 group-hover:translate-y-0 transition-all duration-500">
									Stream now{" "}
									<PlayCircleIcon className="h-4 w-4 inline" />
								</Link>
							</div>
						</div>
					))}
				</Marquee>
			))}

			<div className="flex w-full justify-between items-center container mx-auto mt-4">
				<div />

				<Link
					href="#"
					className="border-white border text-white text-xs rounded-full font-bold px-6 py-3 hover:opacity-50 transition-all inline duration-300">
					See full lineup{" "}
					<ChevronRightIcon className="h-3 w-3 inline" />
				</Link>

				<div>
					<button
						type="button"
						onClick={() => setPlay((play) => !play)}
						className="border border-white rounded-full w-[2rem] h-[2rem] flex justify-center items-center">
						{play ? (
							<PauseIcon className="h-4 w-4 inline text-white" />
						) : (
							<PlayIcon className="h-4 w-4 inline text-white" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};
