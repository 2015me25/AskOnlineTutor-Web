import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        engineering: {
          dark: '#0B132B',
          navy: '#0F172A',
          blue: '#2563EB',
          cyan: '#0284C7',
          teal: '#0D9488',
          amber: '#D97706',
          rose: '#E11D48',
          purple: '#7C3AED',
          surface: '#F8FAFC',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
        'grid-dark': 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '16px 16px',
        'grid-md': '24px 24px',
      },
    },
  },
  plugins: [],
};

export default config;
