import React from 'react'
import ProductForm from './ProductForm'

const NewPro = (props) => {

    function saveProduct(product){
        console.log("i am inside of new products");
        console.log(product);
    }
  return (
    <div>
      <ProductForm onSaveProduct={saveProduct}/>
    </div>
  )
}

export default NewPro
