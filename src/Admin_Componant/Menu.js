import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Menu =() => {
  
  
  let firstName = localStorage.getItem("firstName")
  

  console.log(firstName);


  return (
<div>
  {/* Main Sidebar Container */}
  <aside style={{display: "flex", flexDirection:"column"}} className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">OFS</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="info">
          <Link to='jfncjhd' style={{fontSize:30}} className="">{firstName}</Link>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <Link to="dashbord2" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
          </li>   
          <li class="nav-item">
            <Link to="getrole" class="nav-link active">
              <i class="nav-icon fas fa-th"></i>
              <p>
                ROLE
              </p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="vendorrequest" class="nav-link active">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Vendor Requests
                <span class="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
          

          <li className="nav-header">ADD DATA</li>
          
          <li className="nav-item has-treeview">
            <Link to="" className="nav-link">
              <i className="nav-icon far fa-envelope" />
              <p>
                Role
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="user" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>User</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="getvendor" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Vendor</p>
                </Link>
              </li>
              
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="" className="nav-link">
              <i className="nav-icon far fa-envelope" />
              <p>
                ADD
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
              <Link to="addvendor" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Vendor</p>
                </Link>
              </li>  
              <li className="nav-item">
              <Link to="addproduct" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Product</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="addcategories" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Category</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="addsubcategory" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Sub-Category</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="addbrand" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Brand</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="addcity" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>City</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="addvendor" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>State</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="addorder" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Order</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="addvendor" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Offer</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <Link to="getorder" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                Order List
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            
          </li>
          <li className="nav-item has-treeview">
            <Link to="productlist" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                Product List
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            
          </li>
          <li className="nav-item has-treeview">
            <Link to="categorylist" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                Category List
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            
          </li>
          <li className="nav-item has-treeview">
            <Link to="getsubcategory" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                Sub-Category List
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            
          </li>
          <li className="nav-item has-treeview">
            <Link to="getbrand" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                Brand List
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            
          </li>
          <li className="nav-item has-treeview">
            <Link to="getcity" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                City List
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            
          </li>
          
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

    )
  
}
