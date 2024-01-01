import React, { useState } from "react";
import { Box, Heading, Flex, VStack, Link, IconButton, Button, Center, Square, Circle, transition } from "@chakra-ui/react"

import { FaBriefcase, FaHome, FaLightbulb, FaUser } from 'react-icons/fa'

import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'


import { useDisclosure } from '@chakra-ui/react'
const NavBar: React.FC<{}> = () => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    // const [isLabel, setIsLabel] = useState(false);
    // console.log("label:", isLabel)
    const handleActive = {

    }
    return (
        <Flex position="fixed" height="100vh"alignItems="center" pl={2} style={{ zIndex: 10 }}>
        <VStack alignItems="left" role="group"  width="50px" position="absolute">
            <IconButton _hover={{
                width: "219%",
                bg:"rose.100",
                _after: {
                content: '"Home"',
                pl: '10px'
                },
            }} as="a" href="#home" isRound={true} variant='solid' bg='rose.600' size="lg" aria-label='Home' icon={<FaHome size={30} style={{}}/>}/>
            <IconButton _hover={{
                width: "280%",
                bg:"rose.100",
                _after: {
                content: '"About me"',
                pl: '10px'
                },
            }} as="a" href="#about-me" isRound={true} variant='solid' bg='rose.600' size="lg" aria-label='About Me' icon={<FaUser size={30} />}/>
            <IconButton _hover={{
                width: "310%",
                bg:"rose.100",
                _after: {
                content: '"Experiences"',
                pl: '10px'
                },
            }} as="a" href="#experiences" isRound={true} variant='solid' bg='rose.600' size="lg" aria-label='Experiences' icon={<FaBriefcase size={30} />}/>
            <IconButton _hover={{
                width: "250%",
                bg:"rose.100",
                _after: {
                content: '"Projects"',
                pl: '10px'
                },
            }} as="a" href="#projects" isRound={true} variant='solid' bg='rose.600' size="lg" aria-label='Projects' icon={<FaLightbulb size={30} />}/>
        </VStack>
     </Flex>
    );
  };
  export default NavBar;


// import { ReactNode } from "react";
// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from "@chakra-ui/react";
// import { FaHome } from 'react-icons/fa';
// import {Link} from '@chakra-ui/react';
// // const Links = ["Dashboard", "Projects", "Team"];
// const Links = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "About Me",
//     path: "/about-me",
//   },
//   {
//     name: "Experiences",
//     path: "/experiences",
//   },
//   {
//     name: "Projects",
//     path: "/projects",
//   },
// ];

// const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
//   <Box
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//   >
//     <Link href={path}>{children}</Link>
//   </Box>
// );

// export default function Navbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <div>
//       <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <IconButton
//             size={"md"}
//             icon={isOpen ? <FaHome /> : <FaHome />}
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={"center"}>
//             <Box>Logo</Box>
//             <HStack
//               as={"nav"}
//               spacing={4}
//               display={{ base: "none", md: "flex" }}
//             >
//               {Links.map(({ name, path }) => (
//                 <NavLink key={path} path={path}>
//                   {name}
//                 </NavLink>
//               ))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={"center"}>
//             <Button
//               variant={"solid"}
//               colorScheme={"teal"}
//               size={"sm"}
//               mr={4}
//               leftIcon={<FaHome />}
//             >
//               Action
//             </Button>
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={"full"}
//                 variant={"link"}
//                 cursor={"pointer"}
//               >
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>Link 1</MenuItem>
//                 <MenuItem>Link 2</MenuItem>
//                 <MenuDivider />
//                 <MenuItem>Link 3</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: "none" }}>
//             <Stack as={"nav"} spacing={4}>
//               {Links.map(({ name, path }) => (
//                 <NavLink key={path} path={path}>
//                   {name}
//                 </NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>

//       {/* <Box p={4}>Main Content Here</Box> */}
//     </div>
//   );
// }



{/* <Link href="#about-me" className="nav-link scrollto" px={4}>
<IconButton isRound={true} variant='solid' bg='rose.600' aria-label='Done' icon={<FaUser/>}>
    Experiences
</IconButton>
</Link> */}