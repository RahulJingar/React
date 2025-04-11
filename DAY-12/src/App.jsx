import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductForm from '../Components/ProductForm'
import NewPro from '../Components/NewPro'

function App() {
  function saveProduct(event){
    console.log("i am inside the app");
    console.log(event);
  }

  return (
    <>
    <NewPro onSaveProduct ={saveProduct} />
    </>
  )
}

export default App
