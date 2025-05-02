import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

  const navigate = useNavigate();

  function supportHandler(){
    navigate("/about");
  }

  return (
    <div>
      <h1>This is Support Page</h1>
      <button onClick={supportHandler}>This is About Page</button>
    </div>
  )
}

export default Support
