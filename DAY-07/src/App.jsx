import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from '../../DAY-06/Components/Item'
import Date from '../Components/Date'

function App() {
const name = "Hari Mohan"

  return (
    <div>
     
      <Item name={name}></Item>
      <Date day="16" month="September" year="2006"></Date>

      <Item name="manish"></Item>
      <Date day="27" month="March" year="2000"></Date>

      <Item name="Rahul"></Item>
      <Date day="27" month="September" year="1998"></Date>
     <h1 className='bg-red-400'>hello</h1>
    </div>
  )
}

export default App


