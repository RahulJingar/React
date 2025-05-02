import React from 'react'
import Templates from '../Components/Templates'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Templates
    title="Join the milliosns learning to code with StydyNotion for free"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    image=""
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
      )
}

export default SignUp
