"use client";

import { useState } from "react";
import {
	HeroSection,
	Pricings,
	SpecialFeatures,
	MoviesMarquee,
	AppleDevices,
	OtherStreamingDevices,
} from "@/app/components/home";
import dynamic from "next/dynamic";
import { HeroVideoToggler } from "@/app/components/home/HeroVideo/HeroVideoToggler";

const HeroVideo = dynamic(() => import("@/app/components/home/HeroVideo"), {
	ssr: false,
});

export default function Home() {
	const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(true);
	const [isHeroVideoLoading, setIsHeroVideoLoading] = useState(true);

	return (
		<main className="flex flex-col items-center justify-between flex flex-col relative">
			<HeroVideo
				play={isHeroVideoPlaying}
				setIsLoading={setIsHeroVideoLoading}
			/>

			<HeroVideoToggler
				play={isHeroVideoPlaying}
				setPlay={setIsHeroVideoPlaying}
				isLoading={isHeroVideoLoading}
			/>

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
