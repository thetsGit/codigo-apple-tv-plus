import Image from "next/image";

export const Footer = () => {
	return (
		<footer className="w-full bg-silver p-3 z-navBar relative">
			<div className="flex justify-center items-center mx-auto">
				<Image
					src="/apple-logo.png"
					width={15}
					height={15}
					alt="apple logo"
					className="inline"
				/>

				<p className="text-gray text-xs ml-2">
					Copyright © 2023 Apple Inc. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
