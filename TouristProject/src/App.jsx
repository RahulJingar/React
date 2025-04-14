import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from '../Data'
import Tour from '../Components/Tour'


function App() {

  const [tours, setTour] = useState(Data)

function removeTour(id){
  const newTours = tours.filter(tour => tour.id !== id)
  setTour(newTours);
}

  if(tours.length === 0)
  {
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={() => setTour(Data)}>
          Refresh
          </button>
      </div>
    )
  }

  return (
    <>
    <div className='App'>
      <Tour tours = {tours} removeTour={removeTour}></Tour>
    </div>
    </>
  )
}

export default App
