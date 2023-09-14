import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Hero from '../../Component/Herosection/Hero'
import Dots from "../../Photo/circle-dots.png"
import Chef from "../../Photo/Chef.jpg"
import TeamPhoto from "../../Photo/TeamPhoto.png"
import Footer from '../../Component/Footer/Footer'

import Food from "../../Photo/Food.avif"
import "./About.css"
const About = () => {
  return (
    <>
    <Navbar/>
     <div className="hero">
        <div className="image">
        <img src={Dots} className='dots' alt="dots" />


       <div className="words">
        
        <h3 className='welcome'>About<span className='us'> Us</span></h3>
        <h3 className='booking'>We provide delicious<span className='us'> food </span> </h3>
       
        </div>
        <div className="photo">
            <img src={TeamPhoto} alt="" className='teamPhoto' />
       
        </div>
        </div> 

       
           
           </div>

           <h3 style={{textAlign: 'center', fontSize: '40px'}}>Our team</h3>
           <div className="teams">
          
          <div className="teamContainer">
            <div className="left">
              <div className="chefPhoto">
             <img src={Chef} className='chef' alt="" />
             </div>
             
            </div>
            <div className="right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati aliquam ipsa. Eveniet veniam suscipit facilis nihil non omnis itaque alias aliquam. Laboriosam iusto alias eaque. Architecto molestiae reprehenderit illo repellat aperiam reiciendis accusantium aut laboriosam nesciunt et velit, magnam sequi at quaerat quam eius libero id impedit quae. Laborum cumque nostrum perspiciatis distinctio odio fugit facilis, inventore nobis non voluptates consequuntur, quos eos, modi voluptas voluptatem! Placeat nisi quos a sunt, praesentium doloremque impedit voluptatem excepturi, est repellendus laudantium ad dignissimos aspernatur error? Quis eum soluta provident expedita neque, officiis necessitatibus suscipit iure error eius quidem deleniti animi voluptatibus!</div>
          </div>
        </div>

        <div className="teams">
          
          <div className="teamContainer">
            
            <div className="right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, libero! Dolorum cupiditate ipsum soluta, nesciunt numquam recusandae animi ipsa porro saepe consectetur? Unde repellat autem odit vel obcaecati quibusdam perspiciatis quas animi expedita ut repellendus illo sapiente id praesentium ex facilis, voluptas ratione sequi harum, rerum, accusamus quidem aliquid. Veritatis doloribus consequuntur adipisci nostrum a veniam dicta cumque fuga debitis, quas voluptatibus aspernatur blanditiis? Placeat necessitatibus, nostrum voluptatibus expedita facilis, vero aspernatur autem sed harum quasi, delectus adipisci.      </div>
            <div className="left">
              <div className="chefPhoto">
             <img src={Food} className='chef' alt="" />
             </div>
             
            </div>
          </div>
        </div>
        <Footer/>
       </>
  )
}

export default About