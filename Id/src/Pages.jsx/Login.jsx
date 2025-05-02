// import React from 'react'
// import Templates from '../Components/Templates'
// import LoginForm from '../Components/LoginForm'

// const Login = ({setIsLoggedIn}) => {
//   return (
//    <Templates

//    title="Welcome Back"
//    desc1="Build skills for today, tomorrow, and beyond."
//    desc2="Education to future-proof your career."
//    image="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
//    formtype="login"
  
//   setIsLoggedIn={setIsLoggedIn} 
   
//    />
//   )
// }

// export default Login


import React from 'react';
import Templates from '../Components/Templates';
import LoginForm from '../Components/LoginForm';

const Login = ({ setIsLoggedIn }) => {
  return (
    <Templates
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
