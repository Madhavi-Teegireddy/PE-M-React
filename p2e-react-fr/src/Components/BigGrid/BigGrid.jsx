import { Grid, GridItem, Heading, Image, Text, Box, Button} from '@chakra-ui/react'
import React from 'react'
import { FaMoon } from 'react-icons/fa'

const BigGrid = () => {
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

          <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}>
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

          <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}>
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

          <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}>
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

          <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}>
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

          <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}>
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

          <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}>
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

          <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}>
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

          <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} border={"1px solid lightgray"} borderRadius={"10px"}>
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

               
        
      </Grid>        
    </div>
  )
}

export default BigGrid