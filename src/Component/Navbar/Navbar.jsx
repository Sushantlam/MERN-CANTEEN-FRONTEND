import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Auth'
import { CartContext } from '../../context/Product'

const Navbar = () => {
  const { email, dispatch, error } = useContext(AuthContext)
  const { dispatch: cartDispatch } = useContext(CartContext)
  const [logout, setLogOUt] = useState(false)

  const navigate = useNavigate()

  const hanldeClick = () => {
    try {
      dispatch({ type: "Logout" })
      cartDispatch({ type: "Log_Out" })
      navigate("/login")
    } catch (error) {


    }
  }

  return (
    <><div className="navbar">
      <div className="container">
        <div className="left">
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUJxA4tP0PJNYCgZ5g_pbIy3tc_hG7NFoKQ&usqp=CAU" alt="" />
          <ul className='mainNav'>
            <Link to="/"><li >Home</li></Link>
            <Link to='/menu'> <li>Menu</li></Link>
            <Link to='/about'> <li>About</li></Link>
            <Link to='/contactus'>  <li>Contact Us</li></Link>

          </ul>
        </div>
        <div className="right">
          {email ? (<><div style={{ hover: PointerEvent }} onClick={() => setLogOUt(!logout)}>{email.userName}</div></>) : (<><Link to="/login"> <button className='login'>Log-In</button></Link>
            <button className='signup'>Sign-Up</button></>)}
          <div className="right">
            <Link to="/cart"> <p >cart</p></Link>
          </div>
        </div>
        


      </div>
      <Link to="/login" onClick={hanldeClick}>{logout && <button >Log Out</button>}</Link>
    </div></>
  )
}

export default Navbar