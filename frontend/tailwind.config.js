/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf8f0',
          100: '#faefd8',
          200: '#f4dba8',
          300: '#ecc270',
          400: '#e2a43a',
          500: '#d4851c',
          600: '#b86514',
          700: '#8f4912',
          800: '#733b16',
          900: '#5f3214',
          950: '#371806',
        },
        spice: {
          50:  '#fef9ee',
          100: '#fdf0d0',
          200: '#fbde9d',
          300: '#f9c660',
          400: '#f6a825',
          500: '#e8880c',
          600: '#cf6507',
          700: '#ac470a',
          800: '#8c390f',
          900: '#74300f',
          950: '#3f1604',
        },
        herbal: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        dark: {
          900: '#0d0905',
          800: '#1a1208',
          700: '#261b0d',
          600: '#362815',
          500: '#4a371e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(228, 162, 58, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(228, 162, 58, 0.7)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f6c644 0%, #e8880c 50%, #b86514 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0d0905 0%, #1a1208 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 60% 50%, #2a1a08 0%, #0d0905 70%)',
      },
    },
  },
  plugins: [],
}
