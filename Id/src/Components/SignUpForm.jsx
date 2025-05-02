import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const SignUpForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname : "",
    lastname :"",
    email :"",
    password:"",
    confirmpassword:""
  })
  

  function changeHandler(event){
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name] : event.target.value
      }
    ))
  }

    function submitHandler(event){
      event.preventDefault();

      if(formData.password != formData.confirmpassword){
        toast.error("password do not match")
        return 
      }
      
      setIsLoggedIn(true);
      toast.success("Account created")

      navigate("/dashboard")
    }

  return (
    <div>
      {/* student -instructor tab  */}

      <div>
        <button>
        Student
        </button>
        <button>
        Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name  */}
        <div>

              <label>
                <p>First Name<sup>*</sup></p>
                <input 
                type="text"
                required
                name='firstname'
                onChange={changeHandler}
                placeholder='Enter the First Name'
                value={formData.firstname}
                />
              </label>


              <label>
                <p>Last Name<sup>*</sup></p>
                <input 
                type="text"
                required
                name='lastname'
                onChange={changeHandler}
                placeholder='Enter the Last Name'
                value={formData.lastname}
                />
              </label>

        </div>


          {/* emaail address  */}
        <label>
          <p>Email Name<sup>*</sup></p>
          <input 
          type="email"
          required
          name='email'
          onChange={changeHandler}
          placeholder='Enter the Email'
          value={formData.email}
           />
        </label>


       

        {/* create password and confirm password  */}
       <div>




       <label>
          <p>Create Password<sup>*</sup></p>
          <input 
          required
          type={showPassword ? ("text") : ("password") }
          name='password'
          onChange={changeHandler}
          placeholder='Enter the password'
          value={formData.password}
           />

                     <span onClick={() => setShowPassword((prev) => !prev)}>
                          {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)};
                     </span>
        </label>


        <label>
          <p>Confirm Password<sup>*</sup></p>
          <input 
          type={showPassword ? ("text") : ("password")}
          required
          name='confirmpassword'
          onChange={changeHandler}
          placeholder='Enter the confirm password'
          value={formData.confirmpassword}
           />

                     <span onClick={() => setShowPassword((prev) => !prev)}>
                          {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)};
                    </span>

        </label>

       </div>


          <button>
            Create Account
          </button>


      </form>

    </div>
  )
}

export default SignUpForm
