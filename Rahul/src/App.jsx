import React from 'react'
import Home from '../../Route/src/Components/Home'
import AboutPage from './Components/AboutPage'
import ServicePage from './Components/ServicePage'
import Support from './Components/Support'
import NotFound from './Components/NotFound'
import {Routes, Route, NavLink} from 'react-router-dom'
import MainHeader from './MainHeader'
const App = () => {
  return (
    <div>
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

            
          </ol>
        </nav>
      <Routes>


          <Route path='/' element={<MainHeader/>} >
          <Route index element={<Home/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/service' element={<ServicePage/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='*' element={<NotFound/>} />
          </Route>

      </Routes>
    </div>
  )
}

export default App
