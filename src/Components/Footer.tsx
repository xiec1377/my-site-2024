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
import { ScrollVisible } from "../Static/ScrollVisible";

export const Footer = () => {
  return (
    <ScrollVisible>
      <Center h={100}>
        <Text>Catherine Xie copyright 2024</Text>
      </Center>
    </ScrollVisible>
  );
};
