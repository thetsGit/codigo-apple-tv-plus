import Image from "next/image";
import Link from "next/link";
import { OTHER_STREAMING_DEVICES } from "@/app/data";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const OtherStreamingDevices = () => {
	return (
		<div className="w-full bg-white pb-24">
			<div className="container mx-auto flex justify-center flex-col items-center gap-4">
				<h5 className="font-medium text-[2.5rem] text-center leading-[1.1]">
					See it on your smart TV <br /> or streaming device.
				</h5>

				<Link
					href="/tv"
					className="text-blue hover:underline transition-all inline-block">
					Set up your device{" "}
					<ChevronRightIcon className="h-3 w-3 inline" />
				</Link>

				<ul className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-8">
					{OTHER_STREAMING_DEVICES.map((device) => (
						<li
							key={device.name}
							className="w-full flex items-center justify-center">
							<Image
								src={device.photoUrl}
								width={100}
								height={100}
								alt={`photo of ${device.name}`}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
