
import React, {Component} from 'react'
import './ViewOrders.css'
import { Link } from 'react-router-dom'

export default function ViewOrders() {

    // state={
    //     ProfileImg : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    
    // }


  return (
    <div className='container'>
        <div className="row">
            <div className="col-3">
                <h2>Wellcome</h2>
                <p>User #12345</p>
                <Link to="/userprofile">
                <button type="button" className='UpdateVehicle'>Vehicle Update</button>
                </Link>
                <br/>

                <button type="button" className='ViewOrders'>View Orders</button>
            </div>

            <div className="col-6" >
            <h5 className='public'>View Booking</h5>

            <div className="row">
            <div className="col-3">
                <div className="img2">
                <img src ="2.jpg"  width="150" className='imgBx' height="150"></img>
                </div>
           
            </div>

            <div className="col-9">
            <div className="List">
                <ul className="list-group">
                <li className="list-group-item disabled" aria-disabled="true">Booking 1</li>
                <li className="list-group-item">Booking 1</li>
                <li className="list-group-item">Booking 2</li>
                <li className="list-group-item">Booking 3</li>
                <li className="list-group-item">Booking 4</li>
                </ul>
            </div>
            </div>

            
            </div>
            
               
           
            

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


