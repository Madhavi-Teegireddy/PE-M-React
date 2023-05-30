import "./top.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import { Heading, Box, Button } from "@chakra-ui/react";
import TopS from "./TopS"

function TopSellers() {
  const tops = productData.map((item) => (
    <TopS
      url={item.imageurl}
      price={item.price}
    />
  ));

  return (
    <div className="cont"> 
        <Box display="flex" justifyContent={"space-between"}>
          <Heading color={"black.600"} fontWeight="bold" marginLeft={"10px"}  marginBottom={"40px"}
           fontSize={{base: "25px", sm: "25px", md: "30px", lg: "30px"}}  
           >Our Top Sellers</Heading>
        <Button marginRight={"30px"}  marginBottom={"40px"}>View all -- </Button>
        </Box>
      <Carousel responsive={responsive}>
        {tops}
      </Carousel>
    </div>
  );
}

export default TopSellers;