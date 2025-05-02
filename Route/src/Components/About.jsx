import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  function AboutHandler(){
    navigate("/service")
  }
  function clickHandler(){
    navigate(-1)
  }

  return (
    <div>
      <h1>This is About Page</h1>
      <button onClick={AboutHandler}>Move to Service Page</button>
      <button onClick={clickHandler}>Go back</button>
    </div>
  )
}

export default About
