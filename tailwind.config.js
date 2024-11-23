import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
      },
      padding: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      colors: {
        primary: '#4CAF50', // Change primary color
        secondary: '#f44336', // Change secondary color
      },
    },
  },
  plugins: [flowbitePlugin],
};
