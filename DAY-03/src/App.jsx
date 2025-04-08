import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from '../Components/Item'
import ItemDate from '../Components/ItemDate'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Item/>
    <ItemDate/>
      <h1>Good Morning Guys</h1>
    </>
  )
}

export default App
