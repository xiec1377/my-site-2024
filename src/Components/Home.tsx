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
} from "@chakra-ui/react";

const Home: React.FC<{}> = () => {
  return (
    <Box height="100vh" id="home">
      <Center position="relative" top="40vh">
        <VStack>
          <Heading color='white' fontSize='title'>
            Catherine Xie
          </Heading>
          <Heading as="h2" fontSize="h2" color="rose.600">
            (insert motto here)
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};
export default Home;
