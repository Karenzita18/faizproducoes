import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				faiz:{
					100: "#000000",
					200: "#FFFFFF",
					300: "#444444",
					400: "#ff0000",
				},
				quadrado: {
					100: "#312782",
					200: "#e20613",
					300: "#e61b72",
					400: "#29a600",
					500: "#169cd8",
					600: "#ffff00",
					700: "#D3D3D3",
				},
			},
		},
	},
	plugins: [require('tailwindcss-animated')
	],
}
export default config
