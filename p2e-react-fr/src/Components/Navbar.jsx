import React, { useContext } from "react";
import { GiAppleSeeds } from "react-icons/gi";
import { FaSun, FaMoon, FaUserCheck, FaSearch} from "react-icons/fa";
import { Button, Flex, Heading, Spacer, InputGroup, InputLeftElement, Input,
  Box, Image,  Text, useMediaQuery, HStack, IconButton, useColorMode,
   Link, useTheme} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import DraewerNav from "./DraewerNav";

const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const theme = useTheme();
  const [isMatch] = useMediaQuery("(max-width: 800px)");
  console.log("isMatch:", isMatch);

  console.log("theme:", theme);
  return (
    <Flex position="fixed" top={0} left={0} right={0} boxShadow="md" width="full" h={20} paddingInline={5} marginRight={4}
        justifyContent="space-between" alignItems="center" gap="2" bg="white" zIndex="999"
     >
      <Flex alignItems={"center"} fontWeight={"bold"}>
        <NavLink to="/">
          <Image
            width={{ base: "35px", md: "40px", lg: "40px" }} 
            src="https://media.licdn.com/dms/image/C4D0BAQGFj5ERuYpzEw/company-logo_200_200/0/1672638104241?e=2147483647&v=beta&t=PmU3wu8FzVGG_ORgaq-jUCVqGs5EZW1yWmQxhQ1G2i0"
          ></Image>
         
        </NavLink>
        <Text>&nbsp; P2E Pro</Text>
      </Flex>
              <InputGroup w={{base: "150px", sm: "150px", md: "200px", lg: "250px"}} marginRight={"100px"}>
          <InputLeftElement pointerEvents='none'>
            <FaSearch color='gray.300' />
          </InputLeftElement>
          <Input type='tel' placeholder='Collection, item or user' />
        </InputGroup>
      {isMatch ? (
        <DraewerNav></DraewerNav>
      ) : (
        <HStack gap={3}>
         
          {/* pop over -------------- */}
          <Box p="1">
            <NavLink to="/">
              <Text  fontSize={fontSize} _hover={{color:"blue"}}>
                Home
              </Text>
            </NavLink>
          </Box>


          <Box p="1" >
            <NavLink to="/" >
              <Text  fontSize={fontSize} colorScheme="orange.500" _hover={{color:"blue"}}>
                Explore
              </Text>
            </NavLink>
          </Box>
          <Box p="1">
            <NavLink to="/">
              <Text  fontSize={fontSize} _hover={{color:"blue"}}>
                Create
              </Text>
            </NavLink>
          </Box>

          <Box p="1">
            <NavLink to="/">
              <Text  fontSize={fontSize} _hover={{color:"blue"}}>
                Blog
              </Text>
            </NavLink>
          </Box>

          <Box p="1">
            <NavLink to="/">
              <Text  fontSize={fontSize} _hover={{color:"blue"}}>
                Contacts
              </Text>
            </NavLink>
          </Box>          
       

          <Box>
            <IconButton
              onClick={toggleColorMode}
              isRound={true}
              size="md"
              alignSelf="flex-end"
              icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
            ></IconButton>
          </Box>
          
          <Box p="1">
              <NavLink to="/login">
                <Button border="1px solid blue" bg={"blue.400"} colorScheme="white" color="white">
                  <Text fontSize={fontSize} _hover={{color:"orange"}}>Login</Text>
                </Button>
              </NavLink>
          </Box>
        </HStack>
      )}
    </Flex>
  );
};

export default Navbar;