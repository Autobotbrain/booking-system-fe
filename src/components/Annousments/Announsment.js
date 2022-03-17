
import React, {Component} from 'react'
import "./Annousment.css"
import { Link } from 'react-router-dom'

export default function Announsment() {

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

                <Link to="/ViewOrders">
                <button type="button" className='ViewOrders'>View Orders</button>
                </Link>
            </div>

            <div className="col-6" >
               <h5 className='public'>Public Announcement</h5>
            <br/>
            <p className='scro'>

            <div className="row" id="cc">
            <div className="col-4">
            <img src ="1.jpg"  width="20" className='imgBx' height="20"></img>
            <div className="img">
              <img src ="2.jpg"  width="20" className='imgBx' height="20"></img>
             </div>
            </div>

            <div className="col-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates explicabo minima nesciunt,
                 quae harum commodi magnam sint ducimus necessitatibus, molestiae neque, vel quisquam obcaecati dolore
                aliquid quia eveniet exercitationem!

                <br/>
                <br/>


                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque impedit quae. 
                Similique consequuntur tenetur culpa impedit omnis aliquam, 
                earum inventore placeat quisquam itaque! Nesciunt aperiam facere pariatur maiores exercitationem?

                <br/>
                <br/>


                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque impedit quae. 
                Similique consequuntur tenetur culpa impedit omnis aliquam, 
                earum inventore placeat quisquam itaque! Nesciunt aperiam facere pariatur maiores exe

                <br/>
                <br/>


                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque impedit quae. 
                Similique consequuntur tenetur culpa impedit omnis aliquam, 
                earum inventore placeat quisquam itaque! Nesciunt aperiam facere pariatur maiores exercitationem?

                <br/>
                <br/>

                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti vero ad, quaerat nemo facilis
                 quod laborum numquam enim odit nam neque amet dignissimos iure voluptates? Nemo tempora vitae amet 
                 quisquam.


                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque impedit quae. 
                Similique consequuntur tenetur culpa impedit omnis aliquam, 
                earum inventore placeat quisquam itaque! Nesciunt aperiam facere pariatur maiores exe
            </div>
            </div>
                
            </p>

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


