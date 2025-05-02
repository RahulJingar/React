import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    function clickHandler(){
        navigate("/service");
    }

  return (
    <div>
      <h1>hello</h1>
      <button onClick={clickHandler}>Move to Service page</button>
   </div>
  )
}

export default Home
