import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {

    let IsLoggedIn = props.IsLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between  items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
     
        <Link>
            <img 
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlUBQ2pR2h59s8S2_PV74dAm0dHf06oQZkE971TNbXmffWHkB4" 
           
            alt="logo" width={160} height={32} loading='lazy' />
        </Link>
     

     <nav>

            <ul className='gap-x-6 flex text-white'>
                <li>
                    <Link to="/home">Home</Link>
                </li>

                <li>
                    <Link to="/">About</Link>
                </li>

                <li>
                    <Link to="/">Contact</Link>
                </li>

            </ul>


     </nav>
                {/* login - sign up - dashboard - log out  */}

                <div className='flex items-center gap-x-4'>

                        {!IsLoggedIn && 
                            <Link to="/login">
                            <button className='bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700'>
                                Log in
                                </button>
                        </Link>
                        }

                       { !IsLoggedIn && 
                        <Link to="/SignUp">
                            <button className='bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700'>
                                Sign Up

                            </button>
                        </Link>
                       }     


                        {IsLoggedIn && 
                        <Link to="/logout">
                            <button
                            onClick={() => {
                                setIsLoggedIn(false)
                                toast.success("logged Out")
                            }}
                             className='bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700'
                            >Log Out</button>
                        </Link>
                        }

                        {IsLoggedIn && 
                        <Link to="/dashboard">
                            <button
                             className='bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700'
                            >DashBoard</button>
                        </Link>
                        }


                </div>

    </div>
  )
}

export default Navbar
