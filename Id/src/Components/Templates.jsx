import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'


const Templates = ({title, desc1, desc2, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto justify-between gap-y-0'>
        <div>
      
      <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

      <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <span className='text-white'>{desc1}</span> <br />
          <span className='text-blue-200 italic'>{desc2}</span>
      </p>

      {formtype === "signup" ? 
      (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : 
      (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

          <div className='flex w-full items-centermy-4 gap-x-2'>

              <div className='w-full h-[1px] bg-blue-900'></div>
              <p className='text-blue-800  font-medium leading-[1.375rem]'>
                OR
              </p>
              <div className='h-[1px] w-full bg-blue-900'></div>

          </div>

          <button>
              <p className='text-white border-2 w-92 rounded-md h-12 flex items-center justify-center'>
            <FcGoogle/>
                Sign Up With Goggle
              </p>
          </button>

  </div>

        <div>
            <img src="https://img77.uenicdn.com/image/upload/v1725018380/business/cfd33300-6ccf-462e-bf68-efa0293fa7b1.jpg" 
            alt="" 
            width={558}
            height={504}
            loading='lazy'
            />


            {/* <img src="" 
            alt="" 
            width={558}
            height={490}
            loading='lazy'
            className='absolute -top-4 right-4 '
            /> */}
        </div>

        

    </div>
  )
}

export default Templates
