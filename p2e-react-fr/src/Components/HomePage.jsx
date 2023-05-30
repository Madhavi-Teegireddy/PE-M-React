import React from 'react'
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Main from "./Main"
import Slider from '../Slider/Slider';
import TopSellers from '../Slider/TopSellers';
import MarketPlace from '../Market/MarketPlace';
import BigGrid from './BigGrid/BigGrid';
import HotColl from './HotC/HotColl';
import Mint from './Mint/Mint';
import Footer from "./Footer"



const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };


const HomePage = () => {
  return (
  <Box>
      <Navbar/>
      <Main/>
      <Slider/>
      <TopSellers/>
      <MarketPlace/>
      <BigGrid/>
      <HotColl/>
      <Mint/>
      <Footer/>
  </Box>

  )
}

export default HomePage;
