
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import "./UserProfile.css"

export default function UserProfile() {

    // state={
    //     ProfileImg : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    
    // }


  return (
    <div className='container'>
        <div className="row">
            <div className="col-3">
                <h2>Wellcome</h2>
                <p>User #12345</p>
                
               
                <button type="button" className='UpdateVehicle'>Delete Account</button>
               
                
                <br/>
                <Link to="/ViewOrders">
                <button type="button" className='ViewOrders'>View Orders</button>
                </Link>

                <br/>

                {/* <button type="button" className='DeleteProf'>Delete Profile</button> */}

            </div>

            <div className="col-6" >
              <div className="row" id="r">
                <div className="col-6">
                   <h2>Edit Photo</h2>
                </div>
                <div className="col-6" id="im">
                <button type="button" className='pic'>Update</button>
                </div>
              </div>
               
              
               {/* <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> */}
               <input type='text' placeholder="Vehicle Owner" className='field'/>
               <input type='text' placeholder="Vehicle model" className='field'/>
               <input type='text' placeholder="Vehicle Type" className='field'/>
               <input type='text' placeholder="Number of Seats" className='field'/>
               <input type='text' placeholder="Owner's mobile number" className='field'/>

               <input type='text' placeholder="New Email" className='field2'/>
               <input type='text' placeholder="New Password" className='field'/>
               <input type='text' placeholder="Existing Password" className='field'/>
            
            </div>

            <div className="col-3">
            <div className="img">
              <img src ="2.jpg"  width="150" className='imgBx' height="150"></img>
             </div>

             <div className="details">
             <div className="VId">
                    <span >Vehicle Id</span>
                    <br/>
                    <span >6474848*7</span>
                 </div>

                 <div className="VId">
                 <span >071 1234567</span>
                    <br/>
                    <span >mobile</span>
                 </div>

                 <div className="VId">
                 <span >Address</span>
                 </div>

                 
                 <div className="VId">
                 <span >Registration number</span>
                 </div>
             </div>

             
            </div>

        </div>

    </div>
  )
}


