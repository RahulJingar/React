import React, { useState } from 'react'

const ProductForm = (props) => {
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const pruductData = {
            title:newTitle,
            date:newDate
        }
        props.onSaveProduct(pruductData);
        setTitle('');
        setDate('');
    }

  return (
    <form onSubmit={submitHandler}>
      <input
       type="text" 
       value={newTitle}
       onChange={titleChangeHandler}

       /> <br />
      <input
      type="date"
      value={newDate}
      onChange={dateChangeHandler}

      /> <br />

      <button
      type='submit'
      >Submit</button>
    </form>
  )
}

export default ProductForm
