import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './utility/Data'

function App() {
  const [tours, setTour] = useState(Data);


  return (
    <>
      <Data/>
    </>
  )
}

export default App
