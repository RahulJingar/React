import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {

  const navigate = useNavigate();

  function serviceHandler(){
    navigate("/support")
  }

  return (
    <div>
      <h1>This is service page</h1>
      <button onClick={serviceHandler}>This is Support Page</button>
    </div>
  )
}

export default Service
