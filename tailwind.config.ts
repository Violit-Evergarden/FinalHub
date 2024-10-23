import type { Config } from "tailwindcss";

const basePx = Array(1000).fill(0).reduce((map, _, i) => {
  map[i] = `${i}px`;
  return map;
}, {});

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        btn_hover_bg: 'var(--button-hover-bg-color)',
        text_color: 'var(--button-text-color)',
        btn_active: 'var(--btn-active-color)',
        card_bg: 'var(--card-bg-color)',
        card_border: 'var(--card-border-color)',
      },
      width: {
        ...basePx,
      },
      height: {
        ...basePx,
      },
      borderRadius: {
        half: '50%',
      },
      padding: {
        ...basePx,
      },
      margin: {
        ...basePx,
      },
      boxShadow: {
        bt: 'var(--bottom-shadow)',
      }
    },
  },
  plugins: [],
};
export default config;
