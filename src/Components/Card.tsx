import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface CardProps extends BoxProps {
  children: React.ReactNode;
}
export const Card = ({ children, ...props }: CardProps) => {
  return (
    <Box
      boxShadow="lg"
      h="100%"
      style={{
        // background: "rgba(102.80, 102.80, 102.80, 0.32)",
        backgroundImage:
          "linear-gradient(to right, rgba(102.80, 102.80, 102.80, 0.4), rgba(102.80, 102.80, 102.80, 0.05))",
        borderRadius: 20,
        overflow: "hidden",
        backdropFilter: "blur(27px)",
        border: "1px solid rgb(96, 96, 96)",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
