

import React, { useState } from 'react';
import ProductDate from './ProductDate';


const ProductItem = (props) => {
  const [title,setTitle] = useState(props.title);

 
  

  function clickHandler(){
    // title="popcorn"
    setTitle("Popcorn");

    console.log("click on the Add to Cart")
  }
  return (
    <div className="bg-green-500  shadow-md rounded-2xl p-4 mb-4 flex items-center justify-between">
      <ProductDate date={props.date} />
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 font-medium">₹ {props.amount}</p>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
