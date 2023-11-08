import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const PRICES = [
	{
		title: "Buy an Apple device",
		type: "3 months free.",
		description:
			"Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.",
		link: {
			label: "Check eligibility",
			to: "#",
		},
	},
	{
		title: "Free 7-day trial",
		type: "$9.99/mo.",
		description:
			"A monthly subscription is just $9.99 per month after a free 7-day trial. Share Apple TV+ with your family.",
		link: {
			label: "Try it free",
			to: "#",
		},
	},
	{
		title: "Free 1‑month trial",
		type: "Apple One",
		description:
			"Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.",
		link: {
			label: "Try Apple One Free",
			to: "#",
		},
		withLearnMore: true,
	},
];

export const Pricings = () => {
	return (
		<section className="flex text-white gap-8">
			{PRICES.map((price) => (
				<div key={price.title}>
					<h2 className="text-xl">{price.title}</h2>

					<h3 className="text-[2.5rem] font-bold">{price.type}</h3>

					<p className="text-gray mb-10">
						{price.description}{" "}
						{price?.withLearnMore && (
							<Link
								href="#"
								className="text-blue hover:opacity-80 transition-all">
								Learn more{" "}
								<ChevronRightIcon className="h-3 w-3 inline" />
							</Link>
						)}
					</p>

					<Link
						href={price.link?.to}
						className="bg-white text-sm text-black rounded-full font-medium px-6 py-3 hover:opacity-90 transition-all tracking-wide inline-block">
						{price.link?.label}
					</Link>
				</div>
			))}
		</section>
	);
};
