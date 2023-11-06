/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px', // Custom extra small screen
      sm: '640px', // Default small screen
      md: '768px', // Default medium screen
      lg: '1024px', // Default large screen
      xl: '1280px', // Default extra large screen
      '2xl': '1536px', // Custom 2x large screen
      '3xl': '1920px', // Custom 3x large screen
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      0.5: '0.5px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
    },
    extend: {
      backgroundColor: {
        primary: '#F2EEE9',
        secondary: '#DDDDDD',
        success: '#652F90',
        warning: '#EFD9CE',
        info: '#DEC0F1',
        dark: '#3F3F3F',
      },
      textColor: {
        primary: '#3F3F3F',
        success: '#652F90',
      },
      borderColor: {
        primary: '#3F3F3F',
        secondary: '#F2EEE9',
      },
      placeholderColor: {
        primary: '#616161',
      },
      ringColor: {
        primary: '#652F90',
        secondary: '#3F3F3F',
      },
      ringOffsetColor: {
        primary: '#652F90',
      },
    },
  },
  plugins: [],
};
