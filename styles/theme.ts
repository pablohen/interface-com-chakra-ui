import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    background: '#1D1D1D',
    highlight: '#FFBA08',
    highlight50: '#FFBA087f',
    dark: {
      black: '#000',
      text: '#47585B',
      info: '#999999',
      'info-50': '#9999997f',
    },
    light: {
      white: '#fff',
      text: '#F5F8FA',
      info: '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
});

export default theme;
