import React from 'react'
import {NavLink} from "react-router-dom";
import Navbar from './Navbar';
import { Box, Flex, Link, Image,HStack, Icon, Text,Spacer,ButtonGroup,SimpleGrid,
  Button,Heading,Grid,GridItem, Highlight, extendTheme} from '@chakra-ui/react';
import TreandingAuctions from './TreandingAuctions';
import Slider from '../Slider/Slider';
import TopSellers from '../Slider/TopSellers';
import MarketPlace from '../Market/MarketPlace';
import BigGrid from './BigGrid/BigGrid';
import Mint from './Mint/Mint';

const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };


const HomePage = () => {
  return (
  <Box>
    {/* Navbar with humberger menu */}
        <Navbar/>
    {/* Section 1 of homepage starts */}
      <Flex
     m="auto"
        w={"100%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={10}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          gap={4}
          flexDirection={{
            base: "column",
            md: "column",
          }}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"background"} textAlign={"left"} marginLeft={"50px"} as="span" fontWeight="bold" letterSpacing="3px"
          textShadow="2px 2px 0px yellow, -2px -2px 0px yellow, 2px -2px 0px yellow, -2px 2px 0px yellow"
           fontSize={{base: "25px", sm: "35px", md: "45px", lg: "60px"}} mt={{base:"30px"}}
           >NFT<br/>
          MARKET PLACE<br/>
          </Heading>


          <Heading color={"magenta"} textAlign={"left"} marginLeft={"50px"} as="span" fontWeight="bold" letterSpacing="3px"
           fontSize={{base: "25px", sm: "45px", md: "55px", lg: "70px"}} mt={{base:"30px"}}
           >BASED ON<br/>
          KALPTANTRA</Heading>          

          
          <Box p="1" display="flex" gap={4}>
              <NavLink to="/">
                <Button bg={"yellow"} colorScheme="orange.500" color="black" h="60px" ml={"40px"}
                w={{ base: "120px", md: "120px", lg:"200px" }}>
                  <Text fontSize={fontSize} p="25px" >Explore NFTs</Text>
                </Button>
              </NavLink>            
              <NavLink to="/">
                <Button bg={"transparent"} colorScheme="orange.500" color="blue" h="60px" border="2px solid gray"
                w={{ base: "120px", md: "120px", lg:"200px" }}>
                  <Text fontSize={fontSize} p="25px" >Create NFT</Text>
                </Button>
              </NavLink>
          </Box>
        </Flex>
        <Flex> 
          <Image m="auto"
          h={{base: "400px", md: "400px",lg:"500px"}}
            w={{ base: "300px", md: "400px", lg:"500px" }} mt={{base:"30px"}}
            // ml={{base:"-50px", sm:"-30px", md:"-30px"}}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/1f3e8883010357.5d2f193115463.jpg"
          ></Image>
        </Flex>
      </Flex>
    {/* section 1 of homepage ends here */}


    {/* section-2 Trending auctions */}
    <Slider/>

    <TopSellers/>

    <MarketPlace/>

    <BigGrid/>

    <Mint/>
          {/* <Footer></Footer> */}

    </Box>

  )
}

export default HomePage;
