import type { Config } from 'tailwindcss';
import twAnimate from 'tailwindcss-animate';
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#131619',
        secondary: '#24AE7C',
        neutral: '#ABB8C4',
        muted: '#76828D',
        danger: '#F24E43',
      },
    },
  },
  plugins: [twAnimate],
} satisfies Config;
