import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import '../_css/Dashboard.css'
import { Route, Routes } from "react-router-dom";
import { CustomerSingup } from "../Login/CustomerSingup";
import { VendorSingup } from "../Login/VendorSingup";
import { AddRole } from "../Role/AddRole";
import { GetRole } from "../Role/GetRole";
import { UpdateRole } from "../Role/UpdateRole";
import { GetUsers } from "../User/GetUsers";
import { User_details } from "../User/User_details";
import { Updateuser } from "../User/Updateuser";
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
import { Adduser } from "../User/Adduser";
import { GetOrder } from "../Order/GetOrder";
import { GetOrderDetails } from "../OrderDetailes/GetOrderDetails";
import { AddCity } from "../City/AddCity";
import { GetCity } from "../City/GetCity";
import { UpdateCity } from "../City/UpdateCity";

export const Dashbord = () => {
  // const [roleList, setroleList] = useState([]);

  // const getData = () => {
  //   axios.get("http://localhost:4001/roles").then((res) => {
  //     console.log(res.data.data);
  //     setroleList(res.data.data);
  //   });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="position">
      <Header />
      <Menu />
      <Routes>
        <Route path='dashbord2' element={<Dashbord2/>}></Route>
        <Route path="customersingup" element={<CustomerSingup />}></Route>
        <Route path="vendorsingup" element={<VendorSingup />}></Route>
        <Route path="addrole" element={<AddRole />}></Route>
        <Route path="getrole/addrole" element={<AddRole />}></Route>
        <Route path="getrole" element={<GetRole />}></Route>
        <Route path="getrole/updaterole/:id" element={<UpdateRole />}></Route>
        <Route path='user/adduser' element={<Adduser/>}></Route>
        <Route path='adduser' element={<Adduser/>}></Route>
        <Route path="user" element={<GetUsers />}></Route>
        <Route path="user/userdetails" element={<User_details />}></Route>
        <Route path="user/updateuser/:userId" element={<Updateuser />}></Route>
        <Route path="addvendor" element={<AddVendor />}></Route>
        <Route path="getvendor/addvendor" element={<AddVendor />}></Route>
        <Route path="getvendor" element={<GetVendor />}></Route>
        <Route
          path="getvendor/updatevendor/:id"
          element={<UpdateVendor />}
        ></Route>
        <Route
          path="vendorrequest/updatevendor/:id"
          element={<UpdateVendor />}
        ></Route>
        <Route path="vendorrequest" element={<VendorRequest />}></Route>
        <Route path="productlist" element={<GetProduct />}></Route>
        <Route path="addproduct" element={<AddProduct />}></Route>
        <Route
          path="productlist/updateproduct/:productId"
          element={<UpdateProduct />}
        ></Route>
        <Route path="addcategories" element={<AddCategory />}></Route>
        <Route path="categorylist" element={<GetCategory />}></Route>
        <Route
          path="categorylist/updatecategory/:categoryId"
          element={<UpdateCategory />}
        ></Route>
        <Route path="addsubcategory" element={<AddSubCategory />}></Route>
        <Route path="getsubcategory" element={<GetSubCategory />}></Route>
        <Route
          path="getsubcategory/updatecategory/:id"
          element={<UpdateSubCategory />}
        ></Route>
        <Route path="addbrand" element={<AddBrand />}></Route>
        <Route path='getbrand' element={<GetBrand/>}></Route>
        <Route path='getbrand/updatebrand/:id' element={<UpdateBrand/>}></Route>
        <Route path='getorder' element={<GetOrder/>}/>
        <Route path='getorder/getorderdetails/:id' element={<GetOrderDetails/>}></Route>
        <Route path="addcity" element={<AddCity />}></Route>
        <Route path="getcity/addcity" element={<AddCity />}></Route>
        <Route path="getcity" element={<GetCity />}></Route>
        <Route path="getcity/updatecity/:cityId" element={<UpdateCity />}></Route>
        
     
      </Routes>
      <Footer />
    </div>
  );
};
