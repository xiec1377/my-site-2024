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
import { ScrollVisible } from "../../Static/ScrollVisible";

interface Experience {
  id: string;
  position: string;
  date: string;
  company: string;
  points: JSX.Element;
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => (
  <Box
    boxShadow="lg"
    h="100%"
    p={10}
    style={{
      background: "rgba(102.80, 102.80, 102.80, 0.32)",
      borderRadius: 20,
      overflow: "hidden",
      backdropFilter: "blur(27px)",
    }}
  >
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
    {experience.points}
  </Box>
);

export default ExperienceCard;
