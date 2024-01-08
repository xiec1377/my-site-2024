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
} from "@chakra-ui/react";
import { Socials } from "./Socials";

const Home: React.FC<{}> = () => {
  return (
    <Box w="100%" id="home" py="40vh">
      <VStack>
        <Heading color="white" fontSize="title"  zIndex='100'>
          Catherine Xie
        </Heading>
        <Heading as="h2" fontSize="h3" color="rose.600" zIndex='100' fontWeight='10px'>
          Developer in the daytime, designer at dusk
        </Heading>
        <Socials />
      </VStack>
    </Box>
  );
};
export default Home;
