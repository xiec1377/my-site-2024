import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Stack,
  StackDivider,
  Center,
  Square,
  Circle,
  Spacer,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { ScrollVisible } from "../../Static/ScrollVisible";
import purpleGirl from "../../Assets/purpleGirl.png";
import SalesPitch from "../../Assets/sales_pitch_generator.jpg";

interface Project {
  id: string;
  name: string;
  desc: JSX.Element;
  languages: string[];
  img: JSX.Element;
}
const baseUrl = process.env.PUBLIC_URL;
console.log("baseurl:", baseUrl);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  console.log("project:", project);
  //   const imgPath = require(`${project.img}`).default
  //   console.log("imgpath:", imgPath)
  return (
    <Box
      boxShadow="lg"
      h="100%"
      style={{
        background: "rgba(102.80, 102.80, 102.80, 0.32)",
        borderRadius: 20,
        overflow: "hidden",
        backdropFilter: "blur(27px)",
      }}
    >
      <Flex>
        {project.img}

        {/* <Image
          src={require(`${project.img}`)}
          alt="Sales pitch generator"
          fallbackSrc="https://via.placeholder.com/150"
          transition="ease-in-out 0.5s"
          _hover={{ transform: "scale(1.2)", filter: "grayscale(1)" }}
        /> */}
        <Flex direction="column" p={10}>
          <Heading size="lg" color="rose.600" pb={3}>
            {project.name}
          </Heading>
          {/* <Text size="md" color="gray.300" pb={3}> */}
            {project.desc}
          {/* </Text> */}
          <HStack spacing={4} wrap="wrap">
            {project.languages.map((language, index) => (
              <Tag
                size="md"
                key={index}
                borderRadius="full"
                variant="solid"
                // colorScheme="green"
                bgColor="purple.500"
              >
                <TagLabel>{language}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
