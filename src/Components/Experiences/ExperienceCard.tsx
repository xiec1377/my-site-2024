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
  Link,
} from "@chakra-ui/react";
import { CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { ScrollVisible } from "../../Static/ScrollVisible";
import { Card } from "../Card";

interface Experience {
  id: string;
  icon?: JSX.Element;
  link?: string;
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
        <Link href={experience.link} isExternal>
          {experience.icon}{" "}
        </Link>
        <VStack align="start" spacing={1} flex="1">
          {/* spacing={4}  */}
          <Flex>
            <Heading size="lg" color="rose.600">
              {experience.position}
            </Heading>
          </Flex>
          <Flex pb={3} width="100%">
            <Link color="rose.300" isExternal href={experience.link}>
              {experience.company}
            </Link>
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
