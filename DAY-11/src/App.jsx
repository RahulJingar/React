import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from '../Components/Products'
import NewProduct from '../Components/NewProduct'

function App() {
  const products = [
    {
      id:"p1",
      title:"Dove",
      amount:150,
      date:new Date(2022,8,17)
    },

    {
      id:"p2",
      title:"No.1",
      amount:120,
      date:new Date(2012,7,27)
    },

    {
      id:"p3",
      title:"Surf Excel",
      amount:75,
      date:new Date(2013,4,18)
    },

    {
      id:"p4",
      title:"Cinthol",
      amount:75,
      date:new Date(2016,5,24)
    }
  ];


  function printProductData(data){
    console.log("i am inside APP.js")
    console.log(data)
  }

  return (
    <>
    <NewProduct print = {printProductData}/>
      <Products items={products}/>
    </>
  )
}

export default App
