import React from "react";
import { Box, Heading, VStack, Spacer, Flex, Center, Square, Circle } from "@chakra-ui/react"


const Home: React.FC<{}> = () => {
  return (
    <Box height="100vh"  id="home">
        <Center position="relative" top='45vh'>
          <VStack>
          <Heading fontSize={200} color="white" _hover={{ bg: "teal.600" }}>Catherine Xie</Heading>
          <Heading as='h2' size='2xl' color='rose.600'>(insert motto here)</Heading>
          </VStack>
        </Center>
    </Box>
  );
};
export default Home;
