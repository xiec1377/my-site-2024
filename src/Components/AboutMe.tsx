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


import { AspectRatio } from "@chakra-ui/react";
const AboutMe: React.FC<{}> = () => {
  return (
    <Box height="100vh" id="about-me">
      <VStack>
        <Heading className="h1" fontSize="h1" whiteSpace="nowrap">
          About me
        </Heading>
        <HStack px="15%">
          <Image
            src={Me}
            minW={300}
            maxW={800}
            clipPath="circle(30%)"
            // clipPath="rect(10%, 30%, 30%, 10%)"
            fallbackSrc="https://via.placeholder.com/150"
            alt="Me"
          />
          <VStack align="start">
            <HStack width="100%" pb={5}>
              <Heading className="h1" fontSize="h1" whiteSpace="nowrap">
                About me
              </Heading>
              <Heading className="h1" fontSize="h1" color="rose.700">
                .
              </Heading>
              <Divider alignSelf="center" borderColor="gray.500" size="10" />
            </HStack>
            <Text className="text">
              My name is Catherine and I’m a fourth-year Computer Science
              student at the{" "}
              <Text as="b" color="rose.700">
                University of Waterloo
              </Text>
              .
            </Text>
            <br />
            <Text className="text">
              I enjoy exploring different disciplines in order to become a more
              well-rounded individual. I have expertise in full-stack and
              front-end development, complemented by additional interests in
              product management and user experience & design, all cultivated
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
      </VStack>
    </Box>
  );
};
export default AboutMe;
