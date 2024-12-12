import type { Metadata } from "next";
import "./globals.css";
import { generalMetaData, generalSansLight, generalSansRegular } from "./header";

export const metadata: Metadata = generalMetaData;

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`${generalSansLight.variable} ${generalSansRegular.variable} bg-white text-black dark:text-white dark:bg-black`}>
				{children}
				<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
				<script src="./js/index.js"></script>
			</body>
		</html>
	);
}