import React, { useEffect, useState } from "react";
import {Header} from "./Header";
import '../_css/Dashboard.css'
import { Route, Routes } from "react-router-dom";
import { CustomerSingup } from "../Login/CustomerSingup";
import { VendorSingup } from "../Login/VendorSingup";
import { AddVendor } from "../Vendor/AddVendor";
import { GetVendor } from "../Vendor/GetVendor";
import { UpdateVendor } from "../Vendor/UpdateVendor";
import { VendorRequest } from "../Vendor/VendorRequest";
import { GetProduct } from "../Product/GetProduct";
import { AddProduct } from "../Product/AddProduct";
import { UpdateProduct } from "../Product/UpdateProduct";
import { AddCategory } from "../Category/AddCategory";
import { GetCategory } from "../Category/GetCategory";
import { UpdateCategory } from "../Category/UpdateCategory";
import { AddSubCategory } from "../SubCategory/AddSubCategory";
import { GetSubCategory } from "../SubCategory/GetSubCategory";
import { UpdateSubCategory } from "../SubCategory/UpdateSubCategory";
import { AddBrand } from "../Brand/AddBrand";
import { GetBrand } from "../Brand/GetBrand";
import { UpdateBrand } from "../Brand/UpdateBrand";
import {Dashbord2} from '../Admin_Componant/Dashbord2'
import '../_css/Dashboard.css'
import {Vendor_Menu} from "./Vendor_Menu";
import { AddVendorProduct } from "../Vendor_Product/AddVendorProduct";
import { GetVendorProduct } from "../Vendor_Product/GetVendorProduct";
import { NotFound } from "../Login/NotFound";

export const VendorDashbord = () => {
  const [isVendor,setIsVendor] = useState(false);

  useEffect(()=> {
    let roleName = localStorage.getItem("roleName")
    if(roleName === 'Vendor')
      setIsVendor(true);
    else 
      setIsVendor(false);
  }, [])
  
  return (
    <div className="position ">
     { isVendor ? 
      <React.Fragment>
        <Header />
        <Vendor_Menu />
        <Routes>
          <Route path='dashbord2' element={<Dashbord2/>}/> 
          <Route path="customersingup" element={<CustomerSingup />}/>
          <Route path="vendorsingup" element={<VendorSingup />}/>
          <Route path="addvendor" element={<AddVendor />}/>
          <Route path="getvendor" element={<GetVendor />}/>
          <Route
            path="getvendor/updatevendor/:id"
            element={<UpdateVendor />}
          />
          <Route path="vendorrequest" element={<VendorRequest />}/>
          <Route path="productlist" element={<GetProduct />}/>
          <Route path="addproduct" element={<AddProduct />}/>
          <Route
            path="productlist/updateproduct/:productId"
            element={<UpdateProduct />}
          />
          <Route path="addcategories" element={<AddCategory />}/>
          <Route path="categorylist" element={<GetCategory />}/>
          <Route
            path="categorylist/updatecategory/:categoryId"
            element={<UpdateCategory />}
          />
          <Route path="addsubcategory" element={<AddSubCategory />}/>
          <Route path="getsubcategory/addsubcategory" element={<AddSubCategory />}/>
          <Route path="getsubcategory" element={<GetSubCategory />}/>
          <Route
            path="getsubcategory/updatecategory/:id"
            element={<UpdateSubCategory />}
          />
          <Route path="getbrand/addbrand" element={<AddBrand />}/>
          <Route path="addbrand" element={<AddBrand />}/>
          <Route path='getbrand' element={<GetBrand/>}/>
          <Route path='getbrand/updatebrand/:id' element={<UpdateBrand/>}/>
          <Route path='addvendorproduct' element={<AddVendorProduct/>}/>
          <Route path='getvendorproduct' element={<GetVendorProduct/>}/>
        </Routes>
      </React.Fragment>
     : <NotFound />}
    </div>
  );
};
