import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateCity = () => {
    var id = useParams().cityId;
    console.log("Id --",id);

    const [data, setData] = useState('')
    const [cityName, setCityName] = useState(data.cityName)
    const [stateList, setstateList] = useState([])
    const [state,  setstate] = useState(data.state)
    const [isActive, setIsActive] = useState(data.isActive)


    const getData = () =>{
        axios.get(`http://localhost:4001/cities/${id}`).then((res) =>{
            setData(res.data.data);
            console.log("getData--",res.data.data);
        })
        axios.get(`http://localhost:4001/states`).then((res) =>{
            setstateList(res.data.data);
            console.log("StateList--",res.data.data);
        })
    }

    useEffect(() => {
        getData();
      }, []);
    
      const update = (e) => {
        //api calling...
        var updatedData = {
            cityName :cityName,
            state :state,
            isActive: isActive,
        };
        e.preventDefault();
    
        axios.put(`http://localhost:4001/cities/${id}`, updatedData).then((res) => {
          alert("Data updated...");
        });
      };
    
  return (
    <div className=" content-wrapper card-body">
        <form onSubmit={update}>
    <div class="form-group">
      <label>City</label>
      <input
        type="text"
        class="form-control"
        defaultValue={data.cityName}
        onChange={(e) => setCityName(e.target.value)}
      />

{/* <label>State</label>
      <input
        type="text"
        class="form-control"
        defaultValue={data.city.state.stateName}
        onChange={(e) => setstate(e.target.value)}
      /> */}
  
      {/* <label>isActive</label>
      <input
        type="text"
        class="form-control"
        defaultValue={data.isActive}
        onChange={(e) => setIsActive(e.target.value)}
      /> */}
    </div>
    <div className=" form-group" data-select2-id="55">
            <label>State</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              data-select2-id="9"
              tabindex="-1"
              aria-hidden="true"
            //   onChange={(e) => stateListOnChangeHandler(e)}
            >
              {stateList.map((state) => {
                if(state._id !== data.state._id){
                return (
                  <option
                  value={state._id}
                  >
                    {state.stateName}
                  </option>
                );
              }
              else{
                return(
                  <option
                  selected
                    value={state._id}
                  >
                    {state.stateName}
                  </option>
                  )
                }
              })}
            </select>
          </div>
    {/* <div className=" form-group" data-select2-id="55">
            <label>IsActive</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              data-select2-id="9"
              tabindex="-1"
              aria-hidden="true"
              defaultValue={data.isActive}
              onChange={(e) => setIsActive(e.target.value)}

            > */}
                  {/* <option>1</option>
                  <option>0</option> */}

            {/* </select>
          </div> */}
          <label>isActive</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.isActive}
            onChange={(e) => setIsActive(e.target.value)}

          />

    <button type="submit" class="btn btn-primary">
      Submit
    </button>
  </form></div>
  )
}
