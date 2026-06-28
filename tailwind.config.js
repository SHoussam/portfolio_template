/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5227FF',
          light: '#7B5CFF',
          dark: '#3A1BB3',
        },
        accent: {
          DEFAULT: '#FF9FFC',
          light: '#FFB8FD',
          dark: '#CC7FC9',
        },
        lavender: {
          DEFAULT: '#B19EEF',
          light: '#C7B9F5',
          dark: '#8A78C7',
        },
        surface: {
          DEFAULT: '#0D0A18',
          light: '#141024',
          lighter: '#1A1530',
          border: '#2A2245',
        },
        dark: {
          DEFAULT: '#050208',
          50: '#0A0612',
          100: '#0D0A18',
          200: '#141024',
          300: '#1A1530',
          400: '#2A2245',
          500: '#3D3460',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(82, 39, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(82, 39, 255, 0.4)',
        'glow-accent': '0 0 20px rgba(255, 159, 252, 0.3)',
        'glow-lavender': '0 0 20px rgba(177, 158, 239, 0.3)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(82, 39, 255, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(82, 39, 255, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
