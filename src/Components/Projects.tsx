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
import { Header } from "./Header";

const Projects: React.FC<{}> = () => {
  return (
    <Box h="100vh" id="projects">
      <VStack>
        <Header title="Projects"></Header>
      </VStack>
    </Box>
  );
};
export default Projects;
