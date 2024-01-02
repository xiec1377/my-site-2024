import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Center,
  Square,
  Grid,
  GridItem,
  Circle,
} from "@chakra-ui/react";

const Gallery: React.FC<{}> = () => {
  return (
    <Box height="100vh" p={20}>
      <VStack>
        <Heading as="h2" size="2xl" color="rose.600">
          Gallery
        </Heading>
        {/* <Text p={10}>PLACEHOLDER TEXT</Text> */}
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap={2}
        >
          <GridItem w="100%" h="10" bg="blue.500">
            <Image
              src="me.jpg"
              boxSize="500px"
              fallbackSrc="https://via.placeholder.com/150"
              alt="Me"
            />
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
            <Image
              src="me.jpg"
              boxSize="500px"
              fallbackSrc="https://via.placeholder.com/150"
              alt="Me"
            />
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
            <Image
              src="me.jpg"
              boxSize="500px"
              fallbackSrc="https://via.placeholder.com/150"
              alt="Me"
            />
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};
export default Gallery;
