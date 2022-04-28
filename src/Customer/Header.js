import axios from "axios";
import React, { useEffect, useState } from "react";
import './headerCss.css'

export const Header = () => {
  const [cartList, setcartList] = useState([]);

  const getCartData = async () => {
    await axios.get("http://localhost:4001/carts").then((res) => {
      console.log(res.data.data);
      setcartList(res.data.data);
    });
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div>
      {/*welcome-hero start */}
      <header id="home" className="welcome-hero">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {/*/.carousel-indicator */}
          <ol className="carousel-indicators">
            <li className="customer_li"
              data-target="#header-carousel"
              data-slide-to={0}
              className="active"
            >
              <span className="small-circle" />
            </li>
            <li className="customer_li" data-target="#header-carousel" data-slide-to={1}>
              <span className="small-circle" />
            </li>
            <li className="customer_li" data-target="#header-carousel" data-slide-to={2}>
              <span className="small-circle" />
            </li>
          </ol>
          {/* /ol*/}
          {/*/.carousel-indicator */}
          
        </div>
        {/*/#header-carousel*/}
        {/* top-area Start */}
        <div className="top-area">
          <div className="header-area">
            {/* Start Navigation */}
            <nav
              className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
              data-minus-value-desktop={70}
              data-minus-value-mobile={55}
              data-speed={1000}
            >
              {/* Start Top Search */}
              <div className="top-search">
                <div className="container">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <span className="input-group-addon close-search">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                </div>
              </div>
              {/* End Top Search */}
              <div style={{display: "inline"}} className="container  my_container">
                {/* Start Atribute Navigation */}
                <div style={{order: 3}} className="attr-nav">
                  <ul className="customer_ul">
                    <li className="customer_li" className="search">
                      <a href="#">
                        <span className="lnr lnr-magnifier" />
                      </a>
                    </li>
                    {/*/.search*/}
                    <li className="customer_li" className="nav-setting">
                      <a href="#">
                        <span className="lnr lnr-cog" />
                      </a>
                    </li>
                    {/*/.search*/}
                    <li className="customer_li" className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="lnr lnr-cart" />
                        <span className="badge badge-bg-1">{"hum"}</span>
                      </a>
                     
                          <ul className="customer_ul" className="dropdown-menu cart-list s-cate">
                          {cartList.map((cart) => {
                        return (
                            <li className="customer_li" className="single-cart-list">
                              <a href="#" className="photo">
                                <img className="customer_img"
                                  src="assets/images/collection/arrivals1.png"
                                  className="cart-thumb"
                                  alt="image"
                                />
                              </a>
                              <div className="cart-list-txt">
                                <h6 className="customer_h4">
                                  <a href="#">
                                    arm <br /> chair
                                  </a>
                                </h6>
                                <p className="customer_p" >
                                  1 x - <span className="price">$180.00</span>
                                </p>
                              </div>
                              {/*/.cart-list-txt*/}
                              <div className="cart-close">
                                <span className="lnr lnr-cross" />
                              </div>
                              {/*/.cart-close*/}
                            </li>
                            );
                      })}
                            <li className="customer_li" className="total">
                              <span>Total: $0.00</span>
                              <button
                                className="btn-cart customer_btn pull-right"
                                onclick="window.location.href='#'"
                              >
                                view cart
                              </button>
                            </li>
                          </ul>
                        
                    </li>
                    {/*/.dropdown*/}
                  </ul>
                </div>
                {/*/.attr-nav*/}
                {/* End Atribute Navigation */}
                {/* Start Header Navigation */}
                <div style={{order: 1}} className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <a  className="navbar-brand" href="index.html">
                    A-one<span>ofs</span>.
                  </a>
                </div>
                {/*/.navbar-header*/}
                {/* End Header Navigation */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                style={{order: 2}}
                  className="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul className="customer_ul"
                  
                    className="nav my-navbar navbar-nav navbar-center"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li className="customer_li" className=" scroll active">
                      <a href="#home">home</a>
                    </li>
                    <li className="customer_li" className="scroll">
                      <a href="#new-arrivals">new arrival</a>
                    </li>
                      <li className="customer_li" className="scroll">
                      <a href="#category">Categories</a>
                    </li>
                    <li className="customer_li" className="scroll">
                      <a href="#feature">features</a>
                    </li>
                    <li className="customer_li" className="scroll">
                      <a href="#newsletter">contact</a>
                    </li>
                    <li className="customer_li" className="scroll">
                      <a href="#newsletter">Login</a>
                    </li>
                  </ul>
                  {/*/.nav */}
                </div>
                {/* /.navbar-collapse */}
              </div>
              {/*/.container*/}
            </nav>
            {/*/nav*/}
            {/* End Navigation */}
          </div>
          {/*/.header-area*/}
          <div className="clearfix" />
        </div>
        {/* /.top-area*/}
        {/* top-area End */}
      </header>
      {/*/.welcome-hero*/}
      {/*welcome-hero end */}
    </div>
  );
};
