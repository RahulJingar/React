import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [Prodcut,setProduct] = useState();
   useEffect(
    () => {
        async function getP() {
            try {
              const response = await fetch(
                "https://gist.githubusercontent.com/Mayank7677/27552c8d61b2aea4514ce65c386cebe7/raw/a4206a4e44adfc1170d8679a0e534a0f9e0b248b/productData.json"
              );
              if (response.ok) {

                const data = await response.json();
                setProduct(data)
                console.log(data);
              } else {
                throw new Error("Failed to fetch data");
              }
            } catch (error) {
              console.error("Error:", error);
            }
          }
          getP();
    },[]
   )
  return (
    <div>
      
    </div>
  )
}

// export default ProductProvider
export const useProduct = () => useContext(ProductContext);
