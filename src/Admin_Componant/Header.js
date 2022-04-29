import React, { Component } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './header.css'



export const Header = () => {
  const navigate = useNavigate();
  const logoutOnClick = (e) => {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    navigate(`/`);
  };
  
    return(
    <div>
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul style={{width:"100%" ,display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: "25px"}} className="navbar-nav">
    <div style={{display: "flex"}}>
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a to="/index.html" className="nav-link">Home</a>
    </li>
    </div>
    
    <li className="">    
      <button className="btn-danger" onClick={(e) => logoutOnClick(e)} >Logout</button>

    </li>
    
  </ul>
 
  
</nav>
{/* /.navbar */}

  
</div>
)
  
}
