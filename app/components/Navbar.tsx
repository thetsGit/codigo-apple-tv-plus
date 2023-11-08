import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="w-full py-5 bg-light-dark border-b border-gray-700 px-3 fixed top-0 z-1000">
			<div className="max-w-6xl flex justify-between items-center m-auto">
				<Link href="/" className="text-xl font-bold text-white">
					Apple TV+
				</Link>

				<Link
					href="/tv"
					className="bg-white text-black rounded-full text-xs px-2.5 py-0.5 hover:opacity-90 transition-all tracking-wide inline-block">
					Stream now
				</Link>
			</div>
		</nav>
	);
};
