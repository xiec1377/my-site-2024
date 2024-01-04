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

const Gallery: React.FC<{}> = () => {
  return (
    <Box>
      <VStack>
        <Heading as="h2" size="2xl" color="rose.600">
          Gallery
        </Heading>

        <HStack align="base">
          <VStack>
            <Box overflow="hidden">
              <Image
                src={Man}
                fallbackSrc="https://via.placeholder.com/150"
                alt="man.png"
                transition='ease-in-out 0.5s'
                _hover={{ transform: "scale(1.1)", filter: 'grayscale(1)'}}
              />
            </Box>
            <Image
              src={Eye}
              fallbackSrc="https://via.placeholder.com/150"
              alt="eye.png"
            />
            <Image
              src={Drinking}
              fallbackSrc="https://via.placeholder.com/150"
              alt="drinking.png"
            />
          </VStack>
          <VStack>
            <Image
              src={Face}
              fallbackSrc="https://via.placeholder.com/150"
              alt="face.gif"
            />
            <Image
              src={GirlFront}
              fallbackSrc="https://via.placeholder.com/150"
              alt="girlFront.png"
            />
            <Image
              src={PurpleGirl}
              fallbackSrc="https://via.placeholder.com/150"
              alt="purpleGirl.png"
            />
          </VStack>
          <VStack>
            <Image
              src={GirlSide}
              fallbackSrc="https://via.placeholder.com/150"
              alt="girlSide.png"
            />
            <Image
              src={Knight}
              fallbackSrc="https://via.placeholder.com/150"
              alt="knight.png"
            />
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
export default Gallery;
