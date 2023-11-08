import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
	return (
		<div className="flex h-screen w-full justify-end flex-col text-white bg-dark py-12">
			<div className="container mx-auto">
				<h3 className="text-white text-[4.5rem] font-bold mb-8">
					All Apple Originals.
					<br />
					Only on Apple TV+
				</h3>

				<Link
					href="/tv"
					className="bg-white text-black rounded-full font-bold px-8 py-4 hover:opacity-90 transition-all tracking-wide mb-20 inline-block">
					Stream now
				</Link>

				<p className="text-lg">
					Watch on the
					<Image
						src="/apple-tv-icon.png"
						width={40}
						height={40}
						alt="apple tv mini icon"
						className="inline mx-2"
					/>
					app.
				</p>
			</div>
		</div>
	);
};
