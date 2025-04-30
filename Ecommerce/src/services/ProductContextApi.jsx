import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [Prodcut,setProduct] = useState();
   useEffect(
    () => {
        async function getP() {
            try {
              const response = await fetch(
                "https://gist.github.com/prajjaldhar/86e071452fa780c20d1b4e2ac7a0d80f"
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
