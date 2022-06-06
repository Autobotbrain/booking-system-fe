
// import React, {Component} from 'react'
// import "../../../components/VehicleOwner/Annousments/Annousment.css"
// import { Link } from 'react-router-dom'

// //23/5/2022
// import { useState } from 'react';
// import Anno_List from './Anno_List';

// export default function EditAnnounsment() {

//   //23/5/2022
//   const [Annousments, setAnnounsment] = useState([
//     {title:'new news',body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates explicabo minima nesciunt,quae harum commodi magnam sint ducimus necessitatibus, molestiae neque, vel quisquam obcaecati dolorealiquid quia eveniet exercitationem!', id:1},
//     {title:'new news',body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates explicabo minima nesciunt,quae harum commodi magnam sint ducimus necessitatibus, molestiae neque, vel quisquam obcaecati dolorealiquid quia eveniet exercitationem!', id:2},
//     {title:'new news',body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates explicabo minima nesciunt,quae harum commodi magnam sint ducimus necessitatibus, molestiae neque, vel quisquam obcaecati dolorealiquid quia eveniet exercitationem!', id:3},

//   ])

//   const handleDelete = (id) => {
//         const newAnno = Annousments.filter(x => x.id !== id); 
//         setAnnounsment(newAnno);
//       }



//   return (
//     <div className='container'>
//         <div className="row">
            
//             <div className="col-3">
//                 <h2>Wellcome</h2>
//                 <p>User #12345</p>
//                 <Link to="/AssignDrivers">
//                 <button type="button" className='leftButtons'>Assign Drivers</button>
//                 </Link>
//                 <br/>

//                 <Link to="/ViewOrders">
//                 <button type="button" className='leftButtons'>View/Edit Hires(Seates)</button>
//                 </Link>

//                 <Link to="/ViewOrders">
//                 <button type="button" className='leftButtons'>View Hires(Current)</button>
//                 </Link>
//             </div>

//             <div className="col-6" >
//                <h5 className='public'>Edit Public Announcements</h5>
//                <Link to="/AddNewAnno">
//                    <button className='newblog-button'>Add New Announsment</button>
//                </Link>
              
//             <br/>
//             <p className='scro'>

//             <div className="row" id="cc">
//             {/* <div className="col-4">
          
//             </div> */}

//             <div className="col-12">
 
//               <Anno_List Annousments={Annousments} handleDelete={handleDelete}/> 
//             </div>
//             </div>
                
//             </p>

//             </div>

//             <div className="col-3">
            
//             <div className="right">

//               <img src ="Admin.png" className='img' width="100" height="100"/>

              
//                     <span >Vehicle Id</span>
//                     <br/>
//                     <span >6474848*7</span>
             


//                 <Link to="/AssignDrivers">
//                 <button type="button" className='RightButtons'>EDIT ROUTES</button>
//                 </Link>

//                 <Link to="/PaymentRequest">
//                 <button type="button" className='RightButtons'>PAYMENT REQUEST</button>
//                 </Link>

//                 <Link to="/ViewOrders">
//                 <button type="button" className='RightButtons'>CHECK VEHICLES REGISTER</button>
//                 </Link>
//             </div>


             
//             </div>

//         </div>

//     </div>
//   )
// }


//----------public annousment public page------------

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Anno from './Anno';

const URL ="http://localhost:4000/app/AddNewAnno" 

const fetchHandler = async() => {
  return await axios.get(URL).then((res)=> res.data)
}

export default function EditAnnousment() {

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
                 <Link to="/AssignDrivers">
                 <button type="button" className='leftButtons'>Assign Drivers</button>
                 </Link>
                 <br/>

                 <Link to="/ViewOrders">
                 <button type="button" className='leftButtons'>View/Edit Hires(Seates)</button>
                 </Link>

                 <Link to="/ViewOrders">
                 <button type="button" className='leftButtons'>View Hires(Current)</button>
                 </Link>
             </div>



            {/* best part */}
             <div className="col-6" >
                <h5 className='public'>Public Announcement</h5>
                <Link to="/AddNewAnno">
                    <button className='newblog-button'>Add New Announsment</button>
                </Link>

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

            

             {/* Left hand Side    */}
              <div className="col-3">
            
             <div className="right">

               <img src ="Admin.png" className='img'/>

              
                     {/* <span >Vehicle Id</span>
                     <br/>
                     <span >6474848*7</span> */}
             


                 <Link to="/AssignDrivers">
                 <button type="button" className='RightButtons'>EDIT ROUTES</button>
                 </Link>

                 <Link to="/PaymentRequest">
                 <button type="button" className='RightButtons'>PAYMENT REQUEST</button>
                 </Link>

                 <Link to="/ViewOrders">
                 <button type="button" className='RightButtons'>CHECK VEHICLES REGISTER</button>
                 </Link>
             </div>
            </div>
            </div>
   </div>
  )
}





