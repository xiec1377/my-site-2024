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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { ProjectsData } from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import { Header } from "../Header";
import { ScrollVisible } from "../../Static/ScrollVisible";
import purpleGirl from "../../Assets/purpleGirl.png";

const Projects: React.FC<{}> = () => {
  return (
    <Box id="projects">
      <VStack px="15%" pb={150} align="start">
        <ScrollVisible>
          <Header title="Projects" />
        </ScrollVisible>
        <ScrollVisible>
          <Text className="text" pb={5}>
            {" "}
            Hover over the screenshots to see a demo!{" "}
          </Text>
        </ScrollVisible>
        <Stack spacing="10">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Stack>
      </VStack>
    </Box>
  );
};
export default Projects;
