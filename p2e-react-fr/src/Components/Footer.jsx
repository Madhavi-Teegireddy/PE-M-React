import React from 'react';
import { SiInstagram } from "react-icons/si";
import { BsFacebook,BsTwitter } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import {Box, Flex, Grid, GridItem, IconButton, Image, Container, Heading, HStack, Text, VStack, Input, Button} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
        <Box h="auto"  mt="60px">

      <Flex
        w={"100%"}
        p={5}
        flexDirection={{ base: "column", md: "row" }}
        gap={10}
        justifyContent={"space-around"}
        alignItems={{ base: "center", md: "flex-start" }}
      >

      <Flex alignItems={"center"} fontWeight={"bold"}>
        <NavLink to="/">
          <Image
            width={{ base: "35px", md: "40px", lg: "40px" }} 
            src="https://media.licdn.com/dms/image/C4D0BAQGFj5ERuYpzEw/company-logo_200_200/0/1672638104241?e=2147483647&v=beta&t=PmU3wu8FzVGG_ORgaq-jUCVqGs5EZW1yWmQxhQ1G2i0"
          ></Image>
         
        </NavLink>
        <Text color="gray">&nbsp; P2E Pro</Text>
      </Flex>       

        {/* col 2 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }} color="gray">
          <Text as="b">Market Place</Text>
          <Text _hover={{color:"blue.500"}}>For Individuals</Text>
          <Text _hover={{color:"blue.500"}}>For Professionals</Text>
          <Text _hover={{color:"blue.500"}}>Privacy</Text>
          <Text _hover={{color:"blue.500"}}>Terms</Text>
        </VStack>

        {/* col 3 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }} color="gray">
          <Text as="b">Company</Text>
          <Text _hover={{color:"blue.500"}}>About Us</Text>
          <Text _hover={{color:"blue.500"}}>Crono Blog</Text>
          <Text _hover={{color:"blue.500"}}>Crono Forums</Text>
          <Text _hover={{color:"blue.500"}}>Jobs</Text>
          <Text _hover={{color:"blue.500"}}>Support</Text>
        </VStack>

        {/* col 4 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }} color="gray">
          <Text as="b">Join news letter</Text>
          <Box display={"flex"}>
            <Input type='email' placeholder='Your email'sx={{ "::placeholder": { color: "gray" } }}/>
            <Button bg={"blue"} color={"white"}>Subscribe</Button>
          </Box>
            {/* Social media icons section*/}
            <Grid w="300px" h="100px" m="auto"  templateColumns='repeat(4, 1fr)' gap={4}>
                <GridItem  w="auto" mt="50px">
                <IconButton isRound={true} bg="none" border="1px solid gray" color="magenta"  size="lg"  _hover={{bg:"blue.500"}} icon={<SiInstagram></SiInstagram>}></IconButton>
                </GridItem>
                <GridItem  w="auto" mt="50px">
                <IconButton isRound={true} bg="none" color="blue" border="1px solid gray" size="lg"  _hover={{bg:"blue.500"}} icon={<BsFacebook></BsFacebook>}></IconButton>
                </GridItem>
                <GridItem  w="auto" mt="50px">
                <IconButton isRound={true} bg="none" color="blue" border="1px solid gray" size="lg"  _hover={{bg:"blue.500"}} icon={<BsTwitter></BsTwitter>}></IconButton>
                </GridItem>
                <GridItem  w="auto" mt="50px">
                <IconButton isRound={true} bg="none" color="red" border="1px solid gray" size="lg"  _hover={{bg:"blue.500"}} icon={<TfiYoutube></TfiYoutube>}></IconButton>
                </GridItem>
            </Grid>
            {/* social media icons section ends */}
        </VStack>  
      </Flex>


      <Flex m="auto" w="70%" textAlign={"center"} marginTop={"30px"} marginBottom={"30px"}>
      <Text as="b"  color="gray" m="auto">Copyright © 2011-2022<br/>
      All rights reserved</Text>
      </Flex>          

        </Box>
        
  )
}

export default Footer