import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Image,
  Center,
  Stack,
  Text,
  useColorMode,
  useDisclosure, Popover, PopoverTrigger,PopoverContent,PopoverHeader,PopoverArrow,PopoverCloseButton,PopoverBody,
  Flex,
} from "@chakra-ui/react";
import {  FaBars, FaSun, FaMoon, } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };

function DraewerNav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("top");


  return (
    <Box marginRight={5}>
      <Button mL={"auto"} width={6} onClick={onOpen}>
        <IconButton _hover={{bg:"blue.400", color:"white"}} icon={<FaBars></FaBars>}></IconButton>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <Center w={2}>
          <DrawerContent  display={"Flex"} alignItems={"center"} justifyContent={"center"}
          >
            <Box ml={-5}>
              <Image 
             
              width={{ base: "35px", md: "40px", lg: "40px" }}
            src="https://media.licdn.com/dms/image/C4D0BAQGFj5ERuYpzEw/company-logo_200_200/0/1672638104241?e=2147483647&v=beta&t=PmU3wu8FzVGG_ORgaq-jUCVqGs5EZW1yWmQxhQ1G2i0"
            ></Image>
            </Box>
            <DrawerBody>


              <Box p="1">
                <NavLink to="/">
                  <Text fontWeight="bold" _hover={{color:"blue"}}>Home</Text>
                </NavLink>
              </Box>

              <Box p="1">
                <NavLink to="/">
                  <Text fontWeight="bold" _hover={{color:"blue"}}>Explore</Text>
                </NavLink>
              </Box>
              <Box p="1">
                  <NavLink to="/">
                    <Text fontWeight="bold" _hover={{color:"blue"}} >
                      Create
                    </Text>
                  </NavLink>
                  
              </Box>
              <Box p="1">
                  <NavLink to="/">
                    <Text fontWeight="bold" _hover={{color:"blue"}}>
                      Blog
                    </Text>
                  </NavLink>
              </Box>

              <Box p="1">
                  <NavLink to="/">
                    <Text fontWeight="bold" _hover={{color:"blue"}}>
                      Contacts
                    </Text>
                  </NavLink>
              </Box>              


                  <Box>
                <IconButton
                  onClick={toggleColorMode}
                  isRound={true}
                  size="sm"
                  alignSelf="flex-end"
                  icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                ></IconButton>
              </Box>                      
              <Box p="1">
                  <NavLink to="/login">
                    <Button bg={"blue.400"} colorScheme="blue" color="white">
                      <Text fontSize={fontSize}>Login</Text>
                    </Button>
                  </NavLink>
              </Box>

              
            </DrawerBody>
          </DrawerContent>
        </Center>
      </Drawer>
    </Box>
  );
}
export default DraewerNav;