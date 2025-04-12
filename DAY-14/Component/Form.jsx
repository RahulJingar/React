import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [newTitle, setTitle] = useState('');
    const [newdate, setDate] = useState('');

    function TitleHandler(event){
        setTitle(event.target.value);
    };

    function DateHandler(event){
        setDate(event.target.value);
    };

    function submitHandler(event){
        event.preventDefault();
        const productDate = {
            title:newTitle,
            date:newdate
        }
        props.onSaveProduct(productDate);
            setTitle('');
            setDate('');
        
    }


  return (
    <form onSubmit={submitHandler}>
      <input
      type="text"
      value={newTitle}
      onChange={TitleHandler}
      /> <br /> 
      <input
      type="date"
      onChange={DateHandler}
      value={newdate}
      /> <br />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
