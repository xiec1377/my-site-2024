import React, { useRef, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  VStack,
  Stack,
  HStack,
  Center,
  Square,
  Circle,
  Spacer,
  Grid,
  Divider,
} from "@chakra-ui/react";
import Me from "../Assets/me.jpg";
import { ScrollVisible } from "../Static/ScrollVisible";
import { Header } from "./Header";
import Gallery from "./Gallery";
import { Bold } from "./Experiences/Bold";

import { AspectRatio } from "@chakra-ui/react";
const AboutMe: React.FC<{}> = () => {
  return (
    <Box id="about-me">
      <VStack h="100vh" align="top" px="15%">
        {/* <HStack px="15%"> */}
        <HStack spacing="24px">
          <Image
            src={Me}
            minW={300}
            maxW={500}
            clipPath="circle(40%)"
            // clipPath="rect(10%, 30%, 30%, 10%)"
            fallbackSrc="https://via.placeholder.com/150"
            alt="Me"
          />
          <VStack align="start">
            <Header title="About me" />
            <Text className="text">
              My name is Catherine and I’m a fourth-year Computer Science
              student at the {" "}
              <Bold text="University of Waterloo" />.
            </Text>
            <br />
            <Text className="text">
              I enjoy exploring different disciplines in order to become a more
              well-rounded individual. I have expertise in <Bold text="full-stack and
              front-end development" />, complemented by additional interests in {" "}
              <Bold text="product management and user experience & design"/>, all cultivated
              through my experiences in the financial services and institutions
              sector.
            </Text>
            <br />
            <Text className="text">
              My goal is to build beautiful applications that serve a meaningful
              purpose.
            </Text>
            <br />
            <Text className="text">
              On my days off, I’m an aspiring weightlifter, competitive dancer
              and a versatile artist.
            </Text>
          </VStack>
        </HStack>
        <Text className="text" textAlign="center">
          Check out some of my passion projects{" "}
        </Text>
      </VStack>
    </Box>
  );
};
export default AboutMe;
