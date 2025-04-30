import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {

    const navigate = useNavigate();
    function changeHandler(){
        navigate("/about")
    }
  return (<div>
    <div>
      <h1>this is labs page</h1>
    </div>
    <button onClick={changeHandler}>Move to About Page</button>
  </div>
    
  )
}

export default Labs
