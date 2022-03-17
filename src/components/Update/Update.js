import React from 'react'
import './Update.css'
export default function Update() {
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-3">
            <h2>Wellcome</h2>
            <br></br>
            <h5>User #12345</h5>
            <br></br>
            <button type='button' className='addbooking'>Delete Account</button>
            <br></br>
            <br></br>
            <button type='button' className='viewShedule'>View Shedule Current</button>

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
               <input type='text' placeholder="Name" className='field'/>
               <input type='text' placeholder="Phone Number" className='field'/>
               <input type='text' placeholder="Address" className='field'/>
               <input type='text' placeholder="Company" className='field'/>
               

               <input type='text' placeholder="New Email" className='field2'/>
               <input type='text' placeholder="New Password" className='field'/>
               <input type='text' placeholder="Existing Password" className='field'/>
            
            </div>
        <div className="col-3">
        <div className="img">
        <img src ="12.jpg"  width="150" className='imgBx' height="150"></img>
             </div>

             <div className="details">
             <div className="VId">
                    <span >Name</span>
                    <br/>
                    <span >Jack</span>
                 </div>

                 <div className="VId">
                 <span >Phone Number</span>
                    <br/>
                    <span >0774590867</span>
                 </div>

                 <div className="VId">
                 <span >Address</span>
                 </div>

                 
                 <div className="VId">
                 <span >Company</span>
                 </div>
             
             </div>

             
            </div>
        </div>
     </div>


  )
}