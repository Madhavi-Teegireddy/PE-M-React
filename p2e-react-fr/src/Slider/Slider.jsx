import "./slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import Product from "./Product";
import { Heading, Box, Button} from "@chakra-ui/react";


function Slider() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (<>

    <div className="cont"> 
        <Box display="flex" justifyContent={"space-between"}>
          <Heading color={"black.600"} fontWeight="bold" marginLeft={"10px"}  marginBottom={"40px"}
           fontSize={{base: "25px", sm: "25px", md: "30px", lg: "30px"}}  
           >Trending Auctions</Heading>
        <Button marginRight={"30px"}  marginBottom={"40px"}>View all -- </Button>
        </Box>    
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
    </>
  );
}

export default Slider;