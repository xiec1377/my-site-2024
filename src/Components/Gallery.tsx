import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Center,
  Square,
  Grid,
  GridItem,
  Circle,
} from "@chakra-ui/react";
import Eye from "../Assets/eye.png";
import Face from "../Assets/face.gif";
import Drinking from "../Assets/drinking.png";
import GirlFront from "../Assets/girlFront.png";
import GirlSide from "../Assets/girlSide.png";
import Knight from "../Assets/knight.png";
import Man from "../Assets/man.png";
import PurpleGirl from "../Assets/purpleGirl.png";
import { GalleryItem } from "./GalleryItem";
import { ScrollVisible } from "../Static/ScrollVisible";

const Gallery: React.FC<{}> = () => {
  return (
    <VStack>
      <Heading as="h2" size="2xl" color="rose.600" pb={10}>
        Gallery
      </Heading>
      <HStack align="base">
        <VStack>
          <GalleryItem src={Man} alt="man.png" />
          <GalleryItem src={Eye} alt="eye.png" />
          <GalleryItem src={Drinking} alt="drinking.png" />
        </VStack>
        <VStack>
          <GalleryItem src={Face} alt="face.gif" />
          <GalleryItem src={GirlFront} alt="girlFront.png" />
          <GalleryItem src={PurpleGirl} alt="purpleGirl.png" />
        </VStack>
        <VStack>
          <GalleryItem src={GirlSide} alt="girlSide.png" />
          <GalleryItem src={Knight} alt="knight.png" />
        </VStack>
      </HStack>
    </VStack>
  );
};
export default Gallery;
