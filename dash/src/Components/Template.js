import React from 'react'
import img from "../Assets/logo192.png"
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex w-9/12 max-w-[1160] py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-9/12 max-w-[450px] mx-0'>
          <h1 className='text-white font-semibold text-2xl '>{title}</h1>
          <p className='text-[1.125rem] leading[1.625rem mt-4'>
            <span className='text-gray-400' >{desc1}</span><br/>
            <span className='text-blue-300 italic'>{desc2}</span>
          </p>

          {formtype === "signup" ? 
          (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>):
          (<LoginForm setIsLoggedIn= {setIsLoggedIn} />) }

          <div className='flex w-full items-center my-4 gap-x-2'>
              <div className='w-full h-[1px] bg-slate-600'></div>
              <p className=' text-gray-400 font-medium leading[1.375rem]'>OR</p>
              <div className='w-full h-[1px] bg-slate-600'></div>
          </div>

          <button className='flex justify-center items-center w-full bg-yellow-400 rounded-[8px] text-black border-black px-[12px] py-[6px] gap-x-2 font-medium'>
            <p>Sign Up with Google</p>
          </button>
      </div>

      <div>
        <img src={img} loading='lazy' width={150} height={160}/>
      </div>
    </div>
  )
}

export default Template
