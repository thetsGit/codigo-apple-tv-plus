import localFont from "next/font/local";

export const sfPro = localFont({
	src: [
		{
			path: "../public/fonts/SFPRODISPLAYREGULAR.OTF",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/SFPRODISPLAYMEDIUM.OTF",
			weight: "500",
			style: "medium",
		},
		{
			path: "../public/fonts/SFPRODISPLAYBOLD.OTF",
			weight: "700",
			style: "bold",
		},
		{
			path: "../public/fonts/SFPRODISPLAYTHINITALIC.OTF",
			weight: "400",
			style: "italic",
		},
	],
});
