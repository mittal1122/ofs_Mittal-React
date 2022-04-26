import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const GetRole = () => {
  const [roleList, setroleList] = useState([]);
  const getData = () => {
    axios.get("http://localhost:4001/roles").then((res) => {
      console.log(res.data.data);
      setroleList(res.data.data);
    });
  };
  const DeleteData = (_id) => {
    axios.delete(`http://localhost:4001/roles/${_id}`).then((res) => {
      getData();
      toast("🦄 Data Delete Succesfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="content-wrapper card-body table-resposive ">
        <h1>This is Role List</h1>
        <h3 className="row-1 d-inline-flex">Roles</h3>
        <Link to="addrole" className="btn btn-info float-right">
          Add Role
        </Link>
        <table className="table table-hover table-striped">
          <thead className="m-0 text-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Role Name</th>
            </tr>
          </thead>
          <tbody>
            {roleList.map((role) => {
              return (
                <tr>
                  <th scope="row">{role._id}</th>
                  <td>{role.roleName}</td>
                  <td>
                    <button
                      onClick={() => DeleteData(role._id)}
                      className="btn btn-danger"
                    >
                      DELETE
                    </button>
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                    {/* Same as */}
                    <ToastContainer />

                    <Link
                      to={`updaterole/${role._id}`}
                      className="btn btn-primary"
                    >
                      UPDATE
                    </Link>
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
