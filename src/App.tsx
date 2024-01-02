import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import theme from "./Assets/theme";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Gallery from "./Components/Gallery";
import Experiences from "./Components/Experiences/Experiences";
import Projects from "./Components/Projects";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="gray.800" p={5}>
      <NavBar />
      <Flex direction="column">
        <Home />
        <AboutMe />
        <Gallery />
        <Experiences />
        <Projects />
      </Flex>
    </Box>
  </ChakraProvider>
);
