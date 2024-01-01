import { Button, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

// Version 2: Using functions
const overrides = extendTheme({
  colors: {
    gray: {
      800: "#262626",
    },
    rose: {
      50: '#FFF1F2',
      100: '#FFE4E6',
      200: '#FECDD3',
      300: '#FDA4AF',
      400: "#FB7185",
      500: "#F43F5E",
      600: "#E11D48",
      700: "#BE123C",
    }
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'body',
        color: mode('rose.100', 'rose.100')(props),
        bg: mode('gray.800', 'gray.800')(props),
        lineHeight: 'base',
      },
      backgroundColor: {
        color: mode('gray.800', 'gray.800')(props),
      },
      Button: {
        bg: mode('blue', 'blue')(props),
      }
    }),
  },
})



  //3. Export theme
  const theme = extendTheme(overrides);
  export default theme;