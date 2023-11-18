import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/Product'
import "./Cart.css"
import { BsPlus } from "react-icons/bs"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { AuthContext } from '../../context/Auth';
import axios from 'axios';
import { OrderContext } from '../../context/Order';
import Navbar from '../../Component/Navbar/Navbar';
import { loadStripe } from '@stripe/stripe-js';
import Footer from '../../Component/Footer/Footer'



const Cart = () => {
  const { cartData, incrementQuantity, decrementQuantity, dispatch: cartDispatch, totalPrice, totalProduct, removeFromCart } = useContext(CartContext)
  const { email, error } = useContext(AuthContext)
  // console.log('pending',email);

  const { orderData, dispatch } = useContext(OrderContext)
  // console.log(dispatch);
  const navigate = useNavigate()
  // console.log(cartData);



  console.log("cartData", cartData)


  // console.log(cartData[1].quantity);

  const handleOrder = async (e) => {
    e.preventDefault()
    // const payload = {
    //   return_url: "https://localhost:3000",
    //   website_url: "https://localhost:3000",
    //   amount: parseInt(totalPrice) * 100,
    //   purchase_order_id: "test12",
    //   purchase_order_name: "test",
    //   customer_info: {
    //     name: "Ashim Upadhaya",
    //     email: "example@gmail.com",
    //     phone: "9811496763",
    //   },
    // };

    // const response = await axios.post("http://localhost:8800/khalti-api", payload);
    // console.log(response);
    //  if (response) {
    //    window.location.href = `${response?.data?.data?.payment_url}`;
    //  }
    if (email) {
      dispatch({ type: "Order_Start" })
      try {
        const res = await axios.post("/orderDemo", {
          email: email.email,
          userName: email.userName,
          item: cartData,
          status: 'pending',
          totalPrice: totalPrice,
          orderDate: new Date().toDateString()
        })
        //  console.log(res);
        dispatch({ type: "Order_Sucess", payload: res.data })
        cartDispatch({ type: "PLACE_ORDER" })
        toast('Your order placed successfully!');
        // console.log("after the order",cartData);
        setTimeout(() => {

          navigate("/order")
        }, 3000)

      } catch (error) {
        dispatch({ type: "order_Fail", payload: error })
        // console.log(error);
      }
    }
    else {
      navigate("/login")
    }
    
      }
    
  

  const handleRemove = (e) => {
    cartDispatch({ type: "RemoveItem" })

  }
  useEffect(() => {

  }, [cartData])

  return (

    <div>
      <Navbar />
      <div className="MainCart">

        {cartData && cartData.length === 0 ? (<div className='cart'><h1 >You havent added anything</h1></div>) :
          <div className="table">


<div className='cartData'>

            {cartData?.map((e) => (
              <div className="cartContent">


              <div className="input">
                <img src={"https://canteen-node-api.onrender.com/images/" + e.photo} className='cartImage' alt="" />
              </div>


              <div className="eTitle"> {e.title}</div>

              <button className="handleButton"  >
                <FaMinus disabled={e.quantity === 1} onClick={() => decrementQuantity(e)} size={10} />
              </button>


              <div className="quantity">{e.quantity}</div>


              <button className="handleButton"  >
                <FaPlus className="img" style={{ color: "gray" }} onClick={() => incrementQuantity(e)} size={10} />
              </button>
              <div className="perPrice">{e.price}</div>
              <div>
                <button className="handleButton"  >
                  <FaTrash className="img" style={{ color: "gray" }} size={14} onClick={() => removeFromCart(e)} />
                </button>
              </div>
             

              <div className="total">

              </div></div>))} </div>
              <div className='rightContent'>
            <div className='price'>
              <h2>Summary of cart</h2>
               <h3> Total Products: {totalProduct}</h3>
              <h2>Total Price: Rs{totalPrice}</h2>
             
              <button onClick={handleOrder} className='orderNowBtnn'>Order now</button></div>
          </div></div>}

      </div>
      <ToastContainer />
      <Footer/>
    </div>

  )
}

export default Cart