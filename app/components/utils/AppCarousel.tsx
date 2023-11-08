import clsx from "clsx";
import { FC, ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type AppCarouselProps = {
	children: ReactNode;
	className?: string;
};

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 3,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export const AppCarousel: FC<AppCarouselProps> = ({ children, className }) => {
	return (
		<Carousel
			responsive={responsive}
			ssr
			infinite
			autoPlay
			swipeable
			centerMode
			itemClass={clsx(
				"mx-3 w-full rounded-2xl overflow-hidden aspect-[1/0.6]",
				className
			)}>
			{children}
		</Carousel>
	);
};
