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
        tip_bg_green: 'var(--tip-bg-green)',
        tip_border_green: 'var(--tip-border-green)',
        tip_text_green: 'var(--tip-text-green)',
        tip_bg_info: 'var(--tip-bg-info)',
        tip_border_info: 'var(--tip-border-info)',
        tip_text_info: 'var(--tip-text-info)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		width: {...basePx},
  		height: {...basePx},
      minWidth: {...basePx},
      minHeight: {...basePx},
      maxWidth: {...basePx},
      maxHeight: {...basePx},
  		borderRadius: {
  			half: '50%',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		padding: {...basePx},
  		margin: {...basePx},
  		boxShadow: {
  			card_light: '0px 0px 12px #0000001f',
        card_dark: '0px 16px 48px 16px #00000014, 0px 12px 32px #0000001f, 0px 8px 16px -8px #00000029'
        // card_shadow: 'var(--card-shadow)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
