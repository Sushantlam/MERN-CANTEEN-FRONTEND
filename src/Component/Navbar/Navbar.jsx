import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Auth'
import { CartContext } from '../../context/Product'
import {FaShoppingCart} from "react-icons/fa"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Navbar = () => {
  const { email, dispatch, error } = useContext(AuthContext)
  const { dispatch: cartDispatch , totalProduct} = useContext(CartContext)
  const [logout, setLogOUt] = useState(false)

  const myElement = useRef()

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
      const gtx=gsap.context(()=> {
          const tl = gsap.timeline()
          tl.from(".left" ,{
            y:80,
            opacity:0,
            duration: 0.9,
            delay: 0.3,
            stagger: 0.8
          })
          // tl.from(".right" ,{
          //      x:-80,
          //     opacity:0,
          //     duration: 0.8,
          //     delay: 0.3,
          //     stagger: 0.3
          //   })
  
          //   tl.to(".nav",{
          //     backgroundColor:"black",
          //     duration: 1,
          //     color: "white",
          //     height: "100px",
          //     width:"100%",
          //     scrollTrigger:{
          //         trigger: ".nav",
          //         // scroller: "body",
          //         markers: true,
          //         start: "top -20%",
          //         end: "top -21%",
          //         scrub:1,
          //     }
          // })
      }, myElement)
      return () => gtx.revert()
         
        },[])

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
    <><div className="navbar" ref={myElement}>
      <div className="container">
        <div className="left">
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUJxA4tP0PJNYCgZ5g_pbIy3tc_hG7NFoKQ&usqp=CAU" alt="" />
          <ul className='mainNav'>
            <Link to="/" className='link'><li >Home</li></Link>
            <Link to='/menu' className='link'> <li>Menu</li></Link>
            <Link to='/about' className='link'> <li>About</li></Link>
            
            {email ? (<><Link to='/order' className='link'> <li>My Order</li></Link></>): ('')}
          </ul>
        </div>
        <div className="right">
          {email ? (<><div style={{ hover: PointerEvent }} onClick={() => setLogOUt(!logout)}>{email.userName}</div>  <div className="right">
           
            
          </div></> ) : (<><Link to="/login"> <button className='login'>Log-In</button></Link>
          <Link to="/signup"> <button className='signup'>Sign-Up</button></Link> 
         
          </>)}
          <Link to="/cart" className='link'><FaShoppingCart className='shoppingCart'/> <span className='navTotal'> {totalProduct}</span></Link>
          <Link to="/login" className='logOutBttn' onClick={hanldeClick}>{logout && <button >Log Out</button>}</Link>
        </div>
        


      </div>
     
    </div></>
  )
}

export default Navbar