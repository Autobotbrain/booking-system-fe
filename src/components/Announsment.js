import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Anno from "./Anno";
import "../Styles/Annousment.css";
import jwtDecode from 'jwt-decode'

const URL = "http://localhost:4000/app/AddNewAnno";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};



export default function Announsment() {
    

    const token = localStorage.usertoken
    const decode = jwtDecode(token)
    
    let user= {
        _id:decode._id,
        email:decode.email,
        VehicleOwner:decode.VehicleOwner,
        VehicleModel:decode.VehicleModel,
        Type:decode.Type,
        Seats:decode.Seats,
        ID:decode.ID,
        MNumber:decode.MNumber,
        Date:decode.Date,
        tag:decode.tag

    }
    console.log(user)



    const [Annos, setAnnos] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setAnnos(data.anno)); //here anno is the array name
    }, []);

    // console.log(Annos);

    return (
        <div className="containerAdmin">
            <div className="row">
                <div className="col-2">
                    <div className="wellcome">
                    <h2>Hello</h2>
                    <h3> {user.VehicleOwner}</h3>
                    </div>
                    

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
                <div className="col-8" >
                    <h5 className="VehiclePublic">Public Announcement</h5>

                    
                    <p className="scro" id="AnnoBar">
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
                        <img className='VehicleImgAdmin' src={require('../assets/2.jpg')} />
                        </div>
                        <div class="card-body">

                            <div className="VehicalInfoAdmin"><h4 className="VehicaltextAdmin">Vehicle Owner {user.VehicleOwner}</h4></div>

                            <hr />

                            <div className="VehicalInfoAdmin"><h4 className="VehicaltextAdmin">Vehicle Model {user.VehicleModel}</h4></div>
                            <hr />

                            <div className="VehicalInfoAdmin"><h4 className="VehicaltextAdmin">Owners NIC {user.ID}</h4></div>
                            <hr />

                            <div className="VehicalInfoAdmin"><h4 className="VehicaltextAdmin">Number of seats {user.Seats}</h4></div>
                            
                            <hr />
                            <div className="VehicalInfoAdmin"><h4 className="VehicaltextAdmin">Tel Number {user.MNumber}</h4></div>
                        
                            <hr />
                            <div className="VehicalInfoAdmin"><h4 className="VehicaltextAdmin">Vehicle Type {user.Type}</h4></div>
                        
                       
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}