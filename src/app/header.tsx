import { Metadata } from "next";

export const generalMetaData: Metadata = {
	title: "TheProjekt",
	description: "Remarkable Dreams Are Built With The Projekt",
	icons: {
		icon: [
			{ url: "/favicon/favicon.ico" }, // Favicon
			{ url: "/favicon/favicon-96x96.png", sizes: "96x96" }, // Favicon PNG
		],
		apple: { url: "/favicon/apple-touch-icon.png" }, // Apple Touch Icon
		shortcut: { url: "/favicon/favicon.ico" }, // Shortcut Icon
		other: [
			{ rel: "manifest", url: "/favicon/site.webmanifest" }, // Web App Manifest
			{ rel: "android-chrome", url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192" },
			{ rel: "android-chrome", url: "/favicon/web-app-manifest-512x512.png", sizes: "512x512" },
		]
	}
};
