import React from 'react'
import Home from '../../Home-carosel/Home'
import Homesec from '../../Homesectioncarosel/Homesec'
import { mens_kurta } from "../../../Data/mens_kurta";
import { lehenga } from "../../../Data/lehenga";

import ProductDetails from '../../ProductDetail/ProductDetails';
// import Footer from '../../Footer/Footer';

const Homepage = () => {
  return (
    <div>
      <Home/>
   
   
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
      <Homesec data={mens_kurta} SectionName={"Men's Kurta"}/>
      
      <Homesec data={lehenga} SectionName={"Men's Shoes"}/>
      <Homesec data={mens_kurta} SectionName={"Men's Shirt"}/>
      <Homesec data={mens_kurta} SectionName={"Women's Saree"}/>
      <Homesec data={mens_kurta} SectionName={"Women's Dress"}/>

      </div>
      {/* <Footer/> */}
    </div>
    
  )
}

export default Homepage
