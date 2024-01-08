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
import { ExperienceData } from "./ExperiencesData";
import ExperienceCard from "./ExperienceCard";
import { Header } from "../Header";
import { ScrollVisible } from "../../Static/ScrollVisible";

const Experiences: React.FC<{}> = () => {
  return (
    <Box id="experiences">
      <VStack px="15%" pb={150}>
        <ScrollVisible>
          <Header title="Experience" />
        </ScrollVisible>
        <Stack spacing="5">
          {ExperienceData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </Stack>
      </VStack>
    </Box>
  );
};
export default Experiences;
