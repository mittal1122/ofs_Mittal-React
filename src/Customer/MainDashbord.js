import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../Customer/Footer'
import {GetSubCategory} from '../SubCategory/GetSubCategory'
import { GetCart } from '../Cart/GetCart'
import {Header} from '../Customer/Header'
import { Dashbord } from '../Customer/Dashbord'
import { GetProduct } from '../Cust_Product/GetProduct'

export const MainDashbord = () => {
  console.log('Main Dash')
  return (
    <div>
       <Header/>
       <GetProduct />
       {/* <Dashbord/> */}
        <Routes>
            <Route path='category/subcategory' element={<GetSubCategory/>}/>
            <Route path='addtocart' element={<GetCart/>}/>
        </Routes>
        {/* <Footer /> */}

    </div>
  )
}
