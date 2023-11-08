import { HeroSection, Pricings, Benefits } from "./components/home";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 flex flex-col gap-24">
			<HeroSection />
			<Pricings />
			<Benefits />
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
