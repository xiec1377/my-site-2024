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
  Circle,
} from "@chakra-ui/react";

const Projects: React.FC<{}> = () => {
  return (
    <Box height="100vh" id="projects">
      <VStack>
        <Heading as="h1" fontSize="h1">
          Projects
        </Heading>
        <HStack></HStack>
      </VStack>
    </Box>
  );
};
export default Projects;
