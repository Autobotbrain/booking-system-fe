//----------public annousment public page------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Anno from "./Anno";

const URL = "http://localhost:4000/app/AddNewAnno";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

export default function EditAnnousment() {
  const [Annos, setAnnos] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setAnnos(data.anno)); //here anno is the array name
  }, []);

  console.log(Annos);

  return (
    // Left Side Buttons

    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="wellcomeId"></div>

          {/* FeedBack Page */}
          <Link to="/feedback">
            <button type="button" id="RightButtons">
              FeedBacks
            </button>
          </Link>
          <br />

          {/* Payment Page */}
          <Link to="/PaymentRequest">
            <button
              type="button"
              className="btn btn-outline-warning"
              id="RightButtons"
            >
              PAYMENT REQUEST
            </button>
          </Link>

          {/* View Orders page */}
          <Link to="/ViewOrders">
            <button type="button" id="RightButtons">
              View Daily Routes Info
            </button>
          </Link>
        </div>

        {/* Center(Best Part) */}

        <div className="col-8">
          <h5 className="AdminPublic">Public Announcement</h5>
          <Link to="/AddNewAnno">
            <button type="button" className="btn btn-warning newblog-button">
              Add New Announcement
            </button>
          </Link>

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

        {/* Left hand Side    */}

        <div className="col-2">
          <div className="right">
            <img src="Admin.png" className="img" />

            <Link to="/AssignDrivers">
              <button
                type="button"
                className="btn btn-outline-warning"
                id="RightButtons"
              >
                EDIT ROUTES
              </button>
            </Link>

            <Link to="/ViewOrders">
              <button type="button" id="RightButtons">
                View/Edit Hires(Seates)
              </button>
            </Link>

            <Link to="/ViewOrders">
              <button
                type="button"
                className="btn btn-outline-warning"
                id="RightButtons"
              >
                CHECK VEHICLES REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
