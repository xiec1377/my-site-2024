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


import { AspectRatio } from "@chakra-ui/react";
const AboutMe: React.FC<{}> = () => {
  return (
    <Box id="about-me" zIndex={50}>
      <VStack align="top">
        <ScrollVisible>
          <VStack align="start" flex="3">
            <Header title="about me" />
            <HStack spacing="24px" justifyContent="start">
              <Image
                src={Me}
                minW={300}
                maxW={500}
                clipPath="circle(40%)"
                // clipPath="rect(10%, 30%, 30%, 10%)"
                borderRadius={10}
                fallbackSrc="https://via.placeholder.com/150"
                alt="Me"
                flex="1"
                //transform='scale(2.1)'
              />
              <VStack align="start" flex="3">
                <Text className="text">
                  Hi! I'm Catherine and I’m a fourth-year Computer Science
                  student at the{" "}
                  <a href="https://uwaterloo.ca/">
                    <strong style={{ textDecoration: "underline" }}>
                      University of Waterloo
                    </strong>
                  </a>
                  .
                </Text>
                <br />
                <Text className="text">
                  I've cultivated my expertise in <strong>full-stack and front-end development</strong> through my internship experiences in <strong>fintech</strong>. 
                  However, I love exploring different disciplines such as <strong>UX/UI design</strong> and <strong>database optimization</strong> in order to become a more well-rounded engineer.
                </Text>
                <br />
                <Text className="text" color="rose.300">
                  I strive to build beautiful and accessible applications that
                  serve a meaningful purpose (or provide silly entertainment).
                </Text>
                <br />
                <Text className="text">
                  On my days off, I’m an aspiring weightlifter, competitive
                  dancer and a versatile artist.
                </Text>{" "}
              </VStack>
            </HStack>
          </VStack>
        </ScrollVisible>
      </VStack>
      <ScrollVisible>
        <VStack p={150}>
          <Text className="text" textAlign="center">
            Check out some of my art projects{" "}
          </Text>
        </VStack>
      </ScrollVisible>
    </Box>
  );
};
export default AboutMe;
