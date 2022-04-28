import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const GetCategory = () => {
    
    const [categoryList, setcategoryList] = useState([])
    const getData = ()=>{
        axios.get("http://localhost:4001/categories").then((res)=>{
            console.log(res.data.data);
            setcategoryList(res.data.data);
        });
    };

    const DeleteData =(_id)=>{
        axios.delete(`http://localhost:4001/categories/${_id}`).then((res)=>{
            alert(res.data);
            getData();
        });
    };

    useEffect(() => {
    getData();
    }, [])
    
  return (
    <div>  
    <div className="content-wrapper card-body table-resposive col-md-10">
    <h1>This is Category List</h1> 
      <h3 className="row-1 d-inline-flex">Category</h3>
      <Link to="addcategories" className="btn btn-info float-right">
        Add Category
      </Link>
      <table className="table table-hover table-striped">
        <thead className="m-0 text-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Category Name</th>
            
          </tr>
        </thead>
        <tbody>
          {categoryList.map((category) => {
            return (
              <tr>
                <th scope="row">{category._id}</th>
                <td>{category.categoryName}</td>
                <td><button onClick={() => DeleteData(category._id)} className='btn btn-danger'>DELETE</button>
                <Link to={`updatecategory/${category._id}`} className="btn btn-primary">UPDATE</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div></div>
  )
}
