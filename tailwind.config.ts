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
				gray: "#a1a1a6",
				"dark-80": "#00000080",
				blue: "#2997FF",
				silver: "#f5f5f7",
			},
			zIndex: {
				navBar: "1000",
				heroVideoToggler: "500",
				mainContent: "100",
				heroVideo: "10",
			},
		},
	},
	plugins: [require("tailwindcss-aspect-ratio")],
};
export default config;
