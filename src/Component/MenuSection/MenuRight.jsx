import React, { useContext, useEffect, useState } from 'react'
import "./MenuRight.css"
import useFetch from "../../hooks/useFetch"
import { CartContext } from '../../context/Product'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Auth'
import { BiSearchAlt2 } from "react-icons/bi"
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer'




const MenuRight = ({ item }) => {
  const api = "https://canteen-node-api.onrender.com/product"
  const { data, loading, error, reFetchData } = useFetch(api)

  const { addToCart, cartData } = useContext(CartContext)
  const { email } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleAdd = (item) => {
    console.log("/product",item);
    // console.log(`${item.title} added successfully!`, item);
   
      addToCart(item)
      setTimeout(() => {
        toast(`${item.title} added successfully!`);
      }, 1000)
   

  }

  // const {  reFetchData} = useFetch("/product");
  // console.log("product", initialData);
  const [Data, setData] = useState();
  // const [error, setError] = useState([]);
  const [lastPage, setLastPage] = useState(0);
const [category, setCatgeory]= useState("")

  const [currentPage, setCurrentPage] = useState(1);
  const [key, setKey] = useState([])
  // Number of items per page




  const nextPage = () => {
    if (currentPage >=lastPage) {
      setCurrentPage(lastPage);
     
     
    } else {
      setCurrentPage(currentPage + 1);
     
    }
};
 

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
     
      // fetchData()
      }
    else {
      setCurrentPage(lastPage);
    }
   
  };
  console.log(currentPage);
  
//its for the pagination
  const fetchData = async () => {
    try {
      console.log("current",currentPage);
      console.log("category",category);
      const filteredapi=`https://canteen-node-api.onrender.com/product?page=${currentPage}&key=${key}&category=${category}`
      const response = await axios.get(filteredapi)
     console.log("response", response.data.data);
      setData(response.data.data)
     setLastPage(response.data.lastPage)

    } catch (error) {

    }
  }

  

  // console.log(search);

useEffect(() => {
    fetchData();
 }, [currentPage,lastPage,key, category]);

// console.log(Data);

  return (
    <>
      <div className="maincontainer">


        <div className="subheading">
          <div className='searchFilter'>
          <div className='categoryFilter'>
  <select value={category} className='optionFilter' onChange={(e)=>setCatgeory(e.target.value)}>
    <option value="" >All Categories</option>
    <option value="Veg">Veg</option>
    <option value="Non-veg">Non-veg</option>
    
  </select>
</div>
            <div className="sFilter">
            <input type="text" className='searchInput' onChange={(e) => setKey(e.target.value)} value={key} placeholder='Search...' />
            <BiSearchAlt2 className='searchIcon'/>
            </div>
          </div>
   <div className="fproperties">
  {loading ? "loading" :
              <> {Data?.map((e) => (<div className='flist' key={e._id}>
                {/* {console.log('heading',e.photo)} */}
                
                <img src={"https://canteen-node-api.onrender.com/images/"+e.photo} alt="" className='flistImage' />
               
                
                <span className='heading'>{e.title}</span>
                
                <div className="itemFlex">
                  <button className='bttn'>Rs {e.price}</button>
                  <span className='word'>Time: {e.time}min</span>
                 
                </div>
   <div className="heading">
               Category:   {e.category}   
                      </div>
 <button onClick={() => handleAdd(e)} className='addToCart'>Add to cart</button>
              </div>))}</>}
  </div>
  
 <div className='pagination'> <button onClick={prevPage} className='paginationButton' >
            Previous Page
          </button>
            {currentPage} page {lastPage}

            <button onClick={nextPage}  className='paginationButton' >Next Page</button></div>
        </div>

        <ToastContainer />

        

      </div>
      <Footer/>


    </>
  )
}

export default MenuRight