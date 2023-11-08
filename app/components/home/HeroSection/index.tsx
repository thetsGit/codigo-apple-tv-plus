import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
	return (
		<section className="container flex h-[70vh] justify-end flex-col text-white">
			<div>
				<h3 className="text-white text-[4rem] font-bold mb-8">
					All Apple Originals.
					<br />
					Only on Apple TV+
				</h3>

				<Link
					href="#"
					className="bg-white text-black rounded-full font-medium px-8 py-4 hover:opacity-90 transition-all tracking-wide mb-20 inline-block">
					Stream now
				</Link>

				<p className="text-lg">
					Watch on the
					<Image
						src="/apple-tv-mini-icon.png"
						width={40}
						height={40}
						alt="apple tv mini icon"
						className="inline mx-2"
					/>
					app.
				</p>
			</div>
		</section>
	);
};
