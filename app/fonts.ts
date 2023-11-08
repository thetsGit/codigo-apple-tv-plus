import localFont from "next/font/local";

export const sfPro = localFont({
	src: [
		{
			path: "../public/fonts/SFPRODISPLAYREGULAR.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/SFPRODISPLAYMEDIUM.otf",
			weight: "500",
			style: "medium",
		},
		{
			path: "../public/fonts/SFPRODISPLAYBOLD.otf",
			weight: "700",
			style: "bold",
		},
		{
			path: "../public/fonts/SFPRODISPLAYLIGHTITALIC.otf",
			weight: "300",
			style: "italic",
		},
	],
});
