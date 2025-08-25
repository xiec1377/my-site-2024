import React from "react";
import {
  Box,
  Heading,
  VStack,
  Spacer,
  Flex,
  Center,
  Square,
  Circle,
  HStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { Socials } from "./Socials";
import MyLogo from "../Assets/catherine_logo.png";

const Home: React.FC<{}> = () => {
  return (
    <Box w="100%" id="home" py="40vh">
      <VStack>
        <Heading
          color="white"
          fontSize={["50px", "50px", "90px", "110px"]}
          zIndex="100"
          whiteSpace="nowrap"
        >
          Catherine Xie
        </Heading>
        <Heading
          as="h2"
          // fontSize="h3"
          fontSize={["20px", "20px", "24px", "32px"]}
          color="rose.600"
          zIndex="100"
          fontWeight="10px"
        >
          developer in the daytime, designer at dusk.
        </Heading>
        <Socials color="white" />
      </VStack>
    </Box>
  );
};
export default Home;
