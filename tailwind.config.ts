import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// use 'rem' instead of px to globally control font sizes in relation to devices' widths via media queries
			fontSize: {
				xs: ".75rem", // 12px
				sm: ".875rem", // 14px
				base: "1rem", // 16px
				lg: "1.125rem", // 18px
				xl: "1.25rem", // 20px
				"2xl": "1.5rem", // 24px
			},
			colors: {
				"light-dark": "#161617CC",
				dark: "#000",
				white: "#fff",
				active: "#FDCE29",
				highlight: "#0F6DB0",
				selected: "#1D1C1C",
				action: "#298BFD",
				alert: "#FD2929",
			},
			boxShadow: {
				app: "0px 4px 10px 0px rgba(0, 0, 0, 0.03)",
				button: "0px 3px 5px 0px rgba(0, 0, 0, 0.07)",
			},
			lineHeight: {
				reduced: "0.75",
			},
			backgroundImage: {
				"app-gradient":
					"linear-gradient(180deg, #FFFFFF01 0%, #F8F8F8 100%)",
				"app-mini-gradient":
					"linear-gradient(180deg, #FFFFFF50 0%, #FFFFFF 100%)",
			},
			zIndex: {},
		},
	},
	plugins: [require("tailwindcss-aspect-ratio")],
};
export default config;
