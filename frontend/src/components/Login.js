import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { Route, useNavigate, Switch, Link, Routes } from 'react-router-dom'
import Home from './Home'
import './Signup.css'
import world, { Piano } from '../components/Piano'
import Register from '../components/Register';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  // function ssubmit(event) {
  //     // event.preventDefault();
  //     navigate("/Register");
  //   }
  const writeUser = () => {
    axios.post("http://localhost:3001/Login", {
      email,
      password,
    }).then((response) => {
      console.log("response received")
      console.log(response.data.status)
      if (response.data.status === 'ok')
        navigate("/Navbar")
      else {
        alert("Invalid password")
      }

    });
  };
  return (
    <div className='container cc border border-primary rounded p-5' style={{ "width": "35rem" }}>
      <h1 className='text-center px-5 display-3 mb-4'>LOGIN</h1>
      <div className='d-flex justify-content-evenly'>
        <label className=' display-6'>UserName</label>
        <input className='w-75 m-0 ms-5 my-2 p-2'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
      </div>
      <br />
      <div className='d-flex justify-content-evenly'>
        <label className=' display-6'>Password</label>
        <input
          value={password} className='w-75 m-0 ms-5 my-2 p-2'
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </div>
      <br />
      <div className='d-flex justify-content-center'><button onClick={writeUser} className='btn-primary btn-lg text-center d-flex align-center'> Login</button>
      </div>
      <div className='d-flex justify-content-center py-3'>
        {/* <p className='mx-5'>or</p> */}
        <div className='d-flex justify-content-center mt-3' >
          {/* <button className='btn-primary btn-lg text-center mx-auto' onSubmit={ssubmit}>Register</button> */}
          <Link to='/register'><p className='btn btn-primary'>I don't have an account!😥</p></Link>
          <Routes>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Login