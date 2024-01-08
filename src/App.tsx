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
import theme from "./Static/theme";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Gallery from "./Components/Gallery";
import Experiences from "./Components/Experiences/Experiences";
import Projects from "./Components/Projects/Projects";
import { ScrollVisible } from "./Static/ScrollVisible";
import { BackgroundBlob } from "./Components/BackgroundBlob";
import { Footer } from "./Components/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="gray.800" w="100%" overflow="hidden">
      <BackgroundBlob></BackgroundBlob>
      <NavBar />
      <VStack>
        <ScrollVisible>
          <Home />
        </ScrollVisible>
        <AboutMe />
        {/* <ScrollVisible> */}
        {/* </ScrollVisible> */}
        {/* <ScrollVisible> */}
        <Gallery />
        {/* </ScrollVisible> */}
        {/* <ScrollVisible> */}
        <Experiences />
        {/* </ScrollVisible> */}
        {/* <ScrollVisible> */}
        <Projects />
        {/* </ScrollVisible> */}
        <Footer />
      </VStack>
    </Box>
  </ChakraProvider>
);
