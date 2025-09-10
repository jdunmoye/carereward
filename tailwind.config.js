/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CareReward Design System Colors
        primary: {
          50: '#FAFAFA',
          600: '#0F766E',
        },
        secondary: {
          50: '#F0FDFA',
          500: '#14B8A6',
          700: '#2D3748',
        },
        accent: {
          300: '#5EEAD4',
          500: '#10B981',
          600: '#06B6D4',
        },
        functional: {
          emerald: '#059669',
          amber: '#F59E0B',
          red: '#DC2626',
          blue: '#3B82F6',
        },
        text: {
          50: '#F7FAFC',
          400: '#A0AEC0',
          500: '#718096',
          700: '#2D3748',
        },
        gray: {
          50: '#F7FAFC',
          400: '#A0AEC0',
          500: '#718096',
          700: '#2D3748',
          900: '#1A202C',
        },
        green: {
          50: '#FAFAFA',
          600: '#0F766E',
        },
        teal: {
          50: '#F0FDFA',
          300: '#5EEAD4',
          500: '#14B8A6',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
        },
        cyan: {
          500: '#06B6D4',
        },
        amber: {
          500: '#F59E0B',
        },
        red: {
          600: '#DC2626',
        },
        blue: {
          500: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '70': '280px', // Sidebar width
        '18': '72px',  // Header height
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        'full': '24px', // For search inputs
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse': 'pulse 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'green': '0 25px 50px -12px rgba(15, 118, 110, 0.24)',
      },
    },
  },
  plugins: [],
}
