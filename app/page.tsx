import {
	HeroSection,
	Pricings,
	SpecialFeatures,
	MoviesMarquee,
	AppleDevices,
	OtherStreamingDevices,
} from "./components/home";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between flex flex-col">
			<HeroSection />
			<SpecialFeatures />
			<Pricings />
			<MoviesMarquee />
			<AppleDevices />
			<OtherStreamingDevices />
		</main>
	);
}

// parallex
// background video (with play / pause button - which will be separately existed)

// sections
// (1) hero texts -> half transparent - half black
// (2) pricing
// (3) scroll based animated carousel
// (4) marquee sliders
// (5) watch from anywhere
// (6) footer
