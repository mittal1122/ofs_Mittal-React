import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const UpdateVendor = () => {
  var id = useParams().id;
  console.log("Id --", id);

  const [Data, setData] = useState("");
  const [vendorName, setvendorName] = useState(Data.vendorName);
  const [address, setaddress] = useState(Data.address);
  const [email, setemail] = useState(Data.email);
  const [contactNumber, setcontactNumber] = useState(Data.contactNumber);
  const [pincode, setpincode] = useState(Data.pincode);
  const [user, setuser] = useState(Data.user);
  const [state, setstate] = useState(Data.state);
  const [city, setcity] = useState(Data.city);
  const [isActive, setisActive] = useState(Data.isActive);

  const getData = () => {
    axios.get(`http://localhost:4001/vendor/${id}`).then((res) => {
      setData(res.data.data);
      console.log("--", res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const update = (e) => {
    //aoi calling...
    var updatedData = {
      vendorName: vendorName,
      address: address,
      email: email,
      contactNumber: contactNumber,
      pincode: pincode,
      user: user,
      state: state,
      city: city,
      isActive: isActive,
    };
    e.preventDefault();

    axios.put(`http://localhost:4001/vendor/${id}`, updatedData).then((res) => {
      alert("Data updated...");
    });
  };

  return (
    <div className="content-wrapper card-body">
      <form onSubmit={update}>
        <div class="form-group">
          <label>Vendor Name</label>
          <input
            type="text"
            class="form-control"
            defaultValue={Data.vendorName}
            onChange={(e) => setvendorName(e.target.value)}
          />

          <label>Address</label>
          <input
            type="text"
            class="form-control"
            defaultValue={Data.address}
            onChange={(e) => setaddress(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            class="form-control"
            defaultValue={Data.email}
            onChange={(e) => setemail(e.target.value)}
          />

          <label>Mobile No.</label>
          <input
            type="text"
            class="form-control"
            defaultValue={Data.contactNumber}
            onChange={(e) => setcontactNumber(e.target.value)}
          />

          <label>Pincode</label>
          <input
            type="text"
            class="form-control"
            defaultValue={Data.pincode}
            onChange={(e) => setpincode(e.target.value)}
          />

          {/* Gendor */}
          <label>User</label>
          <input
            type="text"
            class="form-control"
            defaultValue={Data.user}
            onChange={(e) => setuser(e.target.value)}
          />

          <label>statet</label>
          <input
            type="text"
            class="form-control"
            defaultValue={Data.state}
            onChange={(e) => setstate(e.target.value)}
          />

          <label>City</label>
          <input
            type="text"
            class="form-control"
            defaultValue={Data.city}
            onChange={(e) => setcity(e.target.value)}
          />

          <label>isActive</label>
          <input
            type="text"
            class="form-control"
            defaultValue={Data.isActive}
            onChange={(e) => setisActive(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
