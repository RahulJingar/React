import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

    const navigate = useNavigate();
    function changeHandler(){
        navigate("/support")
    }

  return (
    <div>
      <h1>This is about page</h1>
      <button onClick={changeHandler}>Move to Support Page</button>
    </div>
  )
}

export default About
