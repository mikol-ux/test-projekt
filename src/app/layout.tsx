import "./globals.css";
import type { Metadata } from "next";
import { generalMetaData } from "./header";
import Script from "next/script";

export const metadata: Metadata = generalMetaData;

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`relative bg-white text-black dark:text-white dark:bg-black`}>
				{children}
				<Script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js" />
				<Script src="./js/index.js" />
			</body>
		</html>
	);
}