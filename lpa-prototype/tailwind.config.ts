import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f7ff',
          100: '#dbe8ff',
          200: '#b3ceff',
          300: '#81adff',
          400: '#4a83ff',
          500: '#1f5dff',
          600: '#1245d9',
          700: '#0f36ac',
          800: '#0f2e87',
          900: '#10286c'
        },
        secondary: {
          50: '#f3f9ff',
          100: '#d9ecff',
          200: '#b4d8ff',
          300: '#82bbff',
          400: '#5099ff',
          500: '#2a7fff',
          600: '#1c61d9',
          700: '#1549aa',
          800: '#123a85',
          900: '#112f6a'
        },
        accent: '#00f5ff',
        'ai-surface': '#0b1221',
        success: '#22c55e',
        warning: '#facc15',
        danger: '#ef4444'
      },
      boxShadow: {
        glow: '0 0 24px rgba(31, 93, 255, 0.35)'
      },
      backgroundImage: {
        'ai-gradient':
          'radial-gradient(circle at 20% 20%, rgba(0,245,255,0.2), transparent 60%), radial-gradient(circle at 80% 30%, rgba(130,187,255,0.25), transparent 55%), linear-gradient(135deg, rgba(15,54,172,0.45), rgba(18,97,217,0.35))'
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,245,255,0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(31,93,255,0.4)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '200px 0' }
        }
      }
    }
  },
  plugins: []
};

export default config;
