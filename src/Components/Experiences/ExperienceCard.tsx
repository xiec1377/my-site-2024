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
import { CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { ScrollVisible } from "../../Static/ScrollVisible";
import { Card } from "../Card";

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
  <ScrollVisible>
    <Card p={10}>
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
    </Card>
  </ScrollVisible>
);

export default ExperienceCard;
