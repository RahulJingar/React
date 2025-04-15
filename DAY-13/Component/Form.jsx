import React from 'react'
import { useState } from 'react'

const Form = (props) => {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');


    function setTitleHandler(event){
        setTitle(event.target.value)
    }

    function setDateHandler(event){
        setDate(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        const productDate = {
            title:newTitle,
            date:newDate
        }
        props.onSaveProduct(productDate)
        setTitle('')
        setDate('')
    }



  return (
    <form onSubmit={submitHandler}>
      <input
      type="text" 
      placeholder='please fill the blanks...'
      value={newTitle}
      onChange={setTitleHandler}
      /> <br /> <br />

    <input
    type="date" 
      value={newDate}
      onChange={setDateHandler}

      /> 
      <br /> <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
