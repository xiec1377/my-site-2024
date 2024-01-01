import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import theme from './Assets/theme'
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AboutMe from "./Components/AboutMe"

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Home/>
    <AboutMe />
  </ChakraProvider>
)
