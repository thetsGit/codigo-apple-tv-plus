"use client";
// due to the need to toggle the hero video play programmatically outside of itself - use client was unfortunately needed to use here

import { useState } from "react";
import {
	HeroSection,
	Pricings,
	SpecialFeatures,
	MoviesCarousel,
	MoviesMarquee,
	AppleDevices,
	OtherStreamingDevices,
} from "@/app/components/home";
import dynamic from "next/dynamic";
import { HeroVideoToggler } from "@/app/components/home/HeroVideo/HeroVideoToggler";
import { AnimatedOverlay } from "@/app/components/utils/AnimatedOverlay";

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

			<AnimatedOverlay className="z-animatedOverlay" />

			<HeroVideoToggler
				play={isHeroVideoPlaying}
				setPlay={setIsHeroVideoPlaying}
				isLoading={isHeroVideoLoading}
			/>

			<HeroSection />
			<SpecialFeatures />
			<Pricings />
			<MoviesCarousel />
			<MoviesMarquee />
			<AppleDevices />
			<OtherStreamingDevices />
		</main>
	);
}
