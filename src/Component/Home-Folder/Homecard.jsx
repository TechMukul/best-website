import React from "react";
import { Route, useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetail/ProductDetails";

const Homecard = ({product}) => {
  const navigate =useNavigate();
  function goto(){
    navigate("/product")
  }
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">

        <img className='object-cover object-top w-full h-full' src={product.imageUrl} onClick={goto} alt="Nothing" />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 font-sm text-gray-500'>{product.title}</p>
      </div>
    </div>
  );
};

export default Homecard;
