import React from 'react'
import FooterImage from "../../Photo/footer.png"
import "./Footer.css"
import { FaFacebook , FaTwitter} from "react-icons/fa"
import {  GrInstagram } from "react-icons/gr"
import {  BsYoutube } from "react-icons/bs"

const Footer = () => {
  return (
    <>
    <div className="footerMain">
        <div className="footerImage">
        <div className="footer">
        <div className="socialmeida">
             <span>CALL US </span>
             <span>Kathmandu: 4444177, 4440979, 9802034008 </span>
             <span>CALL US </span>
             <span>Pokhara: 9802859990, 9802853330</span>
             </div>
            <div className="socialmeida">
             <span>GET HELP </span>
             <span>How to Order? </span>
           </div>
            <div className="socialmeida">
             <span>Follow us on </span>
            <div className="smedia">
            <FaFacebook className="icons" id='fb'/>
            <GrInstagram className="icons" id="insta"/>
            <FaTwitter className="icons" id='twit'/>
            <BsYoutube className="icons" id='yt'/>



            </div>
   </div>

           
           
            </div>
            <img src={FooterImage} className='fImage' alt="" />
            
            </div>
            
            </div>    </>  )
}

export default Footer