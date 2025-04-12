import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(Count - 1);
  }

  function increaseHandler() {
    setCount(Count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <>
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-10'>
      <div className='text-blue-500 font-medium text-2xl'>Increment & Decrement</div>
      <div className='flex'>
        <button onClick={decreaseHandler}>-</button>
        <div className='w-[125px] text-2xl flex justify-center'>{Count}</div>
        <button onClick={increaseHandler}>+</button>
      </div>
      <button onClick={resetHandler}>reset</button>
    </div>

    </>
  )
}

export default App
