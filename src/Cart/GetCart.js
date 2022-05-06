import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Header } from '../Customer/Header'
import Modal from "react-responsive-modal";
import { Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import './addressModalCss.css'
import 'react-responsive-modal/styles.css';



export const GetCart = () => {


  const [cartData, setcartData] = useState([])

  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState(0);
  const [pincode, setPincode] = useState(0);
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("India");

  const [isModalOpen, setisModalOpen] = useState(false);
  const close = <CloseIcon />;

  let userId = localStorage.getItem('userId')
  let cartTotal = 0;

  const getData = async ()=>{
    await axios.get(`http://localhost:4001/allcarts/${userId}`).then( (res) => {
      console.log('cart data',res.data.data[0])
      setcartData(res.data.data[0])
  })
  }

  const handleOrder = async () => {
    let flag = 1;
    const indianPhoneNumberRegex =
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/gm;

    const indianPincodeRegex = /^[1-9][0-9]{5}$/gm;

    let noWhiteFullName = fullName.replace(/^\s+|\s+$/g, "");
    setFullName(noWhiteFullName);

    let checkMobileNumber = indianPhoneNumberRegex.test(mobileNumber);

    let checkPincode = indianPincodeRegex.test(pincode);

    let noWhiteAddressLine1 = addressLine1.replace(/^\s+|\s+$/g, "");
    setAddressLine1(noWhiteAddressLine1);

    let noWhiteCity = city.replace(/^\s+|\s+$/g, "");
    setCity(noWhiteCity);

    let noWhiteState = state.replace(/^\s+|\s+$/g, "");
    setState(noWhiteState);

    let noWhiteCountry = country.replace(/^\s+|\s+$/g, "");
    setCountry(noWhiteCountry);

    if (noWhiteFullName.length < 6 || noWhiteFullName.length > 50) {
      document.querySelector(".full_name_length_error").style.display = "block";
      flag = 0;
    }
    if (noWhiteAddressLine1.length < 6 || noWhiteAddressLine1.length > 100) {
      document.querySelector(".address_line1_length_error").style.display =
        "block";
      flag = 0;
    }
    if (noWhiteCity.length < 2 || noWhiteCity.length > 30) {
      document.querySelector(".city_length_error").style.display = "block";
      flag = 0;
    }
    if (noWhiteState.length < 2 || noWhiteState.length > 30) {
      document.querySelector(".state_length_error").style.display = "block";
      flag = 0;
    }
    if (noWhiteCountry.length < 2 || noWhiteCountry.length > 30) {
      document.querySelector(".country_length_error").style.display = "block";
      flag = 0;
    }

    if (
      flag &&
      noWhiteFullName !== "" &&
      checkMobileNumber &&
      checkPincode &&
      noWhiteAddressLine1 !== "" &&
      noWhiteCity !== "" &&
      noWhiteState !== "" &&
      noWhiteCountry !== ""
    ) {
      alert('Order added successfully')
    }
  }

  const DeleteData =(_id) =>{
    axios.delete(`http://localhost:4001/carts/${_id}`).then((res)=>{
      alert(res.data.data);
      getData();
    })
  }

  useEffect(() => {
    getData();
  }, [])
  
  return (
<div className="container-fluid" >
 <Header/>
    
  {/* Cart Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
    <div className="container ">
  <div className="d-flex justify-content-center row">
    <div className="col-md-8"   style={{marginTop: "50px"}}>
    {cartData.map((cart) => (
                        <React.Fragment  tempCartTotal = {cartTotal += cart[3].baseprice}>
      <div  style={{height:"120px"}} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div className="mr-1"><img className="rounded" src={cart[4].ImgUrl} width={70} /></div>
        <div style={{width: "500px"}} className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{cart[3].productName}</span>
        </div>
      
          
        {/* <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" />
          <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success" />
        </div> */}
        <div>
          <h5 className="text-grey">₹{cart[3].baseprice}</h5>
        </div>
        
        <div className="d-flex align-items-center">
        <i onClick={() => DeleteData(cart[0]._id)} className='fa fa-trash mb-1 text-danger'></i>
        </div>
        
      </div>
      </React.Fragment>
    ))}
      
    </div>
  </div>
</div>

      <div style={{maxWidth: "760px", boxSizing: "border-box"}} className="container-fluid pt-5">
        {/* <form className="mb-5" action>
          <div className="input-group">
            <input type="text" className="form-control p-4" placeholder="Coupon Code" />
            <div className="input-group-append">
              <button className="btn btn-warning">Apply Coupon</button>
            </div>
          </div>
        </form> */}
        <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary border-0">
            <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
          </div>
          
          <div className="card-body">
          <div className="d-flex justify-content-between mb-3 pt-1">
              <h6 className="font-weight-medium">Quantity</h6>
              <h6 className="font-weight-medium">{cartData.length}</h6>
            </div>
            <div className="d-flex justify-content-between mb-3 pt-1">
              <h6 className="font-weight-medium">Subtotal</h6>
              <h6 className="font-weight-medium">{cartTotal}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping (5% of the order value)</h6>
              <h6 className="font-weight-medium">{Math.floor(0.05 * cartTotal)}</h6>
            </div>
          </div>
          <div className="card-footer border-secondary bg-transparent">
            <div className="d-flex justify-content-between mt-2">
              <h5 className="font-weight-bold">Total</h5>
              <h5 className="font-weight-bold">{Math.floor(1.05*cartTotal)}</h5>
            </div>
            <button onClick={()=> setisModalOpen(true)} className="btn btn-block btn-warning my-3 py-3">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Cart End */}
  <Modal
        open={isModalOpen}
        onClose={() => setisModalOpen(false)}
        closeIcon={close}
        center
      >
        <div className="address_modal">
          <div className="address_modal_wrapper">
            <div className="address_header">
              <h3>Enter shipping details</h3>
              <p>Please double check your address and pincode</p>
            </div>
            <div className="address_modal_fields">
              <div className="address_modal_full_name_wrapper">
                <label
                  className="login-field-label"
                  htmlFor="address_modal_full_name"
                >
                  Full Name
                  <span className="required_star">*</span>
                </label>
                <input
                  placeholder="Enter full name"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    document.querySelector(
                      ".full_name_length_error"
                    ).style.display = "none";
                  }}
                  name="address_modal_full_name"
                  id="address_modal_full_name"
                />
                <p className="full_name_length_error first_time_login_error">
                  Full name character length must be between 6 to 50
                </p>
              </div>

              <div className="mobile_pincode_wrapper">
                <div className="address_modal_mobile_number_wrapper">
                  <label
                    className="login-field-label"
                    htmlFor="address_modal_mobile_number"
                  >
                    Mobile Number (Indian only)
                    <span className="required_star">*</span>
                  </label>
                  <input
                    placeholder="Enter mobile number"
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    name="address_modal_mobile_number"
                    id="address_modal_mobile_number"
                  />
                </div>
                <div className="address_modal_pincode_wrapper">
                  <label
                    className="login-field-label"
                    htmlFor="address_modal_pincode"
                  >
                    Pincode
                    <span className="required_star">*</span>
                  </label>
                  <input
                    placeholder="Enter pincode"
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    name="address_modal_pincode"
                    id="address_modal_pincode"
                  />
                </div>
              </div>
              <div className="address_modal_add_line1_wrapper">
                <label
                  className="login-field-label"
                  htmlFor="address_modal_add_line1"
                >
                  Address Line 1<span className="required_star">*</span>
                </label>
                <input
                  placeholder="Enter address line 1"
                  type="text"
                  value={addressLine1}
                  onChange={(e) => {
                    setAddressLine1(e.target.value);
                    document.querySelector(
                      ".address_line1_length_error"
                    ).style.display = "none";
                  }}
                  name="address_modal_add_line1"
                  id="address_modal_add_line1"
                />
                <p className="address_line1_length_error first_time_login_error">
                  Address line 1 character length must be between 6 to 100
                </p>
              </div>
              

              <div className="city_state_country_wrapper">
                <div className="address_modal_city_wrapper">
                  <label
                    className="login-field-label"
                    htmlFor="address_modal_city"
                  >
                    City
                    <span className="required_star">*</span>
                  </label>
                  <input
                    placeholder="Enter city"
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      document.querySelector(
                        ".city_length_error"
                      ).style.display = "none";
                    }}
                    name="address_modal_city"
                    id="address_modal_city"
                  />
                  <p className="city_length_error first_time_login_error">
                    City character length must be between 2 to 30
                  </p>
                </div>
                <div className="address_modal_state_wrapper">
                  <label
                    className="login-field-label"
                    htmlFor="address_modal_state"
                  >
                    State
                    <span className="required_star">*</span>
                  </label>
                  <input
                    placeholder="Enter state"
                    type="text"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      document.querySelector(
                        ".state_length_error"
                      ).style.display = "none";
                    }}
                    name="address_modal_state"
                    id="address_modal_state"
                  />
                  <p className="state_length_error first_time_login_error">
                    State character length must be between 2 to 30
                  </p>
                </div>
                <div className="address_modal_country_wrapper">
                  <label
                    className="login-field-label"
                    htmlFor="address_modal_country"
                  >
                    Country
                    <span className="required_star">*</span>
                  </label>
                  <input
                    placeholder="Enter state"
                    type="text"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      document.querySelector(
                        ".country_length_error"
                      ).style.display = "none";
                    }}
                    name="address_modal_country"
                    id="address_modal_country"
                  />
                  <p className="country_length_error first_time_login_error">
                    Country character length must be between 2 to 30
                  </p>
                </div>
              </div>
            </div>
            <div className="address_footer">
              <div className="create_space_modal_footer_divider"></div>
              <div className="address_footer_buttons">
                <Button
                  // disabled={true}
                  className="create_space_modal_btn address_modal_btn"
                  onClick={() => {
                    handleOrder();
                  }}
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
  </div>

  )
}
