/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0A0A0A',
        ivory: '#F5E8D3',
        royal: '#FAFAFA',
        saffron: '#D9A441',
        'india-green': '#138808',
        festival: '#FFD700',
        muted: '#888888',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
