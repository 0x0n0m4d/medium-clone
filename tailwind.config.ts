import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '552px',
      sm: '727px',
      md: '886px',
      lg: '903px',
      xl: '987px',
      '2xl': '1080px'
    },
    fontSize: {
      xs: '13px',
      sm: '14px',
      base: '16px',
      md: '20px',
      lg: '22px',
      xl: '28px',
      '2xl': '32px',
      '3xl': '106px',
      '4xl': '120px'
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        phover: '#10540e'
      },
      maxWidth: {
        xl: '1192px'
      }
    }
  },
  plugins: []
} satisfies Config;
