import { Flex, Text, Grid, GridItem, Image, Heading } from '@chakra-ui/react'
import React from 'react'

const Mint = () => {
  return (
    <div>
      <Flex mt="90px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="black.600" m={"auto"} fontWeight="bold">
        Mint, buy and sell <br/> or just launch your own NFT Store
        </Text>
        </Flex>
        {/* section ends here */}

        {/* section starts */}
        <Grid
        w={"90%"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"}
      >
        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5} h="380px"
        p="40px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        _hover={{border:"2px solid blue"}} borderRadius={"15px"}>
          <Image borderRadius={"15px"} w="130px" margin="auto"
          src="https://previews.123rf.com/images/rastudio/rastudio1601/rastudio160100425/49889814-rocket-line-icon-for-web-mobile-and-infographics-vector-white-icon-on-the-light-blue-circle.jpg"/>
          <Heading  fontSize={25} color="gray.600" textAlign={"center"} marginBottom={"30px"}>
          Buy and sell your <br/>NFTs
          </Heading>
        </GridItem>

        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5} h="380px"
         boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        _hover={{border:"2px solid blue"}} borderRadius={"15px"}>
          <Image borderRadius={"15px"} w="130px" margin="auto" marginTop={"50px"}
          src="https://previews.123rf.com/images/rastudio/rastudio1601/rastudio160100425/49889814-rocket-line-icon-for-web-mobile-and-infographics-vector-white-icon-on-the-light-blue-circle.jpg"/>
          <Heading  fontSize={25} color="gray.600" textAlign={"center"} marginBottom={"30px"}>
          Buy and sell your <br/>NFTs
          </Heading>
          <Text color="gray">Explore beautiful art by talented artist around the world</Text>
        </GridItem>

        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5} h="380px"
        p="40px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        _hover={{border:"2px solid blue"}} borderRadius={"15px"}>
          <Image borderRadius={"15px"} w="130px" margin="auto"
          src="https://previews.123rf.com/images/rastudio/rastudio1601/rastudio160100425/49889814-rocket-line-icon-for-web-mobile-and-infographics-vector-white-icon-on-the-light-blue-circle.jpg"/>
          <Heading  fontSize={25} color="gray.600" textAlign={"center"} marginBottom={"30px"}>
          Buy and sell your <br/>NFTs
          </Heading>
        </GridItem>
      </Grid>
      {/* section ends here */}        
    </div>
  )
}

export default Mint