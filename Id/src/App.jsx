// import React from 'react'
// import Navbar from './Components/Navbar'
// import Home from './Pages.jsx/Home'
// import Login from './Pages.jsx/Login'
// import SignUp from './Pages.jsx/SignUp'
// import Dashboard from './Pages.jsx/Dashboard'
// import { Routes, Route } from 'react-router-dom'
// import { useState } from 'react'


 

// const App = () => {

//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
      
//       <Navbar
//       isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
//       />

//       <Routes>

//          <Route path ="/home" element={<Home/>} />
//          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

//          <Route path ="/signup" element={<SignUp/>} />
//          <Route path ="/dashboard" element={<Dashboard/>} />

//       </Routes>

//     </div>
//   )
// }

// export default App



import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages.jsx/Home';
import Login from './Pages.jsx/Login';
import SignUp from './Pages.jsx/SignUp';
import Dashboard from './Pages.jsx/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Import Toaster for react-hot-toast

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen bg-black flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      {/* Add Toaster component here to show toast messages */}
      <Toaster />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
