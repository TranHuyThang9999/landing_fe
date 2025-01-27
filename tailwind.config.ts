import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Thêm đường dẫn đến các tệp của flowbite (nếu cần)
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        shine: "shine 1s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;