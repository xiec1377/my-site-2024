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
import Gray from "../Assets/gray.png";
import GrayGirl from "../Assets/bnwgirl.png";
import MeCartoon from "../Assets/mecartoon.png";
import Guy from "../Assets/guy.png";
import GirlInScarf from "../Assets/girlinscarf.png";
import GirlSquare from "../Assets/square.png";
import { GalleryItem } from "./GalleryItem";
import { ScrollVisible } from "../Static/ScrollVisible";

const Gallery: React.FC<{}> = () => {
  return (
    <VStack zIndex={50} pb={150}>
      <ScrollVisible>
        <Center>
          <Heading as="h2" size="2xl" color="rose.600" pb={10}>
            gallery
          </Heading>
        </Center>
      </ScrollVisible>
      <HStack align="base">
        <VStack>
          <GalleryItem src={MeCartoon} alt="man.png" />
          <GalleryItem src={Man} alt="man.png" />
          <GalleryItem src={GrayGirl} alt="bnwgirl.png" />
          <GalleryItem src={Drinking} alt="drinking.png" />
        </VStack>
        <VStack>
          <GalleryItem src={Face} alt="face.gif" />

          <GalleryItem src={GirlSquare} alt="bnwgirl.png" />
          <GalleryItem src={GirlFront} alt="girlFront.png" />
          <GalleryItem src={GirlInScarf} alt="purpleGirl.png" />
          <GalleryItem src={Eye} alt="eye.png" />
        </VStack>
        <VStack>
          <GalleryItem src={Guy} alt="drinking.png" />
          <GalleryItem src={GirlSide} alt="girlSide.png" />
          <GalleryItem src={Knight} alt="knight.png" />
          <GalleryItem src={Gray} alt="gray.png" />
        </VStack>
      </HStack>
    </VStack>
  );
};
export default Gallery;
