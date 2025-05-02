import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Support from './Components/Support'
import Service from './Components/Service'
import { Routes,Route,NavLink } from 'react-router-dom'
import MainHeader from './Components/MainHeader'
import NotFound from './Components/NotFound'

function App() {
  

  return (
    <>

      <nav>
        <ol>
          <li>
            <NavLink to='/' >Home</NavLink>
          </li>

          <li>
            <NavLink to='/about' >About</NavLink>
          </li>

          <li>
            <NavLink to='/service' >Service</NavLink>
          </li>

          <li>
            <NavLink to='/support' >Support</NavLink>
          </li>

          <li>
            <NavLink to='*' >Not Found</NavLink>
          </li>
        </ol>
      </nav>

     <Routes>
      <Route path="/" element={<MainHeader/>} >
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="*" element={<NotFound/>} />
      </Route>

     </Routes>
    </>
  )
}

export default App
