import { AppCarousel } from "@/app/components/utils/AppCarousel";
import { Movies } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { useScrollBasedAnimation } from "@/app/hooks";

export const MoviesCarousel = () => {
	const animateRef = useScrollBasedAnimation();

	return (
		<div className="w-full pt-4 z-mainContent" ref={animateRef}>
			<AppCarousel>
				{Movies.map((movie) => (
					<div
						key={movie.name}
						className="w-full h-full relative text-white">
						<Image
							src={movie.posterUrl}
							fill={true}
							alt={movie.name}
						/>

						{/* overlay */}
						<div className="carousel-item-overlay w-full h-full bg-dark-80 flex justify-center items-center absolute transition-all top-0 opacity-100" />

						{/* content */}
						<div className="carousel-item-content w-full h-full flex justify-between flex-col absolute transition-all top-0 opacity-0 p-6 bg-movie-carousel-active-card">
							<div>
								<p className="font-bold text-xs lg:text-normal capitalize">
									{movie.openTime}
								</p>

								<p className="text-lg lg:text-3xl italic font-bold font-italic capitalize underline hidden md:block">
									{movie.logo}
								</p>
							</div>

							<div className="flex justify-between items-center">
								<h5 className="font-bold text-xl capitalize m-0 hidden md:block">
									{movie.genre}{" "}
									<span className="font-normal normal-case hidden lg:inline-block">
										&#x2022; {movie.quote}
									</span>
								</h5>

								<Link
									href={movie.streamingLink}
									className="bg-white text-black text-xs rounded-full font-bold px-6 py-3 hover:opacity-90 transition-all transition-all duration-500">
									Stream now{" "}
									<PlayCircleIcon className="h-4 w-4 inline" />
								</Link>
							</div>
						</div>
					</div>
				))}
			</AppCarousel>
		</div>
	);
};
