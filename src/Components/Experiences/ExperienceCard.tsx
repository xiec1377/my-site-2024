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
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

interface Experience {
  id: string;
  position: string;
  date: string;
  company: string;
  points: string[];
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => (
  <Box>
    <Flex pb={3}>
      <Heading size="lg" color="rose.600">
        {experience.position}
      </Heading>
    </Flex>
    <Flex pb={3}>
      <Heading size="md" color="white">
        {experience.company}
      </Heading>
      <Spacer />
      <Heading size="md" color="white">
        {experience.date}
      </Heading>
    </Flex>
    <UnorderedList pl={6} className="text">
      {experience.points.map((point, index) => (
        <ListItem key={index}>{point}</ListItem>
      ))}
    </UnorderedList>
  </Box>
);

export default ExperienceCard;