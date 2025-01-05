import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			fontFamily: {
				generalSans: ['"General Sans"', 'sans-serif'], // Add General Sans
			},
			screens: {
				"2xl": "1920px",
				"3xl": "2560px",
				"4xl": "3200px",
				"5xl": "7680px"
			},
			colors: {
				black: "var(--black)",
				white: {
					DEFAULT: "var(--white)",
					"300": "#C6C6C6",
					"800": "#555555"
				},
				"muted-blue": "var(--muted-blue)",
				"pitch-dark-blue": "var(--pitch-dark-blue)",
				"sky-blue": "var(--sky-blue)",
				"deep-blue": "var(--deep-blue)",
				"muted": "var(--muted-text)",
				"muted-2": "var(--muted-text-2)",
				"muted-3": "var(--muted-text-3)",
				"muted-4": "var(--muted-text-4)"
			}
		}
	},
	plugins: []
} satisfies Config;