import React, { useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";


const SignupForm = () => {

    const[formData,setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const[showPassword,setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prevData) =>(
         {...prevData,
             [event.target.name]:event.target.value
 
         }
     )  )
     }

  return (
    <div>
      <div>
         <button>Student</button>
         <button>Instrctor</button>
      </div>

      <form>
        {/*firstname and lastname*/ }
        <div>
            <label>
                <p>First Name</p>
                <input 
                   required
                   type='text'
                   name='firstname'
                   onChange={changeHandler}
                   placeholder='enter name'
                   value={formData.firstname}
                   />
            </label>
    
            <label>
                <p>Last Name</p>
                <input 
                   required
                   type='text'
                   name='lastname'
                   onChange={changeHandler}
                   placeholder='enter name'
                   value={formData.lastname}
                   />
            </label>
        </div>

        {/*email Address*/}
        <label>
            <p>Email Address<sup>*</sup></p>
            <input 
               required
               type='email'
               name='email'
               onChange={changeHandler}
               placeholder='enter email address'
               value={formData.email}
               />
        </label>

        {/*password and confirm password*/}
        <div>
             <label>
                 <p>Create Password<sup>*</sup></p>
                 <input 
                    required
                    type={showPassword ? ("text"):("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='enter password'
                    value={formData.password}
                    />
                    <span onClick={ () => setShowPassword((prev) =>!prev)}>
                         {showPassword ? (AiOutlineEyeInvisible):(AiOutlineEye) }
                    </span>
              </label>

              <label>
                 <p>Confirm Password<sup>*</sup></p>
                 <input 
                    required
                    type={showPassword ? ("text"):("password")}
                    name='confirmpassword'
                    onChange={changeHandler}
                    placeholder='confirm password'
                    value={formData.confirmPassword}
                    />
                    <span onClick={ () => setShowPassword((prev) =>!prev)}>
                         {showPassword ? (AiOutlineEyeInvisible):(AiOutlineEye) }
                    </span>
              </label>
        </div>

        <button>Create Account</button>

      </form>
    </div>
    
  )
}

export default SignupForm
