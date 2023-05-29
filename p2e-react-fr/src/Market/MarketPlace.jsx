import { Grid, Image, GridItem, Heading, Text, Button, Input, Box , InputGroup,
    InputLeftElement} from '@chakra-ui/react'
    import { FaSearch } from 'react-icons/fa'
import React from 'react'

const MarketPlace = () => {
  return (
    <div>

        <Box p="1" display="flex" justifyContent={"space-between"} marginTop={"40px"}>
        <Heading color={"black"} textAlign={"left"} marginLeft={"60px"} fontWeight="bold"
           fontSize={{base: "25px", sm: "25px", md: "30px", lg: "30px"}} mt={{base:"30px"}}>Market Place
        </Heading>

        <InputGroup w={{base: "130px", sm: "130px", md: "150px", lg: "200px"}} marginRight={"100px"} marginTop={"30px"}>
          <InputLeftElement pointerEvents='none'>
            <FaSearch color='gray.300' />
          </InputLeftElement>
          <Input type='tel' placeholder='Search' />
        </InputGroup>
        </Box>

        <Grid
        w={"90%"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(8, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"} marginBottom={"40px"}
      >

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Button color={"text"} fontSize={20}  _hover={{ color: "white",bg:"blue" }} borderRadius={"10px"} border={"1px solid gray"}>
          Trending
          </Button>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Button color={"text"} fontSize={20}   _hover={{ color: "white",bg:"blue" }} borderRadius={"10px"} border={"1px solid gray"}>
           Art
          </Button>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Button color={"text"} fontSize={20}   _hover={{ color: "white",bg:"blue" }} borderRadius={"10px"} border={"1px solid gray"}>
            Music
          </Button>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Button color={"text"} fontSize={20}  _hover={{ color: "white",bg:"blue" }} borderRadius={"10px"} border={"1px solid gray"}>
            Videos
          </Button>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Button color={"text"} fontSize={20}   _hover={{ color: "white",bg:"blue" }} borderRadius={"10px"} border={"1px solid gray"}>
            Sports
          </Button>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Button color={"text"} fontSize={20}   _hover={{ color: "white",bg:"blue" }} borderRadius={"10px"} border={"1px solid gray"}>
            Utility
          </Button>
        </GridItem>
                
        <GridItem w="85%" margin={"auto"} display={"grid"} gap={5}>
          <Button color={"text"} fontSize={18}   _hover={{ color: "white",bg:"blue" }} borderRadius={"10px"} border={"1px solid gray"}>
            Photography
          </Button>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Button color={"text"} fontSize={20}  _hover={{ color: "white",bg:"blue" }} borderRadius={"10px"} border={"1px solid gray"}>
            Game
          </Button>
        </GridItem>
        
      </Grid>        
    </div>
  )
}

export default MarketPlace