import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../Styles/UserUpdate.css";

export default function UserUpdate() {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:4000/User/signupDetails/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.anno));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:4000/User/signupDetails/${id}`, {
        VehicleOwner: String(inputs.VehicleOwner),
        VehicleModel: String(inputs.VehicleModel),
        VehicleNumber: String(inputs.VehicleNumber),
        Type: String(inputs.Type),
        Seats: String(inputs.Seats),
        ID: String(inputs.ID),
        MNumber: String(inputs.MNumber),
        email: String(inputs.email),
        password: String(inputs.password),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/e"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <div className="row">
      <h5 className="VehicleUpdatePublic">UPDATE VEHICLE INFOMATION</h5>
        <div className="col-2">

          <button
            type="button"
            className="btn btn-outline-warning"
            id="UpdateVehicleInfo"
          >
            Delete Account
          </button>

          <br />
        </div>

        <div className="col-6">

          {inputs && (
            <form className="frm" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Vehicle Owner"
                className="field"
                required
                value={inputs.VehicleOwner}
                onChange={handleChange}
                name="VehicleOwner"
              />
              <input
                type="text"
                placeholder="Vehicle model"
                className="field"
                required
                value={inputs.VehicleModel}
                onChange={handleChange}
                name=" VehicleModel"
              />
              <input
                type="text"
                placeholder="Vehicle Type"
                className="field"
                required
                value={inputs.Type}
                onChange={handleChange}
                name=" Type"
              />
              <input
                type="text"
                placeholder="Number of Seats"
                className="field"
                required
                value={inputs.Seats}
                onChange={handleChange}
                name=" Seats"
              />
              <input
                type="text"
                placeholder="Owner's mobile number"
                className="field"
                required
                value={inputs.MNumber}
                onChange={handleChange}
                name=" MNumber"
              />

              {/* <input 
                type='text' 
                placeholder="New Email" 
                className='field2'
                required 
                value={inputs.email}
                onChange={handleChange}
                name='email'
              /> */}
              <input
                type="text"
                placeholder="New Password"
                className="field"
                required
                value={inputs.password}
                onChange={handleChange}
                name=" password"
              />
              <input
                type="text"
                placeholder="Existing Password"
                className="field"
                // required
                // value={inputs.MNumber}
                // onChange={handleChange}
                // name='MNumber'
              />

              {/* <button type="submit" className='pic'>Update</button>    */}
              <button type="button" className="btn btn-warning" id="btn1">
                UPDATE
              </button>
            </form>
          )}
        </div>

        <div className="col-4" id="picupdate">
          <div className="row">
            <div className="col-xl-4">
              <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src="http://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />

                  <div class="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>

                  <button class="btn btn-primary" type="button">
                    Upload new image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
