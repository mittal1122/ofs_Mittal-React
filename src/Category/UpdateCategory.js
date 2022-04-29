import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateCategory = () => {
    var id = useParams().categoryId;
    console.log("Id--",id);

    const [data, setdata] = useState('')
    const [categoryName, setcategoryName] = useState(data.categoryName)

    const getData=()=>{
        axios.get(`http://localhost:4001/categories/${id}`).then((res)=>{
            setdata(res.data.data);
            console.log("--",res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const update =(e)=>{
        var updatedData ={
            categoryName:categoryName
        };
        e.preventDefault();

        axios.put(`http://localhost:4001/categories/${id}`,updatedData).then((res)=>{
            alert('Data Updated.....');
        });
    };
    
  return (
    <div>
        <div className=" content-wrapper card-body">
    <h1>This is Update Category </h1> 
    <form onSubmit={update}>
      <div class="form-group">
        <label>Category Name</label>
        <input
          type="text"
          class="form-control"
          defaultValue={data.categoryName}
          onChange={(e) => setcategoryName(e.target.value)}
        /></div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        </form>
        </div>
        </div>
  )
}
