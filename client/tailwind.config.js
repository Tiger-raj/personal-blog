import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};
