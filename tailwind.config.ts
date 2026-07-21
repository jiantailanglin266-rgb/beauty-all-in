import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/config/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ブランドカラー（siteConfig の思想と一致）
        charcoal: {
          DEFAULT: '#1c1c1e',
          soft: '#2b2b2e',
          light: '#3a3a3d',
        },
        ivory: '#faf8f4',
        sand: '#f3efe8',
        greige: '#e6e0d6',
        gold: {
          DEFAULT: '#c2a05a', // シャンパンゴールド
          light: '#d8bd82',
          dark: '#a5843f',
        },
        ink: '#22201c',
        muted: '#6b665e',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
        ],
        serif: [
          'var(--font-serif)',
          'Hiragino Mincho ProN',
          'Yu Mincho',
          'serif',
        ],
      },
      maxWidth: {
        content: '1120px',
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(28, 28, 30, 0.12)',
        'card-hover': '0 18px 48px -12px rgba(28, 28, 30, 0.22)',
        gold: '0 10px 30px -8px rgba(194, 160, 90, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
