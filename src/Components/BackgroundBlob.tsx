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

export const BackgroundBlob = () => {
  return (
    <>
      <div
        style={{
          // background: "#26C3F9",
          background:
            "linear-gradient(180deg, rgba(99.28, 67.06, 236.67, 0.50) 0%, rgba(144.71, 53.31, 177.17, 0.50) 30%, rgba(225, 29, 72, 0.50) 62%, rgba(25.38, 13.20, 77.30, 0) 100%)",
          height: "1000px",
          width: "800px",
          borderRadius: "40% 50% 30% 40%",
          // opacity: ".7",
          filter: "blur(100px)",
          transform: "rotate(-45.72deg)",
          position: "fixed",
          left: "60%",
          bottom: "-50%",
          // zIndex: "-1",
        }}
      />
      <div
        style={{
          // background: "#26C3F9",
          background:
            "linear-gradient(180deg, rgba(99.28, 67.06, 236.67, 0.50) 0%, rgba(144.71, 53.31, 177.17, 0.50) 30%, rgba(225, 29, 72, 0.50) 62%, rgba(25.38, 13.20, 77.30, 0) 100%)",
          height: "500px",
          width: "300px",
          borderRadius: "40% 50% 30% 40%",
          // opacity: ".7",
          filter: "blur(50px)",
          transform: "rotate(100deg)",
          position: "fixed",
          left: "0%",
          top: "-30%",
          // zIndex: "-1",
        }}
      />
    </>
  );
};
