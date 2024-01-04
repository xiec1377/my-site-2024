import { Box, Container, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes1 = keyframes`
  0% { transform: translateY(-150px) translateX(-100px) rotate(0); }
  50% { transform: translateY(-50px) translateX(-20px) rotate(10deg); }
  100% { transform: translateY(-150px) translateX(-100px) rotate(0); }
`;

const animationKeyframes2 = keyframes`
  0% { transform: translateY(200px) translateX(-100px) rotate(0); }
  50% { transform: translateY(-10px) translateX(10px) rotate(10deg); }
  100% { transform: translateY(200px) translateX(-100px) rotate(0); }
`;

const animation1 = `${animationKeyframes1} 10s ease-in-out infinite`;
const animation2 = `${animationKeyframes2} 9s ease-in-out infinite`;

export const BackgroundBlob = () => {
  return (
    <>
      <Box
        as={motion.div}
        animation={animation1}
        padding="2"
        display="flex"
        style={{
          background:
            "linear-gradient(180deg, rgba(99.28, 67.06, 236.67, 0.50) 0%, rgba(144.71, 53.31, 177.17, 0.50) 30%, rgba(225, 29, 72, 0.50) 62%, rgba(25.38, 13.20, 77.30, 0) 100%)",
          height: "500px",
          width: "500px",
          borderRadius: "40% 50% 30% 40%",
          filter: "blur(50px)",
        //   transform: "rotate(0)",
          //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          position: "fixed",
          left: "-10%",
          top: "-20%",
        }}
      />
      <Box
        as={motion.div}
        animation={animation2}
        padding="2"
        display="flex"
        style={{
          background:
            "linear-gradient(180deg, rgba(99.28, 67.06, 236.67, 0.50) 0%, rgba(144.71, 53.31, 177.17, 0.50) 30%, rgba(225, 29, 72, 0.50) 62%, rgba(25.38, 13.20, 77.30, 0) 100%)",
          height: "1000px",
          width: "800px",
          borderRadius: "40% 50% 30% 40%",
          filter: "blur(50px)",
          transform: "rotate(100deg)",
          //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          position: "fixed",
          left: "60%",
          bottom: "-50%",
        }}
      />
    </>
  );
};
