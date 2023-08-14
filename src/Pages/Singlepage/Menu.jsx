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
    <h3 className='menuhead'>Menu list</h3>
    <div className="list">
          <div className="list-item">
          <div className="seacrh-list-items">
           
          <div className="search">
                <h3>Search</h3>
                <div className="ls-search">
                    <label htmlFor="">Destination/property name:</label>
                    <input type="text"  placeholder="Filter by city" />


                </div>
              
                <div className="ls-search">
                    <h4>Options</h4>
                    <div className="options">
                        <span>Min price <small>per night</small></span>
                        <input type="number" />
                    </div>
                    <div className="options">
                        <span>Max price <small>per night</small></span>
                        <input type="number"  />
                    </div>
                    <div className="options">
                        <span>Adult</span>
                        <input type="number" />
                    </div>
                    <div className="options">
                        <span>Children</span>
                        <input type="number"/>
                    </div>
                    <div className="options">
                        <span>Rooms</span>
                        <input type="number" />
                    </div>
                </div>
                <div className="searchbtn">
                    <button className='searchBtn'>Search</button>
                </div>
          
            </div>
          </div>
          <div className="hotel">
            <MenuRight/>
          </div>
          </div>
         
          </div>
    
    
    </>
  )
}

export default Menu