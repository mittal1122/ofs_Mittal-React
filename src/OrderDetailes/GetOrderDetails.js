import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const GetOrderDetails = () => {
    var id = useParams().id;

    const [orderdetailList, setorderdetailList] = useState([]);
    
    

    const getData = () => {
        
      axios.get(`http://localhost:4001/ordersdetailsbyid/${id}`).then((res) => {
        console.log(res.data.data);
        // console.log("rolename",res.data.data[0].role.roleName);
        // console.log("isActive",res.data.data[0].isActive);
  
        setorderdetailList(res.data.data);
        console.log('set data',res.data.data)
      });
    };
  
  
    const DeleteData = (_id) => {
      if(window.confirm('Are you sure'))
      {
        axios.delete(`http://localhost:4001/orderdetails/${_id}`).then((res) => {
          alert(res.status);
        });
      }
    };
  
  
    useEffect(() => {
      getData();
    }, []);
  
  
  return (
    <div className="content-wrapper card-body table-responsive p-0">
      <div className="col-md-9">
        <h3 className="row-1 d-inline-flex" > Order Details</h3>
    <table className=" table table-hover">
        <thead className="m-0 text-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">qty</th>
            <th scope="col">First Name</th>
            <th scope="col">Mobile Number</th>
            {/* <th scope="col">Address</th> */}
            <th scope="col">Status</th>
            <th scope="col">isRefund</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orderdetailList.map((order) => {
            return (
              <tr>
                <th scope="row"><Link to={`getorderdetails/${order._id}`}>{order._id}</Link></th>
                <td>{order.total}</td>
                <td>{order.user.firstName}</td>
                <td>{order.user.mobileNum}</td>
                {/* <td>{order.custmerAddress.address}</td> */}
                <td>{order.status.status}</td>
                <td>{
                  order.isRefund? "Applied":"Not Applied"
                }</td>
                {/* <td>{order.role}</td> */}
                {/* <td>{order.isActive}</td> */}

                <td>
                  <button onClick={()=> DeleteData(order._id)} className="btn btn-danger">DELETE</button>
                  
                  <Link to={`updateorder/${order._id}`} className="btn btn-primary">UPDATE</Link>                     
                </td>
              </tr>
            );
          })}
        </tbody>
        
      </table>
    </div>
    </div>

  )
}
