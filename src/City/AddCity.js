import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AddCity = () => {
    const [StateList, setStateList] = useState([])
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [isActive, setisActive] = useState('')

    const getData=async() =>{
        await axios.get("http://localhost:4001/states").then((res) =>{
            setStateList(res.data.data)
            console.log("statae List",res.data.data);
        });
    };


    const StateListOnChangeHandler=(e)=>{
        console.log("state", e.target.value);
        setstate(e.target.value);
    }

    useEffect(() => {
      getData();
    }, [])
    
   

    const submit = (e) =>{

        var Data = {
            cityName :city,
            state :state,
            isActive:isActive
        }
        e.preventDefault();
        axios.post("http://localhost:4001/cities",Data).then((res)=>{
            console.log(res.status);
            console.log(res.data);
            alert("City Added....");
        });
    };

  return (
    <div>
      <div className=" content-wrapper card-body">
        <form onSubmit={submit}>
          <div className=" form-group">
            <label>City</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your Product Name "
              onChange={(e) => setcity(e.target.value)}
            />
          </div>
          <div className=" form-group" data-select2-id="55">
            <label>State</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              data-select2-id="9"
              tabindex="-1"
              aria-hidden="true"
              onChange={(e) => StateListOnChangeHandler(e)}
            >
              {StateList.map((state) => {
                return (
                  <option
                    selected="selected"
                    value={state._id}
                    data-select2-id="3"
                  >
                    {state.stateName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className=" form-group" data-select2-id="55">
            <label>IsActive</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter 0 or 1 "
              onChange={(e) => setisActive(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
