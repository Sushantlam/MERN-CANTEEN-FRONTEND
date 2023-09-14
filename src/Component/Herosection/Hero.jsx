import React from 'react'
import "./Hero.css"
import HeroImg from "../../Photo/Hero.png"
import Dots from "../../Photo/circle-dots.png"
import { Link} from 'react-router-dom'


const Hero = ({type}) => {
  return (
    <>
    <div className="hero">
        <div className="image">
        <img src={Dots} className='dots' alt="dots" />


       <div className="words">
        
        <h3 className='welcome'>Make Your <span className='tummy'>   Tummy</span></h3>
        <h3 className='booking'>Happy <span className='tummy'>     Tummy</span> </h3>
       <Link to="/menu"> <button className='started'>Order Online</button></Link>
        </div>
        <div className="photo">
            <img src={HeroImg} alt="" />
       
        </div>
        </div> 

       
           
           </div></>
  )
}

export default Hero