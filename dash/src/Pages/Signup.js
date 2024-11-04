import React from 'react'
import Template from '../Components/Template'
import loginimg from "../Assets/logo.png"


const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
       title="Join for more here"
       desc1="Preksha is here "
       desc2="Edcation to futureHere is build skills "
       image={loginimg}
       formtype="signup"
       setIsLoggedIn={setIsLoggedIn}
    
    />
  )
}

export default Signup
