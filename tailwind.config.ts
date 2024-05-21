import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        danger: {
          light: '#FEF2F2',
          lighter: '#F99687',
          default: '#DC2626',
          dark: '#AC2222',
          darker: '#7F1D1D',
        },
        warning: {
          lighter: '#FFF7ED',
          light: '#F5B074',
          default: '#EA580C',
          dark: '#B24113',
          darker: '#7C2D12',
        },
        success: {
          lighter: '#F0FDF4',
          light: '#8ECAAC',
          default: '#059669',
          dark: '#077151',
          darker: '#064E3B',
        },
        'white': '#FFF',
        'black': '#000'
      }
    },
  },
  plugins: [],
};
export default config;
