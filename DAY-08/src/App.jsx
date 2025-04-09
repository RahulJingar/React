import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from '../Component/Item'
import Date from '../Component/Date'


function App() {
  const response = [
    {
      itemName:"Nirma",
      itemDate:"27",
      itemMonth:"sept",
      itemYear:"1998"
    },

    {
      itemName:"Lux",
      itemDate:"22",
      itemMonth:"june",
      itemYear:"2004"
    },

    {
      itemName:"LifeBoy",
      itemDate:"14",
      itemMonth:"April",
      itemYear:"2008"
    }
  ];

  return (
    <>
     <Item name={response[0].itemName}></Item>
     <Date day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Date>

    <Item name={response[1].itemName}></Item>
    <Date day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></Date>

    <Item name={response[2].itemName}></Item>
    <Date day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></Date>
    </>
  )
}

export default App
