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
          500: '#c8861e',
          600: '#a66514',
          700: '#7e4a10',
          800: '#5f3813',
          900: '#4a2e11',
          950: '#2a1806',
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
        // Ivory / cream light surfaces
        ivory: {
          50:  '#fdfcf8',
          100: '#faf7f0',
          200: '#f5f0e4',
          300: '#ede5d0',
          400: '#ddd3b8',
          500: '#c9ba9a',
        },
        // Deep slate-navy for dark sections
        slate: {
          900: '#0f1623',
          800: '#18223a',
          700: '#1f2d4a',
          600: '#273858',
          500: '#334570',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(200, 134, 30, 0.25)' },
          '50%': { boxShadow: '0 0 45px rgba(200, 134, 30, 0.55)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f6c644 0%, #e8880c 50%, #b86514 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0f1623 0%, #18223a 100%)',
        'hero-gradient': 'linear-gradient(135deg, #faf7f0 0%, #f0ebe0 50%, #e8dfc8 100%)',
        'section-light': 'linear-gradient(180deg, #fdfcf8 0%, #faf7f0 100%)',
        'section-dark': 'linear-gradient(180deg, #0f1623 0%, #18223a 100%)',
      },
      boxShadow: {
        'silk': '0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05)',
        'silk-lg': '0 10px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
        'gold-glow': '0 0 30px rgba(200, 134, 30, 0.30), 0 0 60px rgba(200, 134, 30, 0.12)',
      },
    },
  },
  plugins: [],
}
