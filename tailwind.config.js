/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          700: '#4338ca',
        },
        primary: {
          50: '#f0f7f4',
          100: '#d4ebe5',
          500: '#83B3A5',
          600: '#6a9885',
          700: '#5a8475',
        },
        success: {
          500: '#22c55e',
          600: '#16a34a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          150: '#f8f9fa',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      textColor: {
        primary: '#333333',
        secondary: '#666666',
        light: '#f0f0f0',
      },
      backgroundColor: {
        primary: '#333333',
        secondary: '#666666',
        light: '#f0f0f0',
      },
      boxShadow: {
        soft: '0 4px 15px rgba(0,0,0,.08)',
        modal: '0 4px 20px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
      animation: {
        'modal-slide-in': 'modalSlideIn 0.3s ease-out',
      },
      keyframes: {
        modalSlideIn: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
