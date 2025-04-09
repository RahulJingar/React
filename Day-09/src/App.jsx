import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from '../Components/Item'
import Date from '../Components/Date'

function App() {
  const response = [
    {
      itemName:"Cinthol",
      itemDate:"27",
      itemMonth:"September",
      itemYear:"1994"
    },

    {
      itemName:"No.1",
      itemDate:"15",
      itemMonth:"August",
      itemYear:"1997"
    },

    {
      itemName:"Dove",
      itemDate:"22",
      itemMonth:"June",
      itemYear:"1992"
    }
  ];

  return (
    <>
      <Item name={response[0].itemName}>
        hello how are you guys
      </Item>
      <Date day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Date>

      <Item name={response[1].itemName}></Item>
      <Date day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></Date>

      <Item name={response[2].itemName}></Item>
      <Date day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></Date>
    </>
  )
}

export default App
