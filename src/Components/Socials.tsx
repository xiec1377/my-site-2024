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
    <HStack>
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/catherine-xie-101377/"
        isRound={true}
        variant="solid"
        bg="transparent"
        size="lg"
        aria-label="LinkedIn icon"
        color='white'
        _hover={{
            color:"rose.700"
        }}
        icon={<FaLinkedinIn size={20}/>}
      />
      <IconButton
        as="a"
        href="https://github.com/xiec1377"
        isRound={true}
        variant="solid"
        bg="transparent"
        size="lg"
        aria-label="Github icon"
        color='white'
        _hover={{
            color:"rose.700"
        }}
        icon={<FaGithub size={20}/>}
      />
      <IconButton
        as="a"
        href={`mailto:'catherinexie2014@gmail.com`}
        isRound={true}
        variant="solid"
        bg="transparent"
        size="lg"
        aria-label="Github icon"
        color='white'
        _hover={{
            color:"rose.700"
        }}
        icon={<HiOutlineMail size={20}/>}
      />
    </HStack>
  );
};
