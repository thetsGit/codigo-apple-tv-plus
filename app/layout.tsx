import type { Metadata } from "next";
import { sfPro } from "./fonts";
import "./globals.scss";
import { Navbar, Footer } from "./components";

export const metadata: Metadata = {
	title: {
		template: "%s | Apple Tv Plus",
		default: "Home",
	},
	description: "The official of Apple Tv plus by Apple inc.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sfPro.className} antialiased tracking-wide bg-dark`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
