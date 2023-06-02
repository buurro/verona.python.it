/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['GothamRnd'],
    },
    extend: {
      colors: {
        'page-dark': "#191919"
      }
    }
  },
  plugins: [],
}
