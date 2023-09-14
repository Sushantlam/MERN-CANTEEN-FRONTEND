import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import "./Singlepage.css"
import Footer from '../../Component/Footer/Footer'
import Menuleft from '../../Component/MenuSection/Menuleft'
import MenuRight from '../../Component/MenuSection/MenuRight'
import useFetch from "../../hooks/useFetch"




const Menu = () => {
 
  return (
    <> <Navbar />
    <h3 className='menuhead' style={{ textAlign: 'center'  }}></h3>
    <div className="list">
         
            <MenuRight/>
          </div>
         
         
     
    
    
    </>
  )
}

export default Menu