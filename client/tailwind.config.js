/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Montserrat", "sans-serif"],
			},
			colors: {
				primary: "#ffffff",
				secondary: "#e5e5e5",
				sec_dark: "#102542",
				white: "#fff",
				black: "#000",
				gray: {
					100: "#f7fafc",
					// ...
					900: "#1a202c",
				},
			},
		},
		screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
	},
	plugins: [],
};
