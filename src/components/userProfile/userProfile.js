import React from 'react'
import './userProfile.css';
import {Link} from 'react-router-dom'

export default function UserProfile() {
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-3">
            <h2>Wellcome</h2>
            <br></br>
            <h5>User #12345</h5>
            <br></br>
            
            <Link to="/addbooking">
              <button type='button' className='addbooking'>Add Booking New</button>
              </Link>
              {/* <button type='button' className='addbooking'>Add Booking New</button> */}
            
            <br></br>
      
            <button type='button' className='viewShedule'>View Shedule Current</button>

            <br></br>
            <Link to="/update">
            <button type='button' className='Update'>Update Profile</button>
            </Link>

        </div>
        <div className="col-6">
            <h5 className='public'>Public Announcement</h5>
            <br/>
            <p className='scro'>

              <div className='row'>
                <div className='col-4'>

                </div>

                <div className='col-8'>
                *We have now drafted the work schedule for the Christmas holiday season. 
              We have tried to accommodate requests made in advance for certain days 
              off and have attempted to make the schedule as fair as possible. Anyone
               who wishes to make a change in his or her schedule is responsible for 
               finding a replacement and getting approval from a supervisor.

               <br/>
               <br/>

              We hope this schedule will adequately cover our staffing needs while allowing
              our employees as much time as possible to spend with their families. We appreciate
               your support and cooperation in this matter.
                <br/>
                <br/>
                
                *We have now drafted the work schedule for the Christmas holiday season. We have tried to 
                accommodate requests made in advance for certain days off and have attempted to make the 
                schedule as fair as possible. Anyone who wishes to make a change in his or her schedule is
                 responsible for finding a replacement and getting approval from a supervisor.

                 <br/>
                 <br/>

                We hope this schedule will adequately cover our staffing needs while allowing our employees as much 
                 time as possible to spend with their families. We appreciate your support and cooperation in this matter.
                 <br/>
                 <br/>
                 We will follow the schedule below for the holiday season. An X indicates a work day. 
                 Please mark your calendars (For this example, create a row of holiday dates, 
                 a column of employee names, and mark an X in the cell when the employee should work)
                  
                  </div>
              </div>

             </p>

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