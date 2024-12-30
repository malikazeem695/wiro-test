/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    '*.html',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js',
    './tailwind-config.css'
  ],
  theme: {
    extend: {
      fontSize: {
      },
      lineHeight: {
       
      },
      fontFamily: {
       
      },
      colors: {
        // // Primary Colors
        // 'primary': 'var(--color-primary)',
        // 'brand-black': 'var(--color-brand-black)',
        // 'brand-white': 'var(--color-brand-white)',
        // 'brand-grey': 'var(--color-brand-grey)',

        // // Primary Color Variants
        // 'primary-light-1': 'var(--color-primary-light-1)',
        // 'primary-light-2': 'var(--color-primary-light-2)',
        // 'primary-base': 'var(--color-primary-base)',
        // 'primary-dark-1': 'var(--color-primary-dark-1)',
        // 'primary-dark-2': 'var(--color-primary-dark-2)',

        // // Support Colors
        // 'secondary': 'var(--color-secondary)',
        // 'secondary-dark': 'var(--color-secondary-dark)',
        // 'support-1': 'var(--color-support-1)',
        // 'support-2': 'var(--color-support-2)',
        // 'support-3': 'var(--color-support-3)',
        // 'support-4': 'var(--color-support-4)',

        // // Typography Colors
        // 'typography-brand-black': 'var(--color-typography-brand-black)',
        // 'typography-brand-white': 'var(--color-typography-brand-white)',
        // 'typography-brand-grey': 'var(--color-typography-brand-grey)',
      },
      // animation: {
      //   'fade-in': 'fadeIn 0.3s ease-in-out forwards',
      //   'fade-out': 'fadeOut 0.3s ease-in-out forwards',
      // },
      // keyframes: {
      //     fadeIn: {
      //         '0%': { opacity: '0' },
      //         '100%': { opacity: '1' },
      //     },
      //     fadeOut: {
      //         '0%': { opacity: '1' },
      //         '100%': { opacity: '0' },
      //     },
      // }
    },
    screens: {
      "xs": "475px",
      'sm': '600px',
      'md': '767px',
      'lg': '1280px',
      'xl': '1800px',
      'xxl': "2000px"
    }
  },
  plugins: [],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  }
}