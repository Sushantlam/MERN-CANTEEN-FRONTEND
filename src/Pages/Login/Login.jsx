import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Auth'
import { useNavigate } from 'react-router-dom'
import useFetch from "../../hooks/useFetch"
import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'


const Login = () => {

  

  const {email,loading, error, dispatch}= useContext(AuthContext)
  

  const [credential, setCredential]= useState({
    email: undefined,
    password: undefined,
  })

  const onchange=(e)=>{
  const {id, value}= e.target
  setCredential({...credential, [id]: value})
  }

  console.log(credential);

  const navigate= useNavigate()

  const handleClick = async(e)=>{
    e.preventDefault()
    dispatch({type: "Login_Start"})
    try {
      const res = await axios.post("/user/login", credential)
      console.log(res);
      dispatch({type:"Login_Sucess", payload: res.data.details})
      navigate("/")
      
    } catch (error) {
      dispatch({type: "Login_Fail", payload: error})
      navigate("/login")
      
    }
    
  }
  
 

  
  return (
    <>
    <div>
      <div>
        <input type="email" id="email" onChange={onchange} style={{color:'black'}}/>Username
        <input type="password" id="password" onChange={onchange}/>Password
        <button disabled={loading} onClick={handleClick}>Button</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
    </>
  )
}

export default Login