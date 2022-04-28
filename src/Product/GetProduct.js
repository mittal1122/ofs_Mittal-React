import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const GetProduct = () => {
  const [productList, setproductList] = useState([]);

  const getData = async () => {
    await axios.get("http://localhost:4001/products").then((res) => {
      console.log(res.data.data);
      setproductList(res.data.data);  
    });
  };

  const DeleteData =(_id) =>{
    axios.delete(`http://localhost:4001/products/${_id}`).then((res)=>{
      alert(res.data);
      getData();
    })
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>

      <div className="content-wrapper card-body table-resposive ">
      <h1>This is Product List</h1> 
        <h3 className="row-1 d-inline-flex">Products</h3>
        <Link to="addproduct" className="btn btn-info float-right">
          Add Product
        </Link>
        <table className="table table-hover table-striped">
          <thead className="m-0 text-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Base Price </th>
              <th scope="col">Category</th>
              <th scope="col">Sub-Category</th>
              <th scope="col">Brand</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => {
              return (
                <tr>
                  <th scope="row">{product._id}</th>
                  <td>{product.productName}</td>
                  <td>{product.baseprice}</td>
                  <td>{product.category.categoryName}</td>      
                  <td>{product.subcategory.subcategoryName}</td>
                  <td>{product.brand.brandName}</td>
                  <td><button onClick={() => DeleteData(product._id)} className='btn btn-danger'>DELETE</button>
                  <Link to={`updateproduct/${product._id}`} className="btn btn-primary">UPDATE</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 