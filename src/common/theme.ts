import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#0f172a',
        color: 'white',
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  colors: {
    secondary: '#0f172a',
    cardBg: '#1e293b',
    info: '#3b82f6',
    text: '#d8dee9',
    textColor: '#d8dee9',
    bgColor: '#1e293b',
  },
});

export default theme;
