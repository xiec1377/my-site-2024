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
    <Flex pt={20} pb={5} zIndex={100}>
      <Center h={100} w="100vw" bg="gray.900">
        <Text>© Catherine Xie 2024</Text>
      </Center>
    </Flex>
  );
};
