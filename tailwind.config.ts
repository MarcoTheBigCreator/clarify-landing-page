import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8E9EF',
          100: '#D1D3DF',
          200: '#A3A7BF',
          300: '#757B9F',
          400: '#474F7F',
          500: '#1E233C',
          600: '#161B2E',
          700: '#121526',
          800: '#0E101E',
          900: '#0A0C16',
          950: '#05060B',
        },
      },
      dropShadow: {
        text: '0 2px 20px rgba(255, 255, 255, 0.60)',
        blue: '0 6px 20px rgba(71, 79, 127, 0.95)',
        'blue-dark': '0 6px 20px rgba(18, 21, 38, 0.95)',
        purple: '1px 4px 25px rgba(140, 0, 255, 0.80)',
        primary: '0 6px 20px rgba(71, 79, 127, 0.95)',
        'primary-dark': '0 6px 20px rgba(18, 21, 38, 0.95)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
