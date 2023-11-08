import Image from "next/image";
import Link from "next/link";
import { APPLE_DEVICES } from "@/app/data";

export const AppleDevices = () => {
	return (
		<div className="w-full bg-white py-24">
			<div className="container mx-auto flex justify-center flex-col items-center gap-4">
				<Image
					src="/apple-tv-icon.png"
					width={80}
					height={80}
					alt="apple tv icon"
				/>

				<h2 className="font-bold text-[4.5rem] text-center leading-[1.1]">
					Watch Apple TV+ anywhere <br /> on the Apple TV app.
				</h2>

				<p className="text-light-dark text-center">
					Find the Apple TV app on your favorite Apple devices.
					<br />
					Or watch Apple TV+ online at{" "}
					<Link
						href="/tv"
						className="text-blue hover:underline transition-all inline-block">
						tv.apple.com
					</Link>
				</p>

				<ul className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-8">
					{APPLE_DEVICES.map((device) => (
						<li
							key={device.name}
							className="w-full flex items-center justify-between flex-col">
							<Image
								src={device.photoUrl}
								width={80}
								height={80}
								alt={`photo of ${device.name}`}
							/>

							<h3 className="text-center text-lg mt-3 font-medium">
								{device.name}
							</h3>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
