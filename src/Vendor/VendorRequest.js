import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../_css/Dashboard.css";

export const VendorRequest = () => {
  const [vendorList, setvendorList] = useState([]);

  const getData = () => {
    axios.get("http://localhost:4001/vendor").then((res) => {
      console.log(res.data.data);
      setvendorList(res.data.data);
      console.log("vendorname", res.data.data[0].vendorName);
      // console.log("isActive",res.data.data[0].isActive);
      console.log("state", res.data.data[0].state.stateName);
      console.log("city", res.data.data[0].city.cityName);
    });
  };

  const DeleteData = (_id) => {
    {
      axios.delete(`http://localhost:4001/vendor/${_id}`).then((res) => {
        alert(res.status);
        getData();
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className=" content-wrapper card-body table-responsive col-md-10">
        <h3 className="row-1 d-inline-flex"> Vendor</h3>
        <table className="  table table-hover table table-striped">
          <thead className="m-0 text-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vendor Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              {/* <th scope="col">State</th>
              <th scope="col">City</th> */}
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {vendorList.map((vendor) => {
              return (
                <tr>
                  <th scope="row">{vendor._id}</th>
                  <td>{vendor.vendorName}</td>
                  <td>{vendor.email}</td>
                  <td>{vendor.address}</td>
                  {/* <td>{vendor.state.stateName}</td>
                  <td>{vendor.city.cityName}</td> */}
                  <td>{vendor.isActive ? "Approve" : "Pending"}</td>

                  <td>
                    <button
                      onClick={() => DeleteData(vendor._id)}
                      className="btn btn-danger"
                    >
                      DELETE
                    </button>
                    <Link
                      to={`updatevendor/${vendor._id}`}
                      className="btn btn-primary"
                    >
                      UPDATE
                    </Link>

                    <button className="btn btn-warning btn-round waves-effect  ">
                      <Link to="vendordetails">View Details</Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
