import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Support from './Components/Support'
import Labs from './Components/Labs'
import NotFound from './Components/NotFound'
import MainHeader from './Components/MainHeader'

function App() {
  return (
    <div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/Support">Support</NavLink>
              </li>

              <li>
                <NavLink to="/labs">Labs</NavLink>
              </li>

              <li>
                <NavLink to="*">Not Found</NavLink>
              </li>


            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MainHeader/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/labs" element={<Labs/>}/>
            <Route path="*" element={<NotFound/>}/>
            </Route>
          </Routes>
    </div>
  )
}

export default App
