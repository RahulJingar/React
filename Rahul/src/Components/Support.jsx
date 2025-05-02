import React from 'react'
import {useNavigate} from 'react-router-dom'

const Support = () => {

    const navigate = useNavigate();

    function supportHandler(){
        navigate("/service");
    }

  return (
    <div>
      <h1>this is support page</h1>
      <button onClick={supportHandler}>Move to service</button>
    </div>
  )
}

export default Support
