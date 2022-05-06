import React from "react";
import { Link } from "react-router-dom";

export const Vendor_Menu= () =>{
  let firstName = localStorage.getItem("firstName")
  console.log(firstName);
  
    return (
      <div>
        {/* Main Sidebar Container */}
        <aside style={{display: "flex", flexDirection:"column"}} className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">OFS</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              
              <div className="info">
              <Link to='jfncjhd' style={{fontSize:20}} className="">{firstName}</Link>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <Link to="" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                </li>
                <li className="nav-header">Show Data</li>

                <li className="nav-item has-treeview">
                  <Link to="productlist" className="nav-link">
                    <i className="nav-icon far fa-envelope" />
                    <p>
                      PRODUCT
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="categorylist" className="nav-link">
                    <i className="nav-icon far fa-envelope" />
                    <p>
                      CATEGORY
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="getsubcategory" className="nav-link">
                    <i className="nav-icon far fa-envelope" />
                    <p>
                      SUB - CATEGORY
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="getbrand" className="nav-link">
                    <i className="nav-icon far fa-envelope" />
                    <p>
                      BRAND
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="getvendorproduct" className="nav-link">
                    <i className="nav-icon far fa-envelope" />
                    <p>
                      VENDOR PRODUCT
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="vendorrequest" class="nav-link active">
                    <i class=" fas "></i>
                    <p>
                      Customization Req.
                      <span class="right badge badge-danger">New</span>
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
    );

}
