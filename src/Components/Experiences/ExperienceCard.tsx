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
  icon?: JSX.Element;
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
      <HStack alignItems="start" spacing={4}>
        {experience.icon}
        <VStack align="start" spacing={1} flex="1">
          {/* spacing={4}  */}
          <Flex>
            <Heading size="lg" color="rose.600">
              {experience.position}
            </Heading>
          </Flex>
          <Flex pb={3} width="100%">
            <Text color="rose.300">{experience.company}</Text>
            <Spacer />
            <Text color="rose.300">{experience.date}</Text>
          </Flex>
          {experience.points}
        </VStack>
      </HStack>
    </Card>
  </ScrollVisible>
);

export default ExperienceCard;
