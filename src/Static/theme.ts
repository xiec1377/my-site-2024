import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { access, accessSync } from 'fs'

// Version 2: Using functions
const overrides = extendTheme({
  colors: {
    gray: {
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: 'rgb(96, 96, 96)', // '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#121212',
    },
    purple: {
      500: '#6343ED',
    },
    rose: {
      50: '#FFF1F2',
      100: '#FFE4E6',
      200: '#FECDD3',
      300: '#FDA4AF',
      400: '#FB7185',
      500: '#F43F5E',
      600: '#E11D48',
      700: '#BE123C',
    },
    white: '#FAFAFA',
  },
  // breakpoints: {
  //   sm: '480px',
  //   md: '768px',
  //   lg: '992px',
  //   xl: '1280px',
  // },
  fontSizes: {
    body: '14px',
    h3: '32px',
    h2: '42px',
    h1: '64px',
    // title: {
    //   base: '64px', // Default font size
    //   sm: '80px',   // Font size for small screens
    //   md: '90px',   // Font size for medium screens
    //   lg: '110px',  // Font size for large screens
    // },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'Inter, sans-serif',
        color: 'rose.100',
        bg: 'gray.800',
        lineHeight: 'base',
      },
      backgroundColor: {
        color: 'gray.800',
      },
      '@media (min-width: 1024px)': {
        // lg breakpoint (1024px)
        '::-webkit-scrollbar': {
          width: '15px',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'gray.600',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-track': {
          background: 'gray.800',
        },
      },
      '@media (max-width: 1023px)': {
        '::-webkit-scrollbar': {
          width: '0px',
        },
      },
      '.h1': {
        color: 'white',
      },
      '.text': {
        color: 'gray.300',
        fontSize: 'body',
      },
      strong: {
        color: 'rose.600',
      },
      '.unorderedList': {
        paddingLeft: '1',
        paddingBottom: '3',
      },
      '.point': {
        paddingBottom: '2',
      },
      '.icon': {
        width: '25px',
        height: 'auto',
        '&:hover': {
          transform: 'scale(1.1)',
          transition: 'ease-in-out 0.5s',
        },
        '&:active': {
          color: 'rose.700',
        },
      },
      // '.icon-color': {
      //   '&:hover': {
      //     color: 'rose.600',
      //   },
      // },
    }),
  },
})

const theme = extendTheme(overrides)
export default theme
