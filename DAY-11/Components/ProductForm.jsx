import { useState } from "react";
import ProductsItem from "./ProductItem";

function ProductForm(props) {

    const [newTitle, SetTitle] = useState('');
    const [newDate, setDate] = useState('');


    const [fullProductInput, setfullProductInput] = useState({
      title:'',
      date:''
    });


    function titleChangeHandler(event){
      // let obj =  {...prevState, title:event.target.value};
      // console.log(obj);
      // return obj;

       SetTitle(event.target.value);
      //  console.log(event.target.value);
    }

    function dateChangeHandler(event){


        setDate(event.target.value);
        // console.log(event.target.value);
        // // console.log("printing");
        // console.log(title);
        // console.log(Date);
    }

   function submitHandler(event){
    event.preventDefault()

      const productData = {
        title:newTitle,
        date:newDate,
        
      };
      // console.log(productData)
      props.onSaveProduct(productData);
      
         SetTitle('');
         setDate('');
   }
    


  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6" onSubmit={submitHandler}>
      <div className="flex flex-col">
        <label className="font-semibold mb-2 text-black">Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={titleChangeHandler}
          className="border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 font-semibold mb-2">Date</label>
        <input
          type="date"
          min="2023-01-01"
          max="2025-12-12"
          value={newDate}
          onChange={dateChangeHandler}
          className="border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="text-red-700 hover:bg-pink-800 font-medium px-6 py-2 rounded-lg transition duration-300"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}

export default ProductForm;






