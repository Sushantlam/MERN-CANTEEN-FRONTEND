import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Auth'
import { CartContext } from '../../context/Product'
import {FaShoppingCart} from "react-icons/fa"

const Navbar = () => {
  const { email, dispatch, error } = useContext(AuthContext)
  const { dispatch: cartDispatch , totalProduct} = useContext(CartContext)
  const [logout, setLogOUt] = useState(false)

  const navigate = useNavigate()

  const hanldeClick = () => {
    try {
      dispatch({ type: "Logout" })
      cartDispatch({ type: "Log_Out" })
      navigate("/login")
    } catch (error) {
        console.log();

    }
  }

  return (
    <><div className="navbar">
      <div className="container">
        <div className="left">
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUJxA4tP0PJNYCgZ5g_pbIy3tc_hG7NFoKQ&usqp=CAU" alt="" />
          <ul className='mainNav'>
            <Link to="/" className='link'><li >Home</li></Link>
            <Link to='/menu' className='link'> <li>Menu</li></Link>
            <Link to='/about' className='link'> <li>About</li></Link>
            <Link to='/contactus' className='link'>  <li>Contact Us</li></Link>

          </ul>
        </div>
        <div className="right">
          {email ? (<><div style={{ hover: PointerEvent }} onClick={() => setLogOUt(!logout)}>{email.userName}</div>  <div className="right">
            <Link to="/cart" className='link'><FaShoppingCart className='shoppingCart'/> <span className='navTotal'> {totalProduct}</span></Link>
            
          </div></> ) : (<><Link to="/login"> <button className='login'>Log-In</button></Link>
          <Link to="/signup"> <button className='signup'>Sign-Up</button></Link> 
         
          </>)}
          <Link to="/login" className='logOutBttn' onClick={hanldeClick}>{logout && <button >Log Out</button>}</Link>
        </div>
        


      </div>
     
    </div></>
  )
}

export default Navbar