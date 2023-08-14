import React, { useContext } from 'react'
import "./MenuRight.css"
import useFetch from "../../hooks/useFetch"
import { CartContext } from '../../context/Product'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Auth'
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"





const MenuRight = ({item}) => {
  const{data, loading, error}= useFetch("/product")
  
  const {addToCart, cartData}= useContext(CartContext)
  const {email}= useContext(AuthContext)

  const navigate = useNavigate()
  
  const handleAdd=(item)=>{
    if(email){
      addToCart(item)

    }
    else{
      navigate("/login")
    }

  }
  
  return (
    <>
    <div className="maincontainer">

<div className="subheading">
 

<div className="fproperties">


{loading? "loading" : 
<> {data?.map((e)=>(<div className='flist' >
<img src="https://images.trvl-media.com/hotels/23000000/22840000/22833400/22833387/dc044ec7_z.jpg" alt="" className='flistImage'/>
<span className='heading'>{e.title}</span>
<div className="itemFlex"><button className='bttn'>{e.rating}</button>
  <span className='word'>Excellent</span> 
  <span className='reviews'>532 reviews</span>
  </div>
  <div className='frating'>



 

  <div className="bttn">
                    <button className="handleButton"  ><FaMinus   className="img" style={{ color: "gray" }} size={10} /></button>
                    <div className="input">{e.quantity}</div>
                    <button className="handleButton"  ><FaPlus  className="img" style={{ color: "gray" }} size={10} /></button>
                  </div>

  
</div>
<button onClick={()=> handleAdd(e)}>Add to cart</button>
</div>))}</>}

</div>
</div>

</div>
    </>
  )
}

export default MenuRight