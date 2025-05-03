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
//     <div className='flex flex-col w-full gap-y-6 mt-6'>
//       <form onSubmit={submitHandler}>

//         <label className='w-full'>
//             <p className='text-[0.875rem] text-blue-700 mb-1 leading-[1.375rem]'>
//                 Email Address<sup className='text-pink-200'>*</sup>
//             </p>

//             <input 
//             type="email" 
//             required
//             value={formData.email}
//             onChange={changeHandler}
//             placeholder='Enter email id'
//             name="email"
//             className='bg-black rounded-[0.5rem] text-white w-full p-[12px]'
//             />
//         </label>


//         <label>
//             <p className='text-[0.875rem] text-blue-700 mb-1 leading-[1.375rem]'>
//                 Password
//             </p>

//             <input 
//             type={showPassword ? ("text") : ("password")} 
//             required
//             value={formData.password}
//             onChange={changeHandler}
//             placeholder='Enter Password'
//             name="password"
//             className='bg-black rounded-[0.5rem] text-white w-full p-[12px]'

//             />


//             <span
//             className='absolute right-3 top-[38px] cursor-pointer'
//             onClick={() => setShowPassword((prev) => !prev)}>
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
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <div className='flex flex-col w-full h-[400px] max-w-md mx-auto gap-y-6 mt-6 px-6 py-8 bg-gray-900 rounded-xl shadow-lg'>
      <h2 className="text-2xl font-semibold text-white text-center">Welcome Back</h2>
      <form onSubmit={submitHandler} className='flex flex-col gap-5'>

    
        <label className='flex flex-col'>
          <p className='text-sm text-gray-300 mb-1'>
            Email Address<sup className='text-pink-500 ml-1'>*</sup>
          </p>
          <input
            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id'
            name="email"
            className='bg-gray-800 border border-gray-700 rounded-md text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </label>

     
        <label className='flex flex-col relative'>
          <p className='text-sm text-gray-300 mb-1'>
            Password<sup className='text-pink-500 ml-1'>*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name="password"
            className='bg-gray-800 border border-gray-700 rounded-md text-white p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <span
            className='absolute right-3 top-[38px] text-xl text-gray-400 cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
          <Link to="#" className='text-xs text-blue-400 mt-1 self-end hover:underline'>
            Forgot Password?
          </Link>
        </label>

       
        <button
          type="submit"
          className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200 font-medium text-lg'
        >
          Sign In
        </button>

      </form>
    </div>
  );
};

export default LoginForm;
