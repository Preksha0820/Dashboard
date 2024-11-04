import React, { useState } from 'react';
import './App.css';
import { Routes , Route, NavLink} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';


const App=()=>{

  const[isLoggedIn,setIsLoggedIn]=useState(false);

  return (

    <div className='w-screen h-screen flex flex-col bg-black'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setIsLoggedIn ={setIsLoggedIn} />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
};

export default App;
