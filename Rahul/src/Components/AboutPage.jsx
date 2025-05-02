import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const navigate = useNavigate();

    function clickHandler(){
        navigate("/")
    }

    function goHandler(){
        navigate(-1)
    }

  return (
    <div>
      <h1>this is a home page</h1>
      <button onClick={clickHandler}>Move to home</button>
      <button onClick={goHandler}>Go Back</button>
    </div>
  )
}

export default AboutPage
