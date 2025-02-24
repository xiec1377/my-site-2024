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
  Link,
} from "@chakra-ui/react";
import Me from "../Assets/Catherine_LinkedIn_Headshot.png";
import { ScrollVisible } from "../Static/ScrollVisible";
import { Header } from "./Header";
import Gallery from "./Gallery";

import { AspectRatio } from "@chakra-ui/react";
const AboutMe: React.FC<{}> = () => {
  return (
    <Box id="about-me" zIndex={50}>
      <VStack align="top">
        <ScrollVisible>
          <HStack align="start" flex="3">
            <HStack spacing="24px" align="start">
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                pt={10}
                pr={10}
              >
                <Image
                  src={Me}
                  maxW="300px"
                  borderRadius="full"
                  fallbackSrc="https://via.placeholder.com/150"
                  alt="Me"
                  flexShrink={0}
                  objectFit="cover"
                  objectPosition="top"
                  width="300px"
                  height="300px"
                />
                {/* <Box
                  position="absolute"
                  transform="translate(-90%, 240%)"
                  width="100px"
                  height="100px"
                  borderRadius="full"
                  background="rose.600" 
                  zIndex={100}
                />
                <Box
                  position="absolute"
                  transform="translate(50%, 700%)"
                  width="50px"
                  height="50px"
                  borderRadius="full"
                  background="rose.300" 
                /> */}
              </Box>

              <VStack align="start" flex="3">
                <Header title="about me" />
                <Text className="text">
                  Hi! I'm Catherine and I’m a fourth-year Computer Science
                  student at the{" "}
                  <Link href="https://uwaterloo.ca/" isExternal>
                    <strong style={{ textDecoration: "underline" }}>
                      University of Waterloo
                    </strong>
                  </Link>
                  .
                </Text>
                <br />
                <Text className="text">
                  I've cultivated my expertise in{" "}
                  <strong>full-stack and front-end development</strong> through
                  my internship experiences in <strong>fintech</strong>.
                  However, I love exploring different disciplines such as{" "}
                  <strong>UX/UI design</strong> and{" "}
                  <strong>database optimization</strong> in order to become a
                  more well-rounded engineer.
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
          </HStack>
        </ScrollVisible>
      </VStack>
      <ScrollVisible>
        <VStack p={150}>
          <Text className="text" textAlign="center">
            I dabble in digital art and 3D modeling. Check out some of my art projects.{" "}
          </Text>
        </VStack>
      </ScrollVisible>
    </Box>
  );
};
export default AboutMe;
