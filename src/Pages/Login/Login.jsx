import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Auth'
import { useNavigate, Link } from 'react-router-dom'
import LoginPhoto from "../../Photo/Login.avif"
import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import './Login.css'


const Login = () => {



  const { email, loading, error, dispatch } = useContext(AuthContext)


  const [credential, setCredential] = useState({
    email: undefined,
    password: undefined,
  })

  const onchange = (e) => {
    const { id, value } = e.target
    setCredential({ ...credential, [id]: value })
  }

  // console.log(credential);

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({ type: "Login_Start" })
    try {
      const res = await axios.post("https://canteen-node-api.onrender.com/user/login", credential)
      console.log(res);
      dispatch({ type: "Login_Sucess", payload: res.data.details })
      navigate("/")

    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: "Login_Fail", payload: error.response.data })
      navigate("/login")

    }

  }




  return (
    <>
      <div className="mainLogin">
        <div className="loginContent">
         
          <div className="loginLeft">
            <img src={LoginPhoto} alt="" className='loginImage' />
          </div>
          <div className="loginRight">
            <div className="loginRIGHT">
              Email
              <input type="email" id="email" onChange={onchange} style={{ color: 'black' }} />
              Password
              <input type="password" id="password" onChange={onchange} />
              <button disabled={loading} onClick={handleClick} className='loginBtn'>Log-In</button>
              {error && <span className='errorMessage'>{error}</span>}
            <Link className='signUp' to='/signup'> <span className='signUp'>Go to sign up</span></Link>
            </div>

          </div>
          
        </div>
      </div>

      {/* <div className='loginForm'>

              Email
              <input type="email" id="email" onChange={onchange} style={{ color: 'black' }} />
              Password
              <input type="password" id="password" onChange={onchange} />
              <button disabled={loading} onClick={handleClick} className='loginBtn'>Log-In</button>
              {error && <span>{error.message}</span>}
            </div> */}

    </>
  )
}

export default Login