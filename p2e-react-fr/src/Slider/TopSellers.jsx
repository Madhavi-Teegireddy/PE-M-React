import "./top.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import { Heading } from "@chakra-ui/react";
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
           <Heading color={"black"} marginBottom={"30px"} fontWeight="bold" marginLeft={"10px"}
           fontSize={{base: "25px", sm: "25px", md: "30px", lg: "30px"}} mt={{base:"30px"}}
           >Our Top Sellers</Heading>
      <Carousel responsive={responsive}>
        {tops}
      </Carousel>
    </div>
  );
}

export default TopSellers;