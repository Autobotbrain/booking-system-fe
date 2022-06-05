
import React, {Component} from 'react'
import { Link, useParams } from 'react-router-dom'
import "./UserProfile.css"
import axios from 'axios';

export default function UserProfile() {

  const id= useParams().id;
  const sendRequest= async()=>{
  await axios.get(`http://localhost:4000/app/signup/${id}`,{
    
  });
}

  return (
    <div className='container'>
        <div className="row">
            <div className="col-3">
                <h2>Wellcome</h2>
                <p>User #12345</p>
                
               
                <button type="button" className='UpdateVehicle'>Delete Account</button>
               
                <Link to="/ViewOrders">
                <button type="button" className='ViewOrders'>View Orders</button>
                </Link>

                <br/>


            </div>

            <div className="col-6">

              <h5 className='public'>UPDATE VEHICLE</h5>

               <button type="button" className='pic'>Update</button>
              
              <from className="Form">
               <input type='text' placeholder="Vehicle Owner" className='field'/>
               <input type='text' placeholder="Vehicle model" className='field'/>
               <input type='text' placeholder="Vehicle Type" className='field'/>
               <input type='text' placeholder="Number of Seats" className='field'/>
               <input type='text' placeholder="Owner's mobile number" className='field'/>

               <input type='text' placeholder="New Email" className='field2'/>
               <input type='text' placeholder="New Password" className='field'/>
               <input type='text' placeholder="Existing Password" className='field'/>
              </from>
               
            </div>

            <div className="col-3">
            
              <img src ="2.jpg"  width="150" className='imgBx' height="150"/>
            

             <div className="details">
             <div className="VId">
                    {/* <span >Vehicle Id</span>
                    <br/>
                    <span >6474848*7</span> */}
                 </div>

                 <div className="VId">
                 {/* <span >071 1234567</span>
                    <br/>
                    <span >mobile</span> */}
                 </div>

                 <div className="VId">
                 {/* <span >Address</span> */}
                 </div>

                 
                 <div className="VId">
                 {/* <span >Registration number</span> */}
                 </div>
             </div>

             
            </div>

        </div>

    </div>
  )
}


