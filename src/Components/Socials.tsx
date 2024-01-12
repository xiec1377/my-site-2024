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
import { FaLinkedinIn, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
// import Resume from '../Assets/Cat'

export const Socials = () => {
  return (
    <HStack spacing="10" pt={3} zIndex="100">
      <a href="https://www.linkedin.com/in/catherine-xie-101377/">
        <FaLinkedinIn className="icon icon-color" aria-label="LinkedIn icon" />
      </a>
      <a href="https://github.com/xiec1377">
        <FaGithub className="icon icon-color" aria-label="Github icon" />
      </a>
      <a href={`mailto:'catherinexie2014@gmail.com`}>
        <FaEnvelope className="icon icon-color" aria-label="Email icon" />{" "}
      </a>
      {/* <a href={Resume} target="_blank">
        <FaFileAlt className="icon icon-color" aria-label="Resume icon" />{" "}
      </a> */}
    </HStack>
  );
};
