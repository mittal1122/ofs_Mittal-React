import React from "react";
import { Link } from "react-router-dom";
import "./singUp_Css.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export const CustSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobileNum, setmobailNum] = useState("");
  const [gender, setgender] = useState("");

  const submit = (e) => {
    e.preventDefault();

    var Data = {
      firstName: firstName,
      email: email,
      password: password,
      mobileNum: mobileNum,
      gender: gender,
      role: "62493c9879dd4902ea8995c0",
      isActive: 1,
    };

    axios.post("http://localhost:4001/users", Data).then((res) => {
      console.log(res.status);
      console.log(res.data);

      console.log("new data: ", Data);
      toast.success("Vendor Added...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
                      Create an account
                    </h2>

                    <form onSubmit={submit}>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          onChange={(e) => setFirstName(e.target.value)}
                          class="form-control form-control-lg"
                        />
                      </div>

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
                          Contact Number
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          onChange={(e) => setmobailNum(e.target.value)}
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

                      {/* Gendor */}
                      <div className="form-group" data-select2-id="55"></div>
                      <label >
                        Gender
                      </label>
                      <select
                        className="form-control form-control-lg  select2 select2-hidden-accessible "
                        data-select2-id="9"
                        aria-hidden="true"
                        tabindex="-1"
                        onChange={(e) => setgender(e.target.value)}
                      >
                        <option selected>Male</option>
                        <option selected>Female</option>
                      </select>
                      

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
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

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/" class="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
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
