import React, { useState } from 'react';
import axios from 'axios';

const API = () => {
  const imageStyle = {
    width: '300px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  };

    let url ="https://api.github.com/users"
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)
    const getData = () =>{
        axios.get(url)
        .then((response) =>{
          setisloading(false)
            setdata(response.data)
        })
    }

  return ( 
    <>
        <button onClick={getData}>GET DATA FROM API</button>
        {
          isloading==true ? "Loading..." :
          data.map ((users) => (
            <div className='container col-md-4' key={users.id}>
              <img src={users.avatar_url} style={imageStyle} ></img>
              <h1>{users.login}</h1>
            </div>
            
          )

          )
        }
    </>
  )
}

export default API