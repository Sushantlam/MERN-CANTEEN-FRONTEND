import React, { useContext } from 'react'
import "./featurefood.css"
import useFetch from "../../hooks/useFetch"
import { AuthContext } from '../../context/Auth'
import { CartContext } from '../../context/Product'
import { useNavigate } from 'react-router-dom'

const Featurefood = () => {
  
  const {addToCart, cartData}= useContext(CartContext)
  const { email, error} = useContext(AuthContext)
  const navigate=useNavigate()
  const handleAdd=(item)=>{
    if(email){
      addToCart(item)

    }
    else{
      navigate("/login")
    }

  }
  


  const{data}= useFetch("/product?&limit=4")
  // console.log(data);
  return (
    <>
    <div className="maincontainer">

      <div className="subheading">
        <h3 className='specialOffer'>Today <span>special Offer </span></h3>


     
      <div className="fproperties">

{data?.map((data)=>(

<div className='flist' key={data._id}>
      <img src="https://images.trvl-media.com/hotels/23000000/22840000/22833400/22833387/dc044ec7_z.jpg" alt="" className='flistImage'/>
      <span className='heading'>{data?.title}</span>
      
      <div className='frating'>
      <button className='bttn'>{data?.rating}</button>
      <select className='bttn'> {Array.from(Array(6), (e,i)=>{
          return(
            <option key={i+1} className='bttn' value={i+1}>{i+1}</option>
          )
        })}</select>

        <select className='bttn'>
          <option className='bttn'>Half</option>
          <option className='bttn'>Full</option>
        </select>

        <span className='review'>Rs {data?.price}</span>
      </div>
      <button onClick={()=> handleAdd(data)}>Add to cart</button>
  

    </div>)) }
   
    
    </div>
    </div>
    
    </div> </> )
}

export default Featurefood