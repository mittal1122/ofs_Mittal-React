import axios from "axios";
import React, { useEffect, useState } from "react";

export const AddProduct = () => {
  const [categoryList, setcategoryList] = useState([]);
  const [subcategoryList, setsubcategoryList] = useState([]);
  const [brandList, setbrandList] = useState([]);
  const [category, setcategory] = useState(categoryList.categoryName);
  const [subcategory, setsubcategory] = useState(
    subcategoryList.subcategoryName
  );
  const [productName, setproductName] = useState("");
  const [baseprice, setbaseprice] = useState("");
  const [brand, setbrand] = useState(brandList.brandName);

  const getData = async () => {
    await axios.get("http://localhost:4001/categories").then((res) => {
      setcategoryList(res.data.data);
      console.log("c-a-t-----", res.data.data);
    });
  };

  const CategoryListOnChangeHandler = async (e) => {
    var catid = e.target.value;
    console.log("cat id:", e.target.value);
    setcategory(e.target.value)

    await axios.get(`http://localhost:4001/subcategoriesbycategory/${catid}`).then((res) => {
        setsubcategoryList(res.data.data);
        console.log("sub cat data ", res.data.data);
      });
  };
 
  const subcategoryOnHangeHandler = (e) =>{
    console.log('sub-cate',e.target.value);
    setsubcategory(e.target.value )
    

  } 

  const getbrand = async () => {
    axios.get("http://localhost:4001/brands").then((res) => {
      console.log("BRANd-----", res.data.data);
      setbrandList(res.data.data);
    });
  };

  const BrandOnChangeHandler = (e) => {
    console.log("brand", e.target.value);
    setbrand(e.target.value);
  };

  useEffect(() => {
    getData();
    CategoryListOnChangeHandler();
    getbrand();
  }, []);

  var Data = {
    productName: productName,
    baseprice: baseprice,
    category: category,
    subcategory: subcategory,
    brand: brand,
  };

  const submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/products", Data).then((res) => {
      console.log(res.status);
      console.log(res.data);
      alert("Product Added....");
    });
  };
  return (
    <div>
      <div className=" content-wrapper card-body">
        <form onSubmit={submit}>
          <div className=" form-group">
            <label>Product Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your Product Name "
              onChange={(e) => setproductName(e.target.value)}
            />
          </div>
          <div className=" form-group">
            <label>Base Price</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter  Product Base price "
              onChange={(e) => setbaseprice(e.target.value)}
            />
          </div>
          <div className=" form-group" data-select2-id="55">
            <label>Category</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              data-select2-id="9"
              tabindex="-1"
              aria-hidden="true"
              onChange={(e) => CategoryListOnChangeHandler(e)}
            >
              {categoryList.map((category) => {
                return (
                  <option
                    selected="selected"
                    value={category._id}
                    data-select2-id="3"
                  >
                    {category.categoryName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className=" form-group" data-select2-id="55">
            <label>Sub-Category</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              data-select2-id="9"
              tabindex="-1"
              aria-hidden="true"
              onChange={(e) => subcategoryOnHangeHandler(e)}
              >
              {subcategoryList.map((subcategory) => {
                return (
                  <option selected="selected" 
                  value={subcategory._id}
                  data-select2-id="3">
                    {subcategory.subcategoryName}
                    
                  </option>
                );
              })}
            </select>
          </div>
          <div className=" form-group" data-select2-id="55">
            <label>Brand</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              data-select2-id="9"
              tabindex="-1"
              aria-hidden="true"
              onChange={(e) => {
                BrandOnChangeHandler(e);
              }}
            >
              {" "}
              {brandList.map((brand) => {
                return <option selected="selected"
                value={brand._id}
                >{brand.brandName}</option>;
              })}
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
