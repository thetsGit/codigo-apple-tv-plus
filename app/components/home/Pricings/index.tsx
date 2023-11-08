import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { PRICINGS } from "@/app/data";

export const Pricings = () => {
	return (
		<div className="bg-dark w-full py-12">
			<div className="flex text-white gap-8 container mx-auto">
				{PRICINGS.map((price) => (
					<div key={price.eyebrow}>
						<h2 className="text-2xl">{price.eyebrow}</h2>

						<h3 className="text-[2.5rem] font-bold">
							{price.title}
						</h3>

						<p className="text-gray mb-10">
							{price.description}{" "}
							{price?.learnMoreLink && (
								<Link
									href={price?.learnMoreLink}
									className="text-blue hover:underline transition-all">
									Learn more{" "}
									<ChevronRightIcon className="h-3 w-3 inline" />
								</Link>
							)}
						</p>

						<Link
							href={price.link?.to}
							className="bg-white text-sm text-black rounded-full font-bold px-6 py-3 hover:opacity-90 transition-all tracking-wide inline-block">
							{price.link?.label}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
