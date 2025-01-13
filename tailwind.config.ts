import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '886px'
    },
    fontSize: {
      sm: '13px',
      md: '16px',
      lg: '22px',
      xl: '28px',
      banner: '120px'
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        phover: '#10540e'
      }
    }
  },
  plugins: []
} satisfies Config;
