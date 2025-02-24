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
  Divider,
} from "@chakra-ui/react";
import { ScrollVisible } from "../Static/ScrollVisible";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <VStack px="15%" zIndex={10}>
      <Divider alignSelf="center" borderColor="gray.500" size="10" />
      <VStack p="2.5rem" spacing="2.5rem">
        <VStack justifyContent="center" spacing={0}>
          <Text color="gray.500">Let's connect!</Text>
          <Socials />
        </VStack>
        <Text color="gray.500">© Catherine Xie 2024</Text>
      </VStack>
    </VStack>
  );
};
