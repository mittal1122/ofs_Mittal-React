import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const GetProduct = () => {
  const [productList, setproductList] = useState([]);

let userId =localStorage.getItem('userId')


  const getData = async () => {
    await axios.get("http://localhost:4001/products").then((res) => {
      console.log("products",res.data.data);
      setproductList(res.data.data);  

    });
   
  };

  const addToCartChangeHandler =(vendorproduct) =>{
    var Data = {
      qty:1,
        user:userId,
        vendorproduct:vendorproduct,
        offer:null
    };
    axios.post("http://localhost:4001/carts",Data).then((res) => {
      console.log("ADD TO CART-----", res.data.data);
      alert('Product Added Successfully')
  })
}

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>

      {/*new-arrivals start */}
  <section id="new-arrivals" className="new-arrivals">
    <div className="container">
      <div className="new-arrivals-content">
        <div className="row">
          {productList.map((product) =>{
              return(
          <div className="col-md-3 col-sm-4">
            <div className="single-new-arrival">
              <div className="single-new-arrival-bg">

                   <img className="customer_img" src={product.vendorproductimg.ImgUrl} alt="new-arrivals images" /> 
                  
                <div className="single-new-arrival-bg-overlay" />
                <div className="sale bg-1">
                  <p className="customer_p">sale</p>
                </div>
                <div className="new-arrival-cart">
                  <p className="customer_p">
                    <span className="lnr lnr-cart" />
                    <button className="customer_btn btn btn-warning" onClick={(e) => addToCartChangeHandler(product.vendorproductimg.vendorproductId)}>Add <span>to </span> cart</button>
                  </p>
                  <p  className="customer_p arrival-review pull-right">
                    <span className="lnr lnr-heart" />
                    <span className="lnr lnr-frame-expand" />
                  </p>
                </div>
              </div>
              <h4 className="customer_h4"><a href="#">{product.productName}</a></h4>
              <p  className="customer_p arrival-product-price">{product.baseprice}</p>
             <p className="customer_p"> <b>{product.category.categoryName}</b></p>
             <p className="customer_p">{product.subcategory.subcategoryName}</p>

            </div>
          </div>
         )
        })}
        </div>
      </div>
    </div>{/*/.container*/}
  </section>{/*/.new-arrivals*/}
  {/*new-arrivals end */}
    </div>
  );
};
 