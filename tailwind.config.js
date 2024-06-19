/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dark-elements':'hsl(209, 23%, 22%)',
      'dark-bg':'hsl(207, 26%, 17%)',
      'light-txt':'hsl(200, 15%, 8%)',
      'light-input':'hsl(0, 0%, 52%)',
      'light-bg':'hsl(0, 0%, 98%)',
      'light-txt-elem':'hsl(0, 0%, 100%)',
    },
    extend: {},
    fontFamily:{
      NunitoSans: ['Nunito Sans', 'sans-serif']
    }
  },
  plugins: [],
}

