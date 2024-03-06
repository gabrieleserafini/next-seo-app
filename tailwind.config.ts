import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.blue,
        gradientPrimaryFrom: "#017BFF",
        gradientPrimaryTo: "#05C8DD",
        backgroundDark: "#000914",
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': ['0.625rem', {
          lineHeight: '0.75rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'sm': ['0.75rem', {
          lineHeight: '0.938rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'base': ['0.875rem', {
          lineHeight: '1.063rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'lg': ['1.125rem', {
          lineHeight: '1.375rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'xl': ['1.5rem', {
          lineHeight: '1.813rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'subtitle2': ['0.875rem', {
          lineHeight: '1.063rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'subtitle': ['1.125rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.425em',
          fontWeight: '400',
        }],
        'h7': ['0.625rem', {
          lineHeight: 'normal',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'h6': ['1.25rem', {
          lineHeight: 'normal',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'h5': ['2rem', {
          lineHeight: '2.438rem',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'h4': ['2.25rem', {
          lineHeight: 'normal',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'h3': ['2.5rem', {
          lineHeight: 'normal',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'h2': ['3.625rem', {
          lineHeight: 'normal',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'h1': ['6rem', {
          lineHeight: 'normal',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), nextui()],
  darkMode: 'class',
};
export default config;
