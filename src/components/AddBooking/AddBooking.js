import React from 'react'
import './AddBooking.css';
import {Link} from 'react-router-dom';

export default function AddBooking() {
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-3">
            <h2>Wellcome</h2>
            <br></br>
            <h5>User #12345</h5>
            <br></br>
            <button type='button' className='addbooking1'>ADD BOOKING New</button>
            <br></br>
            <br></br>
            <button type='button' className='viewShedule1'>View Shedule Current</button>

        </div>
        <div className="col-6">
            <h5 className='public'>Add Booking</h5>
            <br/>
            <input type='text' placeholder="From" className='field3'/>
            <br></br>
               <input type='text' placeholder="To" className='field3'/>
               <br/>
               <input type='text' placeholder="Time" className='field3'/>
               <br/>
               <input type='text' placeholder="No of Seats" className='field3'/>
               <br/>
               <br/>

             <label for="cars">Choose available vehicle:</label>
            <select id="cars" name="carlist" form="carform">
              <option value="volvo">Bus</option>
              <option value="saab">Van</option>
              <option value="opel">Car</option>
              <option value="audi">Audi</option>
            </select>
            <br/>

            <Link to="/Payment"> 
               <button type='button' className='Payment'>Confirm Booking</button>
               </Link>
  

              

               
            

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