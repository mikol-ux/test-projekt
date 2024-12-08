import type { Metadata } from "next";
import "./globals.css";
import { generalMetaData, generalSansLight, generalSansRegular } from "./header";

export const metadata: Metadata = generalMetaData;

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`${generalSansLight.variable} ${generalSansRegular.variable} theme-light`}>
				{children}
			</body>
		</html>
	);
}
