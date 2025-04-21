import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [text,setText] = useState('');
  const [name1,setName] = useState('love');

// 1. variation - 1
  //variation -> Every Render
  // useEffect( () => {
  //   console.log("UI rendering done");
  // });

// 2. variation - 2
  // useEffect( () => {
  //   console.log("UI rendering done");
  // },[]);

  // 3. variation - 3 first render + whenever dependency changes
  //  useEffect( () => {
  //   console.log("change observed");
  // },[name1])             // ye wala code tabhi run hoga jab name ki value change hogi


  // 4. variable -> to handle unmounting of a component

  useEffect( () =>{
    //add event listener
    console.log("listener added");          // 34 ke bd ye chalegi kuki return wala pahle hota hain 
    return () =>{
      console.log("listener removed");      //pahle ye line chal rahi hain 
    }
  },[text]);

  function changeHandler(event){
  console.log(text);
  setText(event.target.value)

  }
  return (
    <div>
        <input type="text" onChange={changeHandler} />
    </div>
  )
}

export default App
