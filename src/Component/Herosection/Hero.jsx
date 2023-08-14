import React from 'react'
import "./Hero.css"
import HeroImg from "../../Photo/Hero.png"
import Dots from "../../Photo/circle-dots.png"


const Hero = ({type}) => {
  return (
    <>
    <div className="hero">
        <div className="image">
        <img src={Dots} className='dots' alt="dots" />


       <div className="words">
        
        <h3 className='welcome'>Welcome to your <span> own canteen site</span></h3>
        <h3 className='booking'>Book your order <span>through online</span> </h3>
        <button className='started'>Order Online</button>
        </div>
        <div className="photo">
            <img src={HeroImg} alt="" />
       
        </div>
        </div> 

       
           
           </div></>
  )
}

export default Hero