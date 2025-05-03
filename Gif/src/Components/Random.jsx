import React from 'react'
import {useState} from 'react'

const Random = () => {

    const [gif, setGif] = useState('');

    function clickHandler(event){

    }

  return (
    <div className='w-1/2 h-[450px] bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
       <h1 className='text-3xl underline font-bold uppercase'>A Random Gif</h1>
       <img src="" width="450"/>
       <button
       className='bg-white w-10/12 h-14 opacity-80 rounded-lg'
       onClick={clickHandler}>
        Generate

       </button>
    </div>
  )
}

export default Random
