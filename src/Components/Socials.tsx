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
  Tooltip,
  useTheme,
} from "@chakra-ui/react";
import { ScrollVisible } from "../Static/ScrollVisible";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
// import { Tooltip } from "@/components/ui/tooltip"

interface SocialProps {
  color?: string;
}

export const Socials = ({ color }: SocialProps) => {
  const theme = useTheme();
  const defaultColor = color || theme.colors.gray[500];
  return (
    <HStack spacing="10" pt={3} zIndex="100">
      <Tooltip label="LinkedIn" aria-label="LinkedIn tooltip" hasArrow>
        <a
          href="https://www.linkedin.com/in/catherine-xie-101377/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            className="icon"
            aria-label="LinkedIn icon"
            color={defaultColor}
          />
        </a>
      </Tooltip>
      <Tooltip label="Github" aria-label="Github tooltip" hasArrow>
        <a
          href="https://github.com/xiec1377"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="icon"
            aria-label="Github icon"
            color={defaultColor}
          />
        </a>
      </Tooltip>
      <Tooltip label="Email" aria-label="Email tooltip" hasArrow>
        <a
          href={`mailto:'catherinexie2014@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope
            className="icon"
            aria-label="Email icon"
            color={defaultColor}
          />{" "}
        </a>
      </Tooltip>
      <Tooltip label="Resume" aria-label="Resume tooltip" hasArrow>
        <a
          href="/Catherine_Xie_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileAlt
            className="icon icon-color"
            aria-label="Resume icon"
            color={defaultColor}
          />{" "}
        </a>
      </Tooltip>
    </HStack>
  );
};
