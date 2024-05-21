import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Effect = () => {
    let url = "https://musica-api.up.railway.app/new"
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)
    useEffect(() => {
      getData()
    }, [])
    
    const getData = () =>{
        axios.get(url)
        .then((response) =>{
            setisloading(false)
            setdata(response.data)
        })
    } 
  return (
    <>
        <div>
        <div className='container-fluid' style={{backgroundColor:'black'}}>
            <div className="container">
                <h1 className='text-white text-center pt-5 fw-bold'>NEW MUSIC</h1>
                <p className='text-white text-center fs-5 fw-semibold'>Step into a world of sonic enchantment with our exciting New Music Session. </p>
                <div className="row pt-3">
                {
                isloading==true? "loading..." :
                data.map((users,index)=>(
                    <div key={index} className='col-md-4 mb-4'>
                        <div className="card" style={{height:'30rem' ,backgroundColor:'rgb(33, 37, 41)', border:'1px solid grey'}}>
                            <div>{data && <img src={users.cover} className="card-img-top" alt="music poster" style={{height:'20rem'}} />}</div>
                            <div className="card-body">
                                <h5 className='text-warning'>{users.artist}</h5>
                                <h4 className='text-white'>Title: {users.title}</h4>
                                <div style={{width:'30px'}}>{data && <audio src={users.audio} controls={true}></audio> }</div>
                            </div>
                        </div>
                    </div>    
            ))
        }
                </div>
            </div>
            
            
                   
                </div>
            
           
    </div>
    </>
  )
}

export default Effect