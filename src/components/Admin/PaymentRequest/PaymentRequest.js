
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import "../AssignDrivers/AssignDriver.css"
// import './Pay'
import Pay from './Pay'
import axios from 'axios'
import { useEffect, useState } from 'react'

const URL ="http://localhost:4000/payment/getAll" 

const fetchHandler = async() => {
  return await axios.get(URL).then((res)=> res.data)
}

export default function PaymentRequest() {

  const [Annos, setAnnos] = useState();
  useEffect(()=>{
      fetchHandler().then((data)=>setAnnos(data.anno)); //here anno is the array name
  },[]);

  console.log(Annos);

  return (
    <div className='container'>
        <div className="row">
            
            <div className="col-2" id='col-2_left'>
                <h2>Wellcome</h2>
                <p>User #12345</p>
                <Link to="/userprofile">
                <button type="button" className='leftButtons'>Assign Driver</button>
                </Link>
                <br/>

                <Link to="/e">
                <button type="button" className='leftButtons'>Back To Main</button>
                </Link>
            </div>

            <div className="col-8" >
               <h5 className='public'>ASSIGN DRIVER</h5>
            <br/>
            <p className='scro'>

            <div className="row" id="cc">

            <div className="col-12">
{/* ---------------------Payment front end and backend connecting part------------------- */}
<ul>
                  {Annos && Annos.map((anno, i)=>(
                  <div key={i}>
                  <Pay anno={anno}/> 
                  </div>
                  )) }
                </ul>


            </div>
            </div>
                
            </p>

            </div>

            <div className="col-1" id='col-1_right'>
            
            <div className="right">

              <img src ="Admin.png" className='img' width="100" height="100"/>

              
                    <span >
                      Vehicle Id
                    </span>

                    <br/>
                    
                    <span >
                      64748487
                    </span>
        
            </div>
            </div>

        </div>

    </div>
  )
}


