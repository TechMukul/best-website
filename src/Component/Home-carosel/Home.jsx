import React from "react";
import AliceCarousel from "react-alice-carousel";
import { MainCaroseldata } from "./MainCaroseldata";
import 'react-alice-carousel/lib/alice-carousel.css';

const Home = () => {
  const items = MainCaroseldata.map((item) => (
    <img className='cursor-pointer w-full  '  role='presentation'src={item.image}  alt="break" />
  ));

  return <
    AliceCarousel items={items} 
   disableButtonsControls
   autoPlay 
   autoPlayInterval={2000}
  
   infinite/>;
};
export default Home;
