import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "../../Styles/SchoolStudent.css";
import "../../Styles/Annousment.css";
import School from "./School";

const URL = "http://localhost:4000/app/AddNewAnno";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

export default function SchoolStudent() {
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
              ADD BOOKING
            </button>
          </Link>
          <br />

          <Link to="/ViewOrders">
            <button
              type="button"
              className="btn btn-outline-warning"
              id="UpdateVehicle"
            >
              VIEW SHEDULE
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
                        <School anno={anno} />
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
              <img   className="VehicleImg" />
            </div>
            <div class="card-body">
            
              <div className="schoolInfo"></div>

              <hr />

              <div className="schoolInfo"></div>
              <hr />

              <div className="schoolInfo"></div>
              <hr />

              <div className="schoolInfo"></div>
            </div>
           
          </div>

        </div>
      </div>
    </div>
  );
}
