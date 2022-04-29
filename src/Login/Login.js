import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./singUp_Css.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from 'react-spinners/BeatLoader'


export const Login = ({authenticate}) => {
  
    const [isLoading, setisLoading] = useState(false)

    const [data, setdata] = useState([])
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [role, setrole] = useState('');
    const [roleId, setroleId] = useState('');
    const [userId, setuserId] = useState('');
  
  
    var navigate = useNavigate();
  
    useEffect(() => {
      setisLoading(true);
      setTimeout(()=>{
        setisLoading(false)
      },3000);
    }, [])
    
  
    const emailChangeHandler = (e) => {
      setemail(e.target.value);
    };
  
    const passwordChangeHandler = (e) => {
      setpassword(e.target.value);
    };
  
    useEffect(() => {
      const email = localStorage.getItem("email")
      const role = localStorage.getItem("role")
      const roleId = localStorage.getItem("roleId")
      const userId = localStorage.getItem("userId")
  
      setuserId(userId);
      setrole(role);
      setroleId(roleId);
      setemail(email);
  
      if(roleId & email) {
        setroleId(true)
      }else{
        setroleId(false)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("roleId",roleId)
    }, [roleId])
    
    
  
    const submit = async (e) => {
      e.preventDefault();
  
      var loginData = {
        email: email,
        password: password,
      };
  
      await axios.post(`http://localhost:4001/login`, loginData).then((res) => {
        if (res.data.status == 200) {
          console.log("axios post called", res.data.data);
  
          console.log("email", res.data.data.email);
          console.log("roleName", res.data.data.role.roleName);
          console.log("roleId", res.data.data.role._id);
          console.log("userId", res.data.data._id);
  
  
          localStorage.setItem("email", res.data.data.email);
          localStorage.setItem("roleName", res.data.data.role.roleName);
          localStorage.setItem("roleId", res.data.data.role._id)
          localStorage.setItem("userId",res.data.data._id)
  
  
          authenticate && authenticate(true , res.data.data.role._id,res.data.data._id)
  
          console.log(`roleId`,res.data.data.role._id);
          if (res.data.data.role._id == "620c892f63551bfea59868d3") {
            isLoading ?<Loader/>
            :
            navigate(`/Admindashbord`);
            localStorage.setItem("admin",res.data.data.role._id)
            localStorage.setItem("firstName",res.data.data.firstName)
          }
          else if(res.data.data.role._id == `62493c9879dd4902ea8995c0`){
            isLoading ?<Loader />
            :
            navigate( `/MainDashbord`);
            localStorage.setItem("Customer Id",res.data.data.role._id)
            localStorage.setItem("firstName",res.data.data.firstName)
          }
  
          else if(res.data.data.role._id == `62493c6379dd4902ea8995bc`){
            isLoading ?<Loader />
            :
            navigate( `/VendorDashbord`)
          }else{
            alert("Invalid role!!!")
          }
  
        }
         else {
          console.log("Invalid credentials", res.data.data);
          localStorage.removeItem("email")
          localStorage.removeItem("role")
          alert("Invalid Credentials");
        }
      });
      toast.success("Vendor Added...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    };
  
  return (
    <div>
      <section
        class="vh-100 bg-image"
        style={{
          backgroundImage:
            "url(`https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp`)",
        }}
      >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{ borderRadius: "15px" }}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      sign in
                    </h2>

                    <form onSubmit={submit}>
                    <p className="text-muted text-center p-b-5">
                        Sign in with your regular account
                      </p>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          onChange={(e) => setemail(e.target.value)}
                          class="form-control form-control-lg"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          onChange={(e) => setpassword(e.target.value)}
                          class="form-control form-control-lg"
                        />
                      </div>
                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body"
                        >
                          LOGIN
                        </button>
                        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
                      </div>

                      <label>Don't have an account?</label>
                      <pre>
                      <p className="text-inverse text-left">
                        <Link to="vendorsignup">
                          <b>For Vendor Register here </b>
                        </Link>
                      </p>
                      </pre>
                      <p className="text-inverse text-left">
                        <pre>
                        <Link to="customersignup">
                          <b>For Customer Register here </b>
                        </Link>
                      </pre>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
