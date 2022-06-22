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
    console.log(user.name)



    const [Annos, setAnnos] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setAnnos(data.anno)); //here anno is the array name
    }, []);

    // console.log(Annos);

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

                            <div className="VehicalInfo"> {user.VehicleOwner}</div>
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