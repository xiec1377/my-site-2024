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
      <VStack pb={150} align="top">
        <ScrollVisible>
          <HStack align="start" flex="3">
            <HStack spacing="24px" align="start">
              <Box
                flexDirection="column"
                alignItems="center"
                pt={10}
                pr={10}
                display={{ base: "none", lg: "flex" }}
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
                <Box
                  flexDirection="column"
                  alignItems="center"
                  w="100%"
                  p={10}
                  display={{ base: "flex", lg: "none" }}
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
                </Box>
                <Text className="text">
                  Hi! I'm Catherine and I recently completed my Bachelors of
                  Computer Science at the{" "}
                  <Link href="https://uwaterloo.ca/" isExternal>
                    <strong style={{ textDecoration: "underline" }}>
                      University of Waterloo
                    </strong>
                  </Link>
                  .
                </Text>
                <br />
                <Text className="text">
                  I've honed my skills in{" "}
                  <strong>full-stack and front-end development</strong> through
                  my internship experiences in <strong>fintech</strong> and{" "}
                  <strong> fast-paced startups</strong>. I also enjoy exploring
                  UX/UI design and database architecture to grow as a
                  well-rounded engineer who can bridge technical depth with user
                  empathy.
                </Text>
                <br />
                <Text className="text" color="rose.300">
                  My mission is to build intentional, impactful applications
                  that not only work beautifully but also make meaningful
                  differences (or provide silly entertainment).
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
      {/* <ScrollVisible>
        <VStack py={150}>
          <Text className="text" textAlign="center">
            I dabble in digital art and 3D modeling. Check out some of my art
            projects.{" "}
          </Text>
        </VStack>
      </ScrollVisible> */}
    </Box>
  );
};
export default AboutMe;
