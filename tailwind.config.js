/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#f6a64f",
          secondary: "#b56141",
          background: "#fffcf8",
          white: "#fbfbfb",
        },
        backgroundImage: {
         'gradient-primary': 'linear-gradient(to right, #f4a44f, #ac573f)',
        },
      },
    },
    plugins: [],
  };
  