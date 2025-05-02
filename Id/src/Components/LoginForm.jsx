// import React, { useState } from 'react'
// import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
// import {Link, useNavigate} from 'react-router-dom';
// import {toast} from 'react-hot-toast';

// const LoginForm = ({setIsLoggedIn}) => {


//   const navigate = useNavigate()
//     const [formData, setFormData] = useState({
//         email: "", password: ""
//     });


//     const [showPassword, setShowPassword] = useState(false);

//     function changeHandler(event){
//         setFormData((prev) => (
//             {
//                 ...prev,
//                 [event.target.name] : event.target.value
//             }
//         ))
//     }

//     function submitHandler(event){
//         event.preventDefault()
//         setIsLoggedIn(true)
//         toast.success("Logged In");
//         navigate("/dashboard")
//     }

//   return (
//     <div>
//       <form onSubmit={submitHandler}>

//         <label>
//             <p>
//                 Email Address<sup>*</sup>
//             </p>

//             <input 
//             type="email" 
//             required
//             value={formData.email}
//             onChange={changeHandler}
//             placeholder='Enter emial id'
//             name="email"
//             />
//         </label>


//         <label>
//             <p>
//                 Password
//             </p>

//             <input 
//             type={showPassword ? ("text") : ("password")} 
//             required
//             value={formData.password}
//             onChange={changeHandler}
//             placeholder='Enter Password'
//             name="password"
//             />


//             <span onClick={() => setShowPassword((prev) => !prev)}>
//               {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
//             </span>


//             <Link to="#">
//               <p>
//                 Forgot Password
//               </p>
//             </Link>

//         </label>


//         <button type="submit">
//           Sign In
//         </button>



//       </form>
//     </div>
//   )
// }

// export default LoginForm


import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "", password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");  // Ensure react-hot-toast is properly installed and configured
    navigate("/dashboard");  // Ensure this route is set up correctly in App.jsx
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id"
            name="email"
          />
        </label>

        <label>
          <p>Password</p>
          <input 
            type={showPassword ? "text" : "password"} 
            required
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            name="password"
          />

          <span onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <Link to="#">
            <p>Forgot Password</p>
          </Link>
        </label>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
