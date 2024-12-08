import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"muted-blue": "var(--muted-blue)",
				"pitch-dark-blue": "var(--pitch-dark-blue)",
				"sky-blue": "var(--sky-blue)",
				"deep-Blue": "var(--deep-Blue)",
				"muted-text": "var(--muted-text)",
				"muted-text-2": "var(--muted-text-2)",
				"muted-text-3": "var(--muted-text-3)",
				"muted-text-4": "var(--muted-text-4)"
			}
		}
	},
	plugins: []
} satisfies Config;