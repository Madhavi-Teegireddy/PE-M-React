import "./slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import Product from "./Product";
import { Heading } from "@chakra-ui/react";


function Slider() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="cont"> 
           <Heading color={"black"} marginBottom={"10px"} fontWeight="bold"
           fontSize={{base: "25px", sm: "25px", md: "30px", lg: "30px"}} mt={{base:"30px"}}
           >Trending Auctions</Heading>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}

export default Slider;