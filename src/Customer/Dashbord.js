import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetProduct } from "../Cust_Product/GetProduct";

export const Dashbord  =() =>{

  const [categoryList, setcategoryList] = useState([])
  const [isCustomer,setIsCustomer] = useState(false);


  const getData = async () => {
    await axios.get("http://localhost:4001/categories").then((res) => {
      console.log(res.data.data);
      setcategoryList(res.data.data);  
    });
   
  };

  useEffect(() => {
    let roleName = localStorage.getItem("roleName")
    if(roleName === 'Customer')
      setIsCustomer(true);
    else 
      setIsCustomer(false);
  }, [])

  useEffect(() => {
    getData();
  }, []);
  
  
    return (
<div>{/*populer-products start */} 
 
  <GetProduct/>
  {/* clients strat */}
  <section id="clients" className="clients">
    <div className="container">
      <div className="owl-carousel owl-theme" id="client">
        <div className="item">
          <a href="#">
            <img className="customer_img" src="assets/images/clients/c1.png" alt="brand-image" />
          </a>
        </div>{/*/.item*/}
        <div className="item">
          <a href="#">
            <img className="customer_img" src="assets/images/clients/c2.png" alt="brand-image" />
          </a>
        </div>{/*/.item*/}
        <div className="item">
          <a href="#">
            <img className="customer_img" src="assets/images/clients/c3.png" alt="brand-image" />
          </a>
        </div>{/*/.item*/}
        <div className="item">
          <a href="#">
            <img className="customer_img" src="assets/images/clients/c4.png" alt="brand-image" />
          </a>
        </div>{/*/.item*/}
        <div className="item">
          <a href="#">
            <img className="customer_img" src="assets/images/clients/c5.png" alt="brand-image" />
          </a>
        </div>{/*/.item*/}
      </div>{/*/.owl-carousel*/}
    </div>{/*/.container*/}
  </section>{/*/.clients*/}	
  {/* clients end */}
  {/*newsletter strat */}
  <section id="newsletter" className="newsletter">
    <div className="container">
      <div className="hm-footer-details">
        <div className="row">
          <div className=" col-md-3 col-sm-6 col-xs-12">
            <div className="hm-footer-widget">
              <div className="hm-foot-title">
                <h4 className="customer_h4">information</h4>
              </div>{/*/.hm-foot-title*/}
              <div className="hm-foot-menu">
                <ul className="customer_ul" >
                  <li className="customer_li" ><a href="#">about us</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">contact us</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">news</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">store</a></li>{/*/li*/}
                </ul>{/*/ul*/}
              </div>{/*/.hm-foot-menu*/}
            </div>{/*/.hm-footer-widget*/}
          </div>{/*/.col*/}
          <div className=" col-md-3 col-sm-6 col-xs-12">
            <div className="hm-footer-widget">
              <div className="hm-foot-title">
                <h4 className="customer_h4">collections</h4>
              </div>{/*/.hm-foot-title*/}
              <div className="hm-foot-menu">
                <ul className="customer_ul" >
                  <li className="customer_li" ><a href="#">wooden chair</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">royal cloth sofa</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">accent chair</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">bed</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">hanging lamp</a></li>{/*/li*/}
                </ul>{/*/ul*/}
              </div>{/*/.hm-foot-menu*/}
            </div>{/*/.hm-footer-widget*/}
          </div>{/*/.col*/}
          <div className=" col-md-3 col-sm-6 col-xs-12">
            <div className="hm-footer-widget">
              <div className="hm-foot-title">
                <h4 className="customer_h4">my accounts</h4>
              </div>{/*/.hm-foot-title*/}
              <div className="hm-foot-menu">
                <ul className="customer_ul" >
                  <li className="customer_li" ><a href="#">my account</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">wishlist</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">Community</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">order history</a></li>{/*/li*/}
                  <li className="customer_li" ><a href="#">my cart</a></li>{/*/li*/}
                </ul>{/*/ul*/}
              </div>{/*/.hm-foot-menu*/}
            </div>{/*/.hm-footer-widget*/}
          </div>{/*/.col*/}
          <div className=" col-md-3 col-sm-6  col-xs-12">
            <div className="hm-footer-widget">
              <div className="hm-foot-title">
                <h4 className="customer_h4">newsletter</h4>
              </div>
              <div className="hm-foot-para">
                <p className="customer_p">
                  Subscribe  to get latest news,update and information.
                </p>
              </div>
              <div className="hm-foot-email">
                <div className="foot-email-box">
                  <input type="text" className="form-control" placeholder="Enter Email Here...." />
                </div>
                <div className="foot-email-subscribe">
                  <span><i className="fa fa-location-arrow" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>{/*/.row*/}
      </div>{/*/.hm-footer-details*/}
    </div>{/*/.container*/}
  </section>{/*/newsletter*/}	
  {/*newsletter end */}</div>

    )
}

