import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const GetOrder = () => {
    const [orderList, setorderList] = useState([]);

    const getData =() =>{
        axios.get('http://localhost:4001/orders').then((res)=>{
            console.log("oeder list",res.data.data);
            setorderList(res.data.data);

        });
    };

    const DeleteData =(_id) =>{
        {
            axios.delete(`http://localhost:4001/orders/${_id}`).then((res)=>{
                alert(res.status);
                getData();
            });
        }
    }


    useEffect(() => {
        getData();
    
      return () => {
        
      }
    }, [])
    
  return (
    <div >
  <div className="content-wrapper card-body table-responsive p-0">
      <div className="col-md-9">
        <h3 className="row-1 d-inline-flex" > Order</h3>
    <table className=" table table-hover">
        <thead className="m-0 text-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Total Amount</th>
            <th scope="col">First Name</th>
            <th scope="col">Mobile Number</th>
            {/* <th scope="col">Address</th> */}
            <th scope="col">Status</th>
            <th scope="col">isRefund</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => {
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
    </div>
  )
}
