import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import "./featurefood.css"
import useFetch from "../../hooks/useFetch"
import { AuthContext } from '../../context/Auth'
import { CartContext } from '../../context/Product'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Food from "../../Photo/Food.jpg"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Featurefood = () => {
  

 
  
  const myElement = useRef()

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
      const gtx=gsap.context(()=> {
          const tl = gsap.timeline()
         
         
  
            tl.from(".featuredFood",{
              opacity:0,
              y:100,
              duration: 1,
              // color: "white",
              // height: "100px",
              // width:"100%",
              stagger:0.5,
              scrollTrigger:{
                  trigger: ".featuredFood",
                  // scroller: "body",
                //  markers: true,
                 start: "top 70%",
                 end: "top 55%",
                 scrub:1,
             }
         })
      }, myElement)
      return () => gtx.revert()
         
        },[])




 
  




  return (
    <>
<div className="featured" ref={myElement}>
    <div className="featuredFood">
    
        <div className="featureContent">
          <h3 className='eat'>Eat.</h3>
          <span className='breakfast'>Breakfast, Lunch and Artisanal Pastries</span>
          <span className='Para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores  corrupti! Dignissimos in excepturi laborum nisi voluptates vitae, totam laboriosam?</span>

        </div>
        <div className="imageFeatured">
<img className='featuredImage' src={Food} alt="" />
      
      </div>
    </div>
    </div>
   
    
       </> )
}

export default Featurefood