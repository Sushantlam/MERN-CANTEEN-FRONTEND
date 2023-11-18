import React, { useLayoutEffect } from 'react'
import "./Offer.css"
import { useRef } from 'react'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Offer = () => {

  
  const myElement = useRef()

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
      const gtx=gsap.context(()=> {
          const tl = gsap.timeline()
         
         
  
            tl.from(".section",{
              opacity:0,
              x:200,
              duration: 1,
              // color: "white",
              // height: "100px",
              // width:"100%",
              stagger:0.5,
              scrollTrigger:{
                  trigger: ".section",
                  // scroller: "body",
                //  markers: true,
                 start: "top 80%",
                 end: "top 65%",
                 scrub:1,
             }
         })
      }, myElement)
      return () => gtx.revert()
         
        },[])
  return (
   < >
   <div className="section" ref={myElement}>
    <div className="section-head">
        <h2 className='ready'>How we make your order ready?</h2>
        <div className="section-list">
            <div className="sectionList">
                <img className='imageList' src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67484.png" alt="logoImg" />
              <span className='desc'>You can search for various type of food and to order it you first have to order the food by signing up or logging in </span> 
           
            </div>
            <div className="sectionList">
                <img className='imageList' src="https://hips.hearstapps.com/hmg-prod/images/701/mistakes-making-meal-prep-main-1515520802.jpg" alt="logoImg" />
              <span className='desc'>You can search for various type of food and to order it you first have to order the food by signing up or logging in </span> 
           
            </div>
            <div className="sectionList">
                <img className='imageList' src="https://i.dailymail.co.uk/i/pix/scaled/2015/03/03/264A46E100000578-0-image-a-9_1425424869502.jpg" alt="logoImg" />
              <span className='desc'>You can search for various type of food and to order it you first have to order the food by signing up or logging in </span> 
           
            </div>
        </div>
    </div>
    </div>  </>  )
}

export default Offer