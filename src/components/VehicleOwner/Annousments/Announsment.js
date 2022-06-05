import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Anno from './Anno';
import "./Annousment.css";

const URL ="http://localhost:4000/app/AddNewAnno" 

const fetchHandler = async() => {
  return await axios.get(URL).then((res)=> res.data)
}

export default function Announsment() {

  const [Annos, setAnnos] = useState();
  useEffect(()=>{
      fetchHandler().then((data)=>setAnnos(data.anno)); //here anno is the array name
  },[]);

  console.log(Annos);

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

            {/* best part */}
             <div className="col-6" >
                <h5 className='public'>Public Announcement</h5>


                <p className='scro'>
                  <div className="row" id="cc">
                    <div className="col-12">
                <ul>
                  {Annos && Annos.map((anno, i)=>(
                  <div key={i}>
                  <Anno anno={anno}/> 
                  </div>
                  )) }
                </ul>
                   </div>
                  </div>
                </p>
              </div>

                <div className="col-3">
            
                         <img src ="2.jpg"  className='imgBx' />
                        
            
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


