import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  VStack,
  HStack,
  Icon,
  Link,
  IconButton,
  Button,
  Center,
  Square,
  Circle,
  transition,
  Text,
} from "@chakra-ui/react";

import { FaBriefcase, FaHome, FaLightbulb, FaUser } from "react-icons/fa";

import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
const NavBar: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  // const [isLabel, setIsLabel] = useState(false);
  // console.log("label:", isLabel)
  return (
    <Flex
      position="fixed"
      height="100vh"
      alignItems="center"
      pl={5}
      style={{ zIndex: 100 }}
    >
      <VStack justifyContent="center" width="50px" spacing={5} height="100%">
        {/* <Box width="1px" height="100%" bg="white" mt={5}/> */}
        <VStack alignItems="left" width="50px" spacing={8}>
          {[
            { link: "home", display: "home", icon: FaHome },
            { link: "about-me", display: "about me", icon: FaUser },
            { link: "experiences", display: "experience", icon: FaBriefcase },
            { link: "projects", display: "projects", icon: FaLightbulb },
          ].map((item) => (
            <Link href={`#${item.link}`} _hover={{ textDecoration: "none" }}>
              <HStack
                as="span"
                role="group"
                color="white"
                borderRadius="full"
                pl={4}
                pr={4}
                _hover={{
                  transition: "ease-in-out 0.5s",
                }}
                aria-label={item.display}
              >
                <Icon as={item.icon} w={4} h={4} />
                <Text
                  opacity={0}
                  transition="opacity 0.5s ease-in-out"
                  _groupHover={{ opacity: 1 }}
                  whiteSpace="nowrap"
                >
                  {item.display}
                </Text>
              </HStack>
            </Link>
          ))}
        </VStack>
        {/* <Box width="1px" height="100%"  bg="white" mb={5}/> */}
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

{
  /* <Link href="#about-me" className="nav-link scrollto" px={4}>
<IconButton isRound={true} variant='solid' bg='rose.600' aria-label='Done' icon={<FaUser/>}>
    Experiences
</IconButton>
</Link> */
}
