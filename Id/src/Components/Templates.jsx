import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'


const Templates = ({title, desc1, desc2, formtype, setIsLoggedIn}) => {
  return (
    <div>
        <div>
      
      <h1>{title}</h1>

      <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
      </p>

      {formtype === "signup" ? 
      (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : 
      (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

          <div>

              <div></div>
              <p>OR</p>
              <div></div>

          </div>

          <button>
              <p>Sign Up With Goggle</p>
          </button>

  </div>

        <div>
            <img src="https://img77.uenicdn.com/image/upload/v1725018380/business/cfd33300-6ccf-462e-bf68-efa0293fa7b1.jpg" 
            alt="" 
            width={558}
            height={504}
            loading='lazy'
            />


            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJMXJ8AY519a5swu_t7ng0YAoHFmK7xqyoC2r_-6OROCgGdf5R" 
            alt="" 
            width={558}
            height={490}
            loading='lazy'
            />
        </div>

        

    </div>
  )
}

export default Templates
