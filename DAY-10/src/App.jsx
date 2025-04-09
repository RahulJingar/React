import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from '../../DAY-08/Component/Item'
import Date from '../../DAY-07/Components/Date'
import Card from '../Composnents/Card'

function App() {
  const response = [
    {
      itemName:"No.1",
      itemDate:"17",
      itemMonth:"June",
      itemYear:"2008",
    },

    {
      itemName:"Dove",
      itemDate:"11",
      itemMonth:"July",
      itemYear:"2004",
    },

    {
      itemName:"Lux",
      itemDate:"18",
      itemMonth:"Nov",
      itemYear:"2005",
    },
  ]

  return (
    <Card>
       <Item name={response[0].itemName}></Item>
     <Date day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Date>

     <Item name={response[1].itemName}></Item>
     <Date day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></Date>

     <Item name={response[2].itemName}></Item>
     <Date day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></Date>
    </Card>
  )
}

export default App
