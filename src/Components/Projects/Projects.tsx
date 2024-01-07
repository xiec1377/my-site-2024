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
import purpleGirl from '../../Assets/purpleGirl.png'

const Projects: React.FC<{}> = () => {
  return (
    <Box id="experiences">
      <VStack px="15%" py={30}>
        {/* <Card bg="transparent" > */}
          <Header title="Projects" />
            {/* <CardBody> */}
              <Stack
                // divider={<StackDivider borderColor="gray.600" />}
                spacing="10"
              >
                {ProjectsData.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </Stack>
            {/* </CardBody> */}
        {/* </Card> */}
      </VStack>
    </Box>
  );
};
export default Projects;
