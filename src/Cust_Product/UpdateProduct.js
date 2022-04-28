import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UpdateProduct = () => {
  var id = useParams().productId;
  console.log("Id--", id);

  const [data, setData] = useState("");
  const [categoryList, setcategoryList] = useState([]);
  const [subcategoryList, setsubcategoryList] = useState([]);
  const [brandList, setbrandList] = useState([]);
  const [productName, setproductName] = useState(data.productName);
  const [baseprice, setBaseprice] = useState(data.baseprice);
  const [category, setCategory] = useState(data.category);
  const [subcategory, setSubcategory] = useState(data.subcategory);
  const [brand, setbrand] = useState(data.brand);

  const getData = () => {
    axios.get(`http://localhost:4001/products/${id}`).then((res) => {
      setData(res.data.data);
      console.log("--", res.data.data);
    });

    axios.get(`http://localhost:4001/categories`).then((res) => {
      setcategoryList(res.data.data);
      console.log("--", res.data.data);
    });

    

    axios.get(`http://localhost:4001/brands`).then((res) => {
      setbrandList(res.data.data);
      console.log("--", res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("product - Data", data);


  const update = (e) => {
    var updatedData = {
      productName: productName,
      baseprice: baseprice,
      category: category,
      subcategory: subcategory,
      brand: brand,
    };
    e.preventDefault();

    axios
      .put(`http://localhost:4001/products/${id}`, updatedData)
      .then((res) => {
        alert("Data updated...");
      });
  };


  
  const CategoryListOnChangeHandler = async (e) => {
    var catid = e.target.value;
    console.log("cat id:", e.target.value);
      setCategory(e.target.value)

    await axios
      .get(`http://localhost:4001/subcategoriesbycategory/${catid}`)
      .then((res) => {
        setsubcategoryList(res.data.data);
        console.log("sub cat data ", res.data.data);
      });
  };
 
  const subcategoryOnHangeHandler = (e) =>{
    console.log('sub-cate',e.target.value);
    setSubcategory(e.target.value )
    

  } 

  const BrandOnChangeHandler = (e) => {
    console.log("brand", e.target.value);
    setbrand(e.target.value);
  };

  return (
    <div className=" content-wrapper card-body">

      {data.category !== undefined &&
      data.subcategory !== undefined  ? (
      <form onSubmit={update}>
        <div className=" form-group">
          <label>Product Name</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.productName}
            onChange={(e) => setproductName(e.target.value)}
          />
        </div>
        <div className=" form-group">
          <label>Base Price</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.baseprice}
            onChange={(e) => setBaseprice(e.target.value)}
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
      ) :("Loading....")
      }
    </div>
  );
};
