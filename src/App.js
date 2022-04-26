import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashbord } from "./Admin_Componant/Dashbord";
import { Login } from "./Login/Login";
import { VendorDashbord,  } from "./Vendor_Componant/VendorDashbord";
import { AddRole } from "./Role/AddRole";
import { Adduser } from "./User/Adduser";
import { useEffect, useState, createContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import Loader from "react-spinners/ClipLoader";
import { NotFound } from "./Login/NotFound";

export const UserContext = createContext();

function App() {

  const [isLoading, setisLoading] = useState(false);
  const [auth, setauth] = useState(false);
  const [roleId, setroleId] = useState(false);
  const [role, setrole] = useState(false);
  const [userId, setuserId] = useState('');
  const [userData, setuserData] = useState([]);

  const getUserData  = async() =>{
    console.log("userId in get Data :", userId);
    if(userData){
      await axios.get(`http://localhost:4001/users/${userId}`).then((res)=>{
        setuserData(res.data.data)
      })
    }
  }
  

  useEffect(() => {
    setisLoading(true);

    setTimeout(()=>{
      setisLoading(false)
    },200 );
  }, [])


  useEffect(async() => {
    let email = localStorage.getItem("email")
    let role = localStorage.getItem("role")
    let roleId = localStorage.getItem("roleId")
    let userId = localStorage.getItem("userId")

    setrole(role)
    setroleId(roleId)
    setuserId(userId)

    console.log("App.js email", email);
    console.log("App.js role", role);
    console.log("App.js userID", userId);

    if(email && roleId){
      setauth(true)
    }else{
      setauth(false)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("user_auth", auth)
  }, [auth])

  useEffect(() => {
    localStorage.setItem("userId",userId)
    getUserData()

    return() =>{
      console.log("returned userId:", userId);
    }
  }, [userId])
  

  const authenticate =(auth,roleId,userId) =>{
    setauth(auth)
    setroleId(roleId)
    setuserId(userId)
  }

  console.log("auth: ", auth);
  console.log("user data",userData);
  
  
  
  return (
    <div className="wrapper">
    {
      isLoading ? <ClipLoader/>

      :
      <>
        <UserContext.Provider  value = {userData}>
    
      <Routes>
        {
        <Route path="/" element={<Login authenticate={authenticate} />}></Route>
        },
        {
        roleId === `620c892f63551bfea59868d3` ?
        isLoading ? <Loader/>
        :
        <Route path="/admindashbord/*" element={<Dashbord />}></Route>
        :"You are not Admin"},
        {
          roleId === `62493c6379dd4902ea8995bc` ?
          isLoading ? <Loader/>
          :
        <Route path='/VendorDashbord/*' element={<VendorDashbord/>}></Route>
        : "Plese Register First"
        },
          <Route path='/*' element={<NotFound/>}></Route>
         
        </Routes> 
      </UserContext.Provider>
      </>
    }

    </div>
  );
}

export default App;
