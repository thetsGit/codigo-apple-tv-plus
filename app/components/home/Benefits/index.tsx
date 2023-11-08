const BENEFITS = [
	`New Apple Originals every month — always ad‑free.`,
	"Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.",
	"Watch in 4K HDR video with immersive Spatial Audio.",
	"Share a single subscription with up to five people.",
];

export const Benefits = () => {
	return (
		<ul className="container">
			{BENEFITS.map((benefit) => (
				<li
					className="text-white mb-10 text-[3.125rem] font-bold max-w-[1200px] leading-tight"
					key={benefit}>
					{benefit}
				</li>
			))}
		</ul>
	);
};
