import { Grid, GridItem, Box, Text, Button, Image, Heading } from '@chakra-ui/react'
import React from 'react'

const HotColl = () => {
  return (
    <div>
        <Heading color="black.600" textAlign={"left"} marginLeft={"80px"} marginTop={"30px"}>Hot Collections</Heading>
        
        <Grid
        w={"90%"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"} 
      >

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} _hover={{border:"2px solid blue"}}>
          <Image src="https://media.istockphoto.com/id/636761588/photo/used-brushes-on-an-artists-palette-of-colorful-oil-paint.jpg?s=612x612&w=0&k=20&c=38YQxVJVWnNfvGtlb7AXMx_ItyHZMEdmWenNkWNQ91g=" h="70%" w="90%" m="auto"/>

            <Box display="flex" justifyContent="space-between">
            <Image  width="30%" src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/71333/105481/1624645575009_1954E262-4B91-42DA-B217-90A36CE7BF54__21019.1625043541.jpg?c=2"/>
            <Image  width="25%" h="80%" borderRadius={"100%"} src="https://artist.com/photos/arts/big/parrot-1494922864.jpg"/>
            <Image  width="30%" src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/71333/105481/1624645575009_1954E262-4B91-42DA-B217-90A36CE7BF54__21019.1625043541.jpg?c=2"/>
            </Box>  
            <Text textAlign={"center"}>Modern Art Collections</Text>         
        </GridItem> 

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} _hover={{border:"2px solid blue"}}>
          <Image src="https://media.istockphoto.com/id/636761588/photo/used-brushes-on-an-artists-palette-of-colorful-oil-paint.jpg?s=612x612&w=0&k=20&c=38YQxVJVWnNfvGtlb7AXMx_ItyHZMEdmWenNkWNQ91g=" h="70%" w="90%" m="auto"/>

            <Box display="flex" justifyContent="space-between">
            <Image  width="30%" src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/71333/105481/1624645575009_1954E262-4B91-42DA-B217-90A36CE7BF54__21019.1625043541.jpg?c=2"/>
            <Image  width="25%" h="80%" borderRadius={"100%"} src="https://artist.com/photos/arts/big/parrot-1494922864.jpg"/>
            <Image  width="30%" src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/71333/105481/1624645575009_1954E262-4B91-42DA-B217-90A36CE7BF54__21019.1625043541.jpg?c=2"/>
            </Box>  
            <Text textAlign={"center"}>Modern Art Collections</Text>         
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} _hover={{border:"2px solid blue"}}>
          <Image src="https://media.istockphoto.com/id/636761588/photo/used-brushes-on-an-artists-palette-of-colorful-oil-paint.jpg?s=612x612&w=0&k=20&c=38YQxVJVWnNfvGtlb7AXMx_ItyHZMEdmWenNkWNQ91g=" h="70%" w="90%" m="auto"/>

            <Box display="flex" justifyContent="space-between">
            <Image  width="30%" src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/71333/105481/1624645575009_1954E262-4B91-42DA-B217-90A36CE7BF54__21019.1625043541.jpg?c=2"/>
            <Image  width="25%" h="80%" borderRadius={"100%"} src="https://artist.com/photos/arts/big/parrot-1494922864.jpg"/>
            <Image  width="30%" src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/71333/105481/1624645575009_1954E262-4B91-42DA-B217-90A36CE7BF54__21019.1625043541.jpg?c=2"/>
            </Box>  
            <Text textAlign={"center"}>Modern Art Collections</Text>         
        </GridItem>                
       
        </Grid>       
 
    </div>
  )
}

export default HotColl