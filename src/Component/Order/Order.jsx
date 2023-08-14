import React, { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../context/Order';
import axios from 'axios';
import { AuthContext } from '../../context/Auth';
import Navbar from '../Navbar/Navbar';

const Order = () => {

  const { email, error} = useContext(AuthContext)
console.log(email);
  //   const {orderData, dispatch}= useContext(OrderContext)
  //   console.log("PLACE_ORDER", orderData.item)
  //   // const orderValues = Object.values(orderData.order).flat();
  //   // console.log("PLACE_ORDER", orderValues);
  // return (
  //    <div>{orderData.item && orderData.item.length===0 ? (<h1>You havent added anything</h1>):
  //    (<div>
  //       {orderData.item.map((item, index) => (
  //         <div>
  //       {item && item.map((e) => (<div key={index}>
  //          <h3>{e.product}</h3>
  //          <p>Quantity: {e.quantity}</p>
  //          <p>Price: {e.price}</p>+
  //        </div>))}
  //        </div>
  //      ))}
  //         </div>) }</div>
  //   // <div>Hello
  //   //   {orderData.items.map((e)=>(<div>{e.product}</div>))}
  //   // </div>

  // )

  const [orderData, setorderData] = useState({})

  const fetchMyOrder = async (e) => {
      // console.log(localStorage.getItem('email'))
      // await fetch("http://localhost:5000/api/auth/myOrderData", {
      //     // credentials: 'include',
      //     // Origin:"http://localhost:3000/login",
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body:JSON.stringify({
      //         email:localStorage.getItem('userEmail')
      //     })
      // }).then(async (res) => {
      //     let response = await res.json()
      //     await setorderData(response)
      // })
    
      // console.log("cartData", cartData, email.userName
      try {
        const res = await axios.post("/order/myOrderData", {
          email: email.email,
        })
        console.log(res);
      
        setorderData(res.data)
       
        
      } catch (error) {
       
      }

      console.log(orderData);
      // await res.map((data)=>{
      //    console.log(data)
      // })


  }

  useEffect(() => {
      fetchMyOrder()
  }, [])

  let status = orderData?.orderItems?.status

  return (
      <div>
         
         <Navbar/>
          <div className='container'>
              <div className='row'>

                  {orderData.length !== 0 ? Array(orderData).map(data => {
                      return (
                          data.orderItems ?
                              data.orderItems.item.slice(0).reverse().map((items) => {
                                  return (
                                      items.map((arrayData) => {
                                          return (
                                              <div  >
                                                  {arrayData.orderDate ? <div className='m-auto mt-5'>

                                                      {data = arrayData.orderDate}
                                                      <hr />
                                                  </div> :

                                                      <div className='col-12 col-md-6 col-lg-3' >
                                                          <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                              {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                                              <div className="card-body">
                                                                  <h5 className="card-title">{arrayData.title}</h5>
                                                                  <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                      <span className='m-1'>{arrayData.quantity}</span>
                                                                      
                                                                      <span className='m-1'>{data}</span>
                                                                      <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                          {/* ₹{arrayData.price}/- */}{status}
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>

                                                      </div>



                                                  }

                                              </div>
                                          )
                                      })

                                  )
                              }) : ""
                      )
                  }) : ""}
              </div>


          </div>

         
      </div>)
}

export default Order