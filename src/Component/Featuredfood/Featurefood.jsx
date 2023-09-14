import React, { useContext, useEffect, useState } from 'react'
import "./featurefood.css"
import useFetch from "../../hooks/useFetch"
import { AuthContext } from '../../context/Auth'
import { CartContext } from '../../context/Product'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Food from "../../Photo/Food.jpg"

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
  


  const [Data, setData] = useState();
  
  const [lastPage, setLastPage] = useState();
  
  const [foodItems, setFoodItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch]= useState([])
 // Number of items per page


 
  
  // const nextPage = () => {
  //   if(lastPage<=currentPage){
  //    setCurrentPage(1)
  //   }else{
  //     setCurrentPage(currentPage + 1);
  //   }
   
  // };

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  



//its for the pagination
  const fetchData =async()=>{
    try {
      const response = await axios.get(`/product?page=${currentPage}&key=${search}`)
      console.log("response", response.data.data);
      setData(response.data.data)
      
      setLastPage(response.data.lastPage)

    } catch (error) {
      
    }
  }

  console.log(search);

  useEffect(() => {
    fetchData();
   
  }, []);


  // console.log(data);
  return (
    <>
<div className="featured">
    <div className="featuredFood">
    
        <div className="featureContent">
          <h3 className='eat'>Eat.</h3>
          <span className='breakfast'>Breakfast, Lunch and Artisanal Pastries</span>
          <span className='Para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores  corrupti! Dignissimos in excepturi laborum nisi voluptates vitae, totam laboriosam?</span>

        </div>
        <div className="imageFeatured">
<img className='featuredImage' src={Food} alt="" />
      
      </div>
    </div>
    </div>
   
    
       </> )
}

export default Featurefood