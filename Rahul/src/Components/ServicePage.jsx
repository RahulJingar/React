import React from 'react'
import {useNavigate} from 'react-router-dom';

const ServicePage = () => {

    const navigate = useNavigate();

    function serviceHandler(){
        navigate("/support")
    }

  return (
    <div>
      <h1>this is service page</h1>
      <button onClick={serviceHandler}>move to support page</button>
    </div>
  )
}

export default ServicePage
