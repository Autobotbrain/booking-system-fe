// import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import '../Styles/Profile.css'


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Anno from "./Anno";


const URL = "http://localhost:4000/app/AddNewAnno";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};

export default function VehicleOwnerProfile() {

    

    const [Annos, setAnnos] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setAnnos(data.anno)); //here anno is the array name
    }, []);

    console.log(Annos);

    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <h2 className="wellcome">WELLCOME</h2>

                    <Link to="/UserUpdate">
                        <button
                            type="button"
                            className="btn btn-outline-warning"
                            id="UpdateVehicle"
                        >
                            Vehicle Update
                        </button>
                    </Link>
                    <br />

                    <Link to="/ViewOrders">
                        <button
                            type="button"
                            className="btn btn-outline-warning"
                            id="UpdateVehicle"
                        >
                            View Orders
                        </button>
                    </Link>
                </div>

                {/* best part */}
                <div className="col-8">
                    <h5 className="VehiclePublic">Public Announcement</h5>

                    <p className="scro">
                        <div className="row" id="cc">
                            <div className="col-12">
                                <ul>
                                    {Annos &&
                                        Annos.map((anno, i) => (
                                            <div key={i}>
                                                <Anno anno={anno} />
                                            </div>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </p>
                </div>

                <div className="col-2">
                    <div className="card text-center" id="CardProfile">
                        <div className="card-header">
                            <img src="2.jpg" className="VehicleImg" />
                        </div>
                        <div class="card-body">

                            <div className="VehicalInfo"></div>

                            <hr />

                            <div className="VehicalInfo"></div>
                            <hr />

                            <div className="VehicalInfo"></div>
                            <hr />

                            <div className="VehicalInfo"></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

// export default class Profile extends Component {


//     constructor(){
        
//         super()
//         this.state={
//             first_name:'',
//             last_name:'',
//             email:''
//         }
        
        
//     }

//     componentDidMount(){
//         const token=localStorage.usertoken
//         const decode=jwtDecode(token)
//         this.setState({
//             first_name:decode.first_name,
//             last_name:decode.last_name,
//             email:decode.email
//         })
        
//         console.log(decode)
        
        
//     }

//     render() {
//         return (
            
//             <div className='container'>
//                 <div className='col-sm8 mx-auto'>
//                         <h1 className='text-center'>Profile</h1>
//                 </div>



//                 <div class="container bootstrap snippets bootdey">
//                     <div class="row">
//                         <div class="profile-nav col-md-3">
//                             <div class="panel">
//                                 <div class="user-heading round">
//                                     <a href="#">
//                                     <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
//                                     </a>
//                                     <h1>{this.state.first_name}</h1>
//                                     <p>{this.state.last_name}</p>
//                                 </div>

//                                 <ul class="nav nav-pills nav-stacked">
//                                     <li><a href="#"> <i class="fa fa-calendar"></i> Recent Activity <span class="label label-warning pull-right r-activity">9</span></a></li>
//                                     <li><a href="#"> <i class="fa fa-edit"></i> Edit profile</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//                 <div className='jumbotron mt-5'>
                    
//                     <table className='table col-md-6 mx-auto'>
//                         <h2>
//                             <tbody>
//                                 <tr>
//                                     <td>First Name:</td>
//                                     <td>{this.state.first_name}</td>
//                                 </tr>

//                                 <tr>
//                                     <td>Last Name:</td>
//                                     <td>{this.state.last_name}</td>
//                                 </tr>

//                                 <tr>
//                                     <td>Email:</td>
//                                     <td>{this.state.email}</td>
//                                 </tr>
//                             </tbody>
//                         </h2>
//                     </table>
//                 </div>

                

                









//             </div>
//         )
//     }
// }
