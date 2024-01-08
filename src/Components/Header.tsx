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

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
      <HStack width="100%" pb={5}>
        <Heading className="h1" fontSize="h1" whiteSpace="nowrap">
          {title}
        </Heading>
        <Heading className="h1" fontSize="h1" color="rose.700">
          .
        </Heading>
        <Divider alignSelf="center" borderColor="gray.500" size="10" />
      </HStack>
  );
};
