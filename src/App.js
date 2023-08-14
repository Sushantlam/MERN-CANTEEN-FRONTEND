import React from 'react'
import "./App.css"
import {
  BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";

import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Menu from './Pages/Singlepage/Menu';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Order from './Component/Order/Order';

const App = () => {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/order' element={<Order/>}/>
       

        
    
      </Routes>
    </Router></>
  )
}

export default App