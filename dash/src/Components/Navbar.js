import React, { useState } from 'react';
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className=' flex justify-between items-center w-9/12 max-w[1160px] py-4 mx-auto ' >
      <Link to="/">
         <img src={logo} alt='Logo' width={160} height={50} loading='lazy'/>
      </Link>
      
      <nav>
        <ul className='flex gap-x-7 text-white'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>

    <div className='flex items-center gap-x-6 mr-10 text-gray-300'>
        { !isLoggedIn &&
           <Link to="/login">
              <button className='bg-gray-900 py-[6px] px-[12px] rounded-[8px] border-black'>LogIn</button>
           </Link>
        }
        { !isLoggedIn &&
           <Link to="/signup">
              <button className='bg-gray-900 py-[6px] px-[12px] rounded-[8px] border-black'>SignUp</button>
           </Link>
        }
        { isLoggedIn &&
           <Link to="/">
              <button className='bg-gray-900 py-[6px] px-[12px] rounded-[8px] border-black' onClick={ () =>{
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}>
                LogOut</button>
           </Link>
        }
        { isLoggedIn &&
           <Link to="/dashboard">
              <button className='bg-gray-900 py-[6px] px-[12px] rounded-[8px] border-black'>Dashboard</button>
           </Link>
        }
       
    </div>

    </div>
  )
}

export default Navbar;
