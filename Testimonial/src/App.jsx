import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './Components/Testimonials'
import reviews from './Data';

function App() {

 return (
 <div className='flex flex-col w-[100vw] h-[100vh] bg-gray-200'>
    <div className='text-center'>
 <h1 className='text-3xl text-bold mt-8'>Our Testimonials</h1>
 <div className='h-[4px] w-[1/5] mt-1 w-16 bg-violet-400 mx-auto'></div>
 
<Testimonials reviews = {reviews}/>

 
 </div>
</div>
 );
};

export default App