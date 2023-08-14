import React, { useContext } from 'react'
import { CartContext } from '../../context/Product'

import { BsPlus } from "react-icons/bs"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { AuthContext } from '../../context/Auth';
import axios from 'axios';
import { OrderContext } from '../../context/Order';



const Cart = () => {
  const { cartData, incrementQuantity, decrementQuantity, dispatch: cartDispatch  } = useContext(CartContext)
  const { email, error} = useContext(AuthContext)
  
  const { orderData, dispatch } = useContext(OrderContext)
  // console.log(dispatch);
  const navigate = useNavigate()
  // console.log(cartData);
  





  // console.log(cartData[1].quantity);

  const handleOrder = async (e) => {
    e.preventDefault()
    // console.log("cartData", cartData, email.userName)
    dispatch({type:"Order_Start"})
    try {
      const res = await axios.post("/order", {
        email: email.email,
       item: cartData,
      status: 'pending',
      orderDate: new Date().toDateString()
      })
    //  console.log(res);
      dispatch({type:"Order_Sucess", payload: res.data })
      cartDispatch({ type: "PLACE_ORDER"})
      // console.log("after the order",cartData);

        navigate("/order")
    } catch (error) {
      dispatch({ type: "order_Fail", payload: error })
      // console.log(error);
    }
  }
  return (
    <div>
      {cartData && cartData.length === 0 ? (<h1>You havent added anything</h1>) :
        <div>
          {cartData?.map((e) => (<div><div className="handle">
            <button className="handleButton"  >
              <FaMinus disabled={e.quantity === 1} onClick={() => decrementQuantity(e)} size={10} />
            </button>
            <div className="input">{e.title}</div>
            <div className="input">{e.price}</div>
            <div className="input">{e.quantity}</div>

            <button className="handleButton"  >
              <FaPlus className="img" style={{ color: "gray" }} onClick={() => incrementQuantity(e)} size={10} />
            </button>
          </div>


            <div className="total">
              <FaTrash className="img" style={{ color: "gray" }} size={14} />
            </div></div>))} <button onClick={handleOrder}>Order now</button></div>}</div>
  )
}

export default Cart