import React from 'react'
import Template from '../Components/Template'
import loginimg from "../Assets/logo.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
       title="welcome"
       desc1="build skills for today tomorrow and beyond"
       desc2="Here is build skills edcation to future"
       image={loginimg}
       formtype="login"
       setIsLoggedIn={setIsLoggedIn}
    
    />
  )
}

export default Login
