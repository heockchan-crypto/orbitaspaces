/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        navy: {
          950: '#050510',
          900: '#0B1021', // Space Base
          800: '#101830',
        },
        'space-base': '#0B1021',
        silver: {
          100: '#F7FAFC',
          200: '#EDF2F7',
          300: '#E2E8F0',
          400: '#CBD5E0',
          500: '#A0AEC0',
          600: '#718096',
          700: '#4A5568',
        },
        accent: {
          cyan: '#00F0FF',
          purple: '#7000FF',
          blue: '#4A90D9', // Kept for legacy compatibility if needed
          glow: '#6BB5FF', // Kept for legacy compatibility if needed
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Merriweather', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1e2a4a 1px, transparent 1px), linear-gradient(to bottom, #1e2a4a 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-slower': 'spin 90s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'grid-pulse': 'gridPulse 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
