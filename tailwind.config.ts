import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Ensure these variables are defined in your global CSS
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    // Uncomment these if you need Tailwind plugins
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
export default config;
