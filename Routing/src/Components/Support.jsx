import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

    const navigate = useNavigate();
    function changeHandler(){
        navigate("/labs")
    }

    function backHandler(){
        navigate(-1)
    }
  return (
    <div>
      <h1>this is support page</h1>
      <button onClick={changeHandler}>Move to Labs Page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support
