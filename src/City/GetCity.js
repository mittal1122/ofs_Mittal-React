import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const GetCity = () => {
    const [cityList, setcityList] = useState([])

    const getData = () => {
    axios.get("http://localhost:4001/cities").then((res) => {
      console.log(res.data.data);
      setcityList(res.data.data);
    });
  };
    
  const DeleteData = (_id) => {
    {
      axios.delete(`http://localhost:4001/cities/${_id}`).then((res) => {
        alert(res.status);
        getData();
      });
    }
  };

    useEffect(() => {
    getData();
    }, [])
    
  return (
    <div>

      <div className=" content-wrapper card-body table-responsive col-md-10">
        <h3 className="row-1 d-inline-flex">City</h3>
        <Link to="addcity" className="btn btn-info float-right">
          Add City
        </Link>

        <table className="   table-hover table table-striped">
          <thead className="m-0 text-dark ">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">isActive</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cityList.map((city) => {
                return (
                  <tr>
                    <th scope="row">{city._id}</th>
                    <td>{city.cityName}</td>
                    <td>{city.state.stateName}</td>
                    <td>{city.isActive ? "Active" : "DisActive"}</td>
                    <td>
                      <button
                        onClick={() => DeleteData(city._id)}
                        className="btn btn-danger"
                      >
                        DELETE
                      </button>
                      <Link
                        to={`updatecity/${city._id}`}
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
  )
}
