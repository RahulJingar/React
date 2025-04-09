import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from '../Components/Item'
import ItemDate from '../Components/ItemDate'

function App() {

  return (
   <div>
    <Item name="Manish" ></Item>
    <ItemDate day="27" month="march" year="2000" ></ItemDate>

    <Item name="Jitesh" ></Item>
    <ItemDate day="19" month="January" year="2004"></ItemDate>

    <Item name="Ashish" ></Item>
    <ItemDate day="08" month="dec" year="1994"></ItemDate>
   </div>
  )
}

export default App
