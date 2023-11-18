import React, { useLayoutEffect, useRef } from 'react'
import "./Hero.css"
import HeroImg from "../../Photo/Hero.png"
import Dots from "../../Photo/circle-dots.png"
import { Link} from 'react-router-dom'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"


const Hero = ({type}) => {

  const myElement = useRef()

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
      const gtx=gsap.context(()=> {
          const tl = gsap.timeline()
          tl.from(".hero .image" ,{
            x:200,
            opacity:0,
            duration: 1,
            delay: 0.3,
            stagger: 2
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
  return (
    <>
    <div className="hero" ref={myElement}>
        <div className="image">
        <img src={Dots} className='dots' alt="dots" />


       <div className="words">
        
        <h3 className='welcome'>Make Your <span className='tummy'>   Tummy</span></h3>
        <h3 className='booking'>Happy <span className='tummy'>     Tummy</span> </h3>
       <Link to="/menu"> <button className='started'>Order Online</button></Link>
        </div>
        <div className="photos">
            <img src={HeroImg} alt="" />
       
        </div>
        </div> 

       
           
           </div></>
  )
}

export default Hero