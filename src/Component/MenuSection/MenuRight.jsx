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
  const { data, loading, error, reFetchData } = useFetch("/product")

  const { addToCart, cartData } = useContext(CartContext)
  const { email } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleAdd = (item) => {
    console.log("/product",item);
    // console.log(`${item.title} added successfully!`, item);
    if (email) {
      addToCart(item)
      setTimeout(() => {
        toast(`${item.title} added successfully!`);
      }, 1000)
    }
    else {
      navigate("/login")
    }

  }

  // const {  reFetchData} = useFetch("/product");
  // console.log("product", initialData);
  const [Data, setData] = useState();
  // const [error, setError] = useState([]);
  const [lastPage, setLastPage] = useState(0);


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
      fetchData()
      }
    else {
      setCurrentPage(lastPage);
    }
   
  };
  
//its for the pagination
  const fetchData = async () => {
    try {
      const response = await axios.get(`/product?page=${currentPage}&key=${key}`)
      // console.log("response", response.data.data);
      setData(response.data.data)
     setLastPage(response.data.lastPage)

    } catch (error) {

    }
  }

  // console.log(search);

useEffect(() => {
    fetchData();
 }, [currentPage,lastPage,key]);



  return (
    <>
      <div className="maincontainer">


        <div className="subheading">
          <div className='searchFilter'>
            <div className="sFilter">
            <input type="text" className='searchInput' onChange={(e) => setKey(e.target.value)} value={key} placeholder='Search...' />
            <BiSearchAlt2 className='searchIcon'/>
            </div>
          </div>
   <div className="fproperties">
  {loading ? "loading" :
              <> {Data?.map((e) => (<div className='flist' key={e._id}>
                {/* {console.log('heading',e.photo)} */}
                <img src={"http://localhost:8800/images/"+e.photo} alt="" className='flistImage' />
                <span className='heading'>{e.title}</span>
                <div className="itemFlex">
                  <button className='bttn'>{e.rating}</button>
                  <span className='word'>Excellent</span>

                </div>
   <div className="heading">
                  {e.category} Veg and Non-Veg     
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