/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
