/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            backgroundImage: {
                "dark-transparent-dark-gradient":
                    "linear-gradient(180deg, rgba(9, 9, 11, 0.75) 0%, rgba(9, 9, 11, 0.1875) 50%, rgba(9, 9, 11, 0.75) 100%)",
                "white-transparent-white-gradient":
                    "linear-gradient(180deg, rgba(250, 250, 250, 0.45) 0%, rgba(250, 250, 250, 0.65) 100%)",
            },
            colors: {
                "green-pea": {
                    50: "#f3faf5",
                    100: "#e4f4e9",
                    200: "#cae8d4",
                    300: "#a0d5b0",
                    400: "#6fb986",
                    500: "#4b9c65",
                    600: "#398050",
                    700: "#2c5d3c",
                    800: "#2a5137",
                    900: "#24432f",
                    950: "#0f2417",
                },
                squirrel: {
                    50: "#f4f3f2",
                    100: "#e3e2de",
                    200: "#c9c5bf",
                    300: "#aaa29a",
                    400: "#8d8379",
                    500: "#83786f",
                    600: "#6f655f",
                    700: "#5a514e",
                    800: "#4f4744",
                    900: "#453f3e",
                    950: "#272221",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
                poppins: ['"Poppins"', "sans-serif"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
