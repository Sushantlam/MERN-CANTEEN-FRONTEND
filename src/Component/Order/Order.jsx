import React, { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../context/Order';
import axios from 'axios';
import { AuthContext } from '../../context/Auth';
import Navbar from '../Navbar/Navbar';
import './Order.css'
import { CartContext } from '../../context/Product';

const Order = () => {

  const { email, error } = useContext(AuthContext)
  console.log(email.email);
  const { cartData } = useContext(CartContext)



  const [orderData, setorderData] = useState([])

  const fetchMyOrder = async (e) => {

    try {
      const res = await axios.post("https://canteen-node-api.onrender.com/orderDemo/myOrderData", {
        email: email.email,

      })
      console.log("response data:", res.data);
      // console.log(res.data.eId.item);

      setorderData(res.data)
      // console.log("/order/myOrderData", orderData)


    } catch (error) {
      console.log("Error:", error);
      console.log("Response Data:", error.response.data);
    }

    console.log(orderData);
  }

  useEffect(() => {
    fetchMyOrder()
  }, [email.email])

  // let status = orderData?.eId?.item
  // console.log(status);
  // let totalPrice = orderData?.eId?.totalPrice
  // console.log(totalPrice);

  return (
    <div>

      <Navbar />
      <div className="containerOrder">
        <div className='order-container'>
          <div className='order-row'>

            {orderData.length !== 0 ? Array(orderData).map(data => {
              console.log('order-container', data);
              return (
                data ?
                  data.slice(0).reverse().map((items) => {
                    { console.log(items?.status); }

                    return (


                      items.item?.map((arrayData, index) => {
                        { console.log(arrayData?.totalPrice); }
                        return (
                          <div  >
                            {arrayData.orderDate ? <div className='m-auto mt-5' key={index}>

                             <h3> {data = arrayData.orderDate}</h3>
                              <hr />
                            </div> :

                              <div className='col-12 col-md-6 col-lg-3' >
                                <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                  {/* <img src={arrayData.photo} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                  <div className="card-body">
                                    {/* <span className='listItem'>{data}</span>     */}
                                    {arrayData.title ? <span className='m-1'>Food Name:   {arrayData.title}</span>: "" } 
                                   
                                    {arrayData?.quantity ? <span className='m-1'>Qty: {arrayData?.quantity} quantity</span>: "" } 
                                    {arrayData?.price ? <span className='m-1'>Per: Rs.{arrayData?.price} /-</span>: "" } 
                                    {items?.totalPrice ? <span className='m-1'>Total Price: {items.totalPrice }</span>: "" }  
                                    {items?.status ? <span className='m-1'>Status: {items.status }</span>: "" }  

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
      </div>

    </div>)
}

export default Order


