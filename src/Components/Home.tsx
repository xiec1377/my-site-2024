import React from "react";
import { Box, Heading, VStack, Spacer, Flex, Center, Square, Circle } from "@chakra-ui/react"


const Home: React.FC<{}> = () => {
  return (
    <Box bg='gray.800' height="100vh" pl={20} pr={20} id="home">
        <Center position="relative" top='45vh'>
          <VStack>
          <Heading as='h1' size='4xl' _hover={{ bg: "teal.600" }}>Catherine Xie</Heading>
          <Heading as='h2' size='2xl' color='rose.600'>(insert motto here)</Heading>
          </VStack>
        </Center>
    </Box>
  );
};
export default Home;
