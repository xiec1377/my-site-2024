import React from "react";
import { Box, Heading, Flex, Text, Image,
    VStack, HStack, Center, Square, Circle } from "@chakra-ui/react"



const AboutMe: React.FC<{}> = () => {
    return (
        <Box bg='gray.800' height="100vh" p={20} id="about-me">
        <VStack>
          <Heading as='h2' size='2xl' color='rose.600'>About me</Heading>
          <HStack>
          <Image src='me.jpg' borderRadius='full' boxSize="500px" fallbackSrc='https://via.placeholder.com/150' alt='Me'/>
            <Text p={10}>My name is Catherine and I’m a fourth-year Computer Science student at the University of Waterloo. I enjoy exploring different disciplines in order to become a more well-rounded individual. I specialize in full-stack and front-end development with additional experiences in product design and systems automation. I aspire to build beautiful applications with a meaningful purpose. 
                On my days off, I’m an aspiring weightlifter, competing dancer and a handy artist. I also enjoy building web applications for social good.</Text>
        </HStack>
        </VStack>
    </Box>
    );
  };
  export default AboutMe;
  