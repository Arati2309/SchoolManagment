import React from "react";
//import { BrowserRouter, Link } from "react-router-dom";
import "./Navbar.css"; // You can skip this if you use inline styles
import Home from "./Home";
import HomeWork from "./HomeWork";
//import Profile from "./Profile";
//import Logout from "./Logout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DoubtSolving from "./DoubtSolving";
//import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  
  
  return (
  <>
    <BrowserRouter>
    
      <nav className="nav">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <h3>Student Name</h3>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <a href='/' className="nav-link">Home</a>
            <a href='' className="nav-link">My  Profile</a>
            <a href='' className="nav-link">Logout</a>
          </div>
        </div>
      </nav>
  


    {/* <nav className="navbar">
      
      <div className="navbar-title">Student Name</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li>My Profile</li>
        <li><button className="logout-button">Logout</button></li>
      </ul>
    </nav> */}
    <Routes>
  
   <Route path="/" element={<Home/>}></Route> 
   <Route path="/homework" element={<HomeWork/>}></Route>
  <Route path="/queries" element={<DoubtSolving/>}></Route>
    {/* <Route path="/auth2" element={<Home/>}></Route>   */}

   </Routes>
    </BrowserRouter>
     </>
  );
};

export default Navbar;