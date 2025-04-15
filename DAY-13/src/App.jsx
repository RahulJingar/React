import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from '../Component/Form'


function App() {

  function productFunc(event){
    console.log("i am inside")
    console.log(event);
  }

  return (
    <>
     <Form onSaveProduct = {productFunc}/>
    </>
  )
}

export default App
