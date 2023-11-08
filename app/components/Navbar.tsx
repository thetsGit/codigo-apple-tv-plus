export const Navbar = () => {
	return (
		<nav className="w-full py-5 bg-light-dark border-b border-gray-700 px-3 sticky top-0">
			<div className="container flex justify-between items-center m-auto">
				<h1 className="text-xl font-bold text-white">Apple TV+</h1>
				<button className="bg-white text-black rounded-full text-xs px-2.5 py-0.5 hover:opacity-90 transition-all tracking-wide">
					Stream now
				</button>
			</div>
		</nav>
	);
};
