import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Price } from "@/app/data";
import { FC } from "react";
import { useScrollBasedAnimation } from "@/app/hooks";

type AnimatedPricingItemProps = {
	item: Price;
};

export const AnimatedPricingItem: FC<AnimatedPricingItemProps> = ({ item }) => {
	const animateRef = useScrollBasedAnimation();

	return (
		<li ref={animateRef}>
			<h2 className="text-2xl">{item.eyebrow}</h2>

			<h3 className="text-semiGiant font-bold leading-relaxed">
				{item.title}
			</h3>

			<p className="text-gray mb-10">
				{item.description}{" "}
				{item?.learnMoreLink && (
					<Link
						href={item?.learnMoreLink}
						className="text-blue hover:underline transition-all">
						Learn more{" "}
						<ChevronRightIcon className="h-3 w-3 inline" />
					</Link>
				)}
			</p>

			<Link
				href={item.link?.to}
				className="bg-white text-sm text-black rounded-full font-bold px-6 py-3 hover:opacity-90 transition-all tracking-wide inline-block">
				{item.link?.label}
			</Link>
		</li>
	);
};
