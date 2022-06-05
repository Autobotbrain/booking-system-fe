
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import "../AssignDrivers/AssignDriver.css"

export default function PaymentRequest() {


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
        
                <ul className="list-driver">
                <li className="list-Driver-item disabled" aria-disabled="true"></li>
                <li className="list-Driver-item"></li>
                <li className="list-Driver-item"></li>
                <li className="list-Driver-item"></li>
                <li className="list-Driver-item"></li>
                <li className="list-Driver-item"></li>
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


