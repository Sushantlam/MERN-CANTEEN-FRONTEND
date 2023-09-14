import React, { useState } from 'react'
import  './Signup.css'
import SignUp from "../../Photo/SignUp.avif"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {

    const navigate = useNavigate()

    const [sign, setSign]= useState({
        userName:'',
        email: '',
        password: ''
    })
    const [error, setError]= useState()
    const [res, setRes]= useState()

    const handleChange=(e)=>{
        const {id, value}= e.target
        console.log("signUpPage", value);
        console.log("id", id);
        setSign({...sign, [id] : value})
    }
    // console.log(sign);

    const handleSignUp= async(e)=>{
        e.preventDefault()
        try {
            const response= await axios.post("/user/signup", sign)
            setRes(response.data.message);
            setSign({
                userName:'',
                email: '',
                password: ''
            })
            // if(response.status===201){
            //   
            // }
             navigate('/login')
        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data.message)
        }
    }
  return (
    <div className='signupMain'>
        <div className="signUpflex">
        <div className="signUpImg">
           <img src={SignUp} alt="" />
        </div>
        <div className="signUpPage">
        Username
              <input type="text" id="userName"  onChange={handleChange}/>
               Email
              <input type="email" id="email" onChange={handleChange} />
              Password
              <input type="password" id="password" onChange={handleChange} />
              <button className='loginBtn' onClick={handleSignUp}>Sign-Up</button>
              {res ? <span style={{color: 'green'}}>{res}</span> : <span className='errorMessage'>{error}</span>}
              
        </div>
    </div></div>
  )
}

export default Signup