import { Grid, GridItem, Text, Box, Image, Heading, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const StaticData = () => {
    const [visibleItems, setVisibleItems] = useState(4);

  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12"
  ];



    const handleViewMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };

  return (
    <div>
        <Grid 
        w={"90%"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"} 
      >
        {data.slice(0, visibleItems).map((item, index) => (

        <GridItem key={index} w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}>
            <Box display="flex" justifyContent="space-around" marginTop={"10px"}>
            <Text>@GHARLIERA</Text>
            <Text fontWeight={"bold"}>...</Text>
            </Box>
          <Image src="https://artist.com/photos/arts/big/parrot-1494922864.jpg" h="70%" w="100%"/>
            <Box display="flex" h="40px" justifyContent="space-around" marginTop={"-80px"}>
            <Text> @GHARLIERA</Text>
            <Text fontWeight={"bold"}>❤️</Text>
            </Box>    
            <Heading fontWeight={"bold"} fontSize={"20px"} textAlign={"center"} color={"gray"} marginTop={"-40px"}>Geometrical fig</Heading>

            <Box display="flex" h="auto" justifyContent="space-around" bg="lightgray" p={"3px"}
            marginTop={"-30px"}>
            <Text>current bid</Text>
            <Button bg={"blue"} color="white" _hover={{bg:"gray", color:"black"}} borderRadius={"13px"}>Place a bid</Button>
            </Box>                   
        </GridItem> 
        ))}
        </Grid>       
      
        {visibleItems < data.length && (
        <Button onClick={handleViewMore} my={4} bg="blue" color="white" _hover={{bg:"orange.600"}}>
          View More
        </Button>
      )}
    </div>
  );
};

export default StaticData;
