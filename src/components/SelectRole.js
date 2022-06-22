import React from "react";
import "../Styles/Role.css";
import { Link } from "react-router-dom";

export default function SelectRole() {
  return (
    <div className="DivContainer">
      <div className="RoleInfo">
        <h3>What role do you have?</h3>
        <h6>
          To start your project we need to customize your preferences.Please,
          select your user type.
        </h6>
      </div>

      <div className="card-deck">
        <Link to="/VehicleSignup">
          <button className="RoleButton">
            <div className="card">
              <img
                src="driver.jpg"
                class="card-img-top"
                alt="..."
                height={"250px"}
              />
              <div class="card-body">
                <h5 class="card-title">Driver Registration</h5>
                <p class="card-text">
                  The person who runs a group discussion or focus group. She or
                  he is responsible for ensuring the smooth running of the
                  discussion.
                </p>
              </div>
            </div>
          </button>
        </Link>

        <Link to="/VehicleSignup">
          <button className="RoleButton">
            <div className="card">
              <img src="vehicle.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Vehicle Registration</h5>
                <p class="card-text">
                  Provides financial information to management by researching
                  and analyzing accounting data; preparing reports.
                </p>
              </div>
            </div>
          </button>
        </Link>

        <Link to="/VehicleSignup">
          <button className="RoleButton">
            <div className="card">
              <img src="staff.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Staff Registration</h5>
                <p class="card-text">
                  User experience (UX) design is the process of creating
                  products that provide meaningful and relevant experiences to
                  users.
                </p>
              </div>
            </div>
          </button>
        </Link>

        <Link to="/VehicleSignup">
          <button className="RoleButton">
            <div className="card">
              <img src="student.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Student Registration</h5>
                <p class="card-text">
                  Engaged in all phases of the software development lifecycle
                  which include: gathering and analyzing user/business system
                  requirements.
                </p>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
