import { Button, extendTheme, StackDivider } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

// Version 2: Using functions
const overrides = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
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
    },
    white: "#FAFAFA",
  },
  fontSizes: {
    body: '16px',
    h3: '24px',
    h2: '42px',
    h1: '64px',
    title: '110px',
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      // '.title': {
      //   fontSize: 'title',
      //   color: 'white',
      //   _hover: {
      //     color: 'rose.600'
      //   }
      // },
      body: {
        fontFamily: 'body',
        color: 'rose.100',
        bg: 'gray.800',
        lineHeight: 'base',
      },
      backgroundColor: {
        color: 'gray.800',
      },
      // "icon-button": {
      //   bg: mode("blue", "blue")(props),
      // },
      '.h1': {
        color: 'white',
      },
      // h1: {
      //   size: mode('extra', 'extra')(props),
      //   color: mode('red', 'red')(props),
      // }
      '.text': {
        color: 'gray.400',
        fontSize: 'body'
      },
      // '.divider': {
      //   borderColor:'gray.600'
      // }
    }),
  },
})



  //3. Export theme
  const theme = extendTheme(overrides);
  export default theme;