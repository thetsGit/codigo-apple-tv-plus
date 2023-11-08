type LinkType = {
	label: string;
	to: string;
};

export type Price = {
	eyebrow: string;
	title: string;
	description: string;
	link: LinkType;
	learnMoreLink?: string;
};

export const PRICINGS: Array<Price> = [
	{
		eyebrow: "Buy an Apple device",
		title: "3 months free.",
		description:
			"Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.",
		link: {
			label: "Check eligibility",
			to: "#",
		},
	},
	{
		eyebrow: "Free 7-day trial",
		title: "$9.99/mo.",
		description:
			"A monthly subscription is just $9.99 per month after a free 7-day trial. Share Apple TV+ with your family.",
		link: {
			label: "Try it free",
			to: "#",
		},
	},
	{
		eyebrow: "Free 1‑month trial",
		title: "Apple One",
		description:
			"Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.",
		link: {
			label: "Try Apple One Free",
			to: "#",
		},
		learnMoreLink: "#",
	},
];
