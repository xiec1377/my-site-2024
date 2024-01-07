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
  IconButton,
  Button,
  Icon,
} from "@chakra-ui/react";
import { ScrollVisible } from "../Static/ScrollVisible";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Socials = () => {
  return (
    <HStack spacing='10' pt={3}>
      <a href="https://www.linkedin.com/in/catherine-xie-101377/">
        <FaLinkedinIn className="icon icon-color" aria-label="LinkedIn icon" />
      </a>
      <a href="https://github.com/xiec1377">
        <FaGithub className="icon icon-color" aria-label="Github icon" />
      </a>
      <a href={`mailto:'catherinexie2014@gmail.com`}>
        <HiOutlineMail className="icon icon-color" aria-label="Github icon" />{" "}
      </a>
    </HStack>
  );
};
