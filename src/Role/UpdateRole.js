import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateRole = () => {
    var id = useParams().id;
    console.log("Id--",id);

    const [data, setdata] = useState('')
    const [roleName, setroleName] = useState(data.roleName)

    const getData=()=>{
        axios.get(`http://localhost:4001/roles/${id}`).then((res)=>{
            setdata(res.data.data);
            console.log("--",res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const update =(e)=>{
        var updatedData ={
            roleName:roleName
        };
        e.preventDefault();

        axios.put(`http://localhost:4001/roles/${id}`,updatedData).then((res)=>{
            alert('Data Updated.....');
        });
    };
    
  return (
    <div className="content-wrapper card-body">
    <form onSubmit={update}>
      <div class="form-group">
        <label>Role Name</label>
        <input
          type="text"
          class="form-control"
          defaultValue={data.roleName}
          onChange={(e) => setroleName(e.target.value)}
        /></div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        </form>
        </div>
  )
}
