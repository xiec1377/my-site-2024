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
    <Box h="100vh" w="100%" id="home">
      <Center position="relative" top="40vh">
        <VStack>
          <Heading color="white" fontSize="title">
            Catherine Xie
          </Heading>
          <Heading as="h2" fontSize="h3" color="rose.600">
            Developer in the daytime, designer at dusk
          </Heading>
          <Socials />
        </VStack>
      </Center>
    </Box>
  );
};
export default Home;
