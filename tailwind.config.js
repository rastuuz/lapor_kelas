/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dce4ff',
          200: '#b8c9ff',
          300: '#94aeff',
          400: '#7093ff',
          500: '#4c78ff',
          600: '#3d60cc',
          700: '#2e4899',
          800: '#1e3066',
          900: '#0f1833',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        dark: {
          bg: '#0a0b1a',
          card: '#111228',
          border: '#1e2040',
          hover: '#1a1c3a',
          text: '#e8e9f3',
          muted: '#7a7b99',
        },
        light: {
          bg: '#f8f9fc',
          card: '#ffffff',
          border: '#e8ecf4',
          hover: '#f0f2f8',
          text: '#1a1b2e',
          muted: '#7a7c99',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'premium': '0 20px 60px -15px rgba(76, 120, 255, 0.15)',
        'premium-lg': '0 30px 80px -20px rgba(76, 120, 255, 0.2)',
        'glow': '0 0 40px rgba(76, 120, 255, 0.1)',
        'inner-glow': 'inset 0 0 40px rgba(76, 120, 255, 0.05)',
      },
      backdropBlur: {
        'xl': '20px',
        '2xl': '40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'blur-in': 'blurIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [],
}