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

interface Props {
  src: string;
  alt: string;
}

export const GalleryItem = ({ src, alt }: Props) => {
  return (
    <ScrollVisible>
      <Box overflow="hidden">
        <Image
          src={src}
          fallbackSrc="https://via.placeholder.com/150"
          alt={alt}
          transition="ease-in-out 0.5s"
          _hover={{ transform: "scale(1.2)", filter: "grayscale(1)" }}
        />
      </Box>
    </ScrollVisible>
  );
};
