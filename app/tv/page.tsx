import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "tv-page",
};

export default function Page() {
	return (
		<div className="h-screen w-full flex justify-center items-center flex-col">
			<p className="text-white text-giant font-bold">TV page</p>

			<Link
				href={"/"}
				className="text-blue hover:underline transition-all">
				<ChevronLeftIcon className="h-3 w-3 inline" />
				Back to home
			</Link>
		</div>
	);
}
