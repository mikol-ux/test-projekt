import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				generalSans: ['"General Sans"', "sans-serif"], // Add General Sans
			},
			backgroundImage: {
				"bg-gradient-dir": "linear-gradient(var(--tw-gradient-direction, to right), var(--tw-gradient-stops))",
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
				"muted-4": "var(--muted-text-4)",
				"muted-5": "var(--muted-text-5)",
				"muted-6": "var(--muted-text-6)",
				"muted-7": "var(--muted-text-7)"
			}
		}
	},
	plugins: [
		function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
			addUtilities({
				".mask-content-box": {
					"-webkit-mask": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					"mask": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
				},
				".mask-composite-exclude": {
					"-webkit-mask-composite": "destination-out",
					"mask-composite": "exclude",
				},
			});
		}
	]
};

export default config;