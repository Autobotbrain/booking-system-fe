
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/VehicleSignUp.css";


export default function VehicleSignUp() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        VehicleOwner: "",
        VehicleModel: "",
        VehicleNumber: "",
        Type: "",
        Seats: "",
        ID: "",
        MNumber: "",
        email: "",
        password: "",
        ConformPassword: "",
        tag:"vehicle"
    });

    const [errorInput1, SetErrorInput] = useState("");

    const handleChange = (e) => {
        console.log(inputs);
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    //SUCCESSFULL VALIDATION
    const [message, setMessage] = useState("");

    const handlValidation = () => {
        setMessage("REGISTRATION SUCCESSFULL");
    };

    const [ErrMessage, setErrMessage] = useState("");

    const sendRequest = async () => {
        //leets validatoin
        const re = /^[A-Za-z]+$/;
        // const number = /^[0-9]+$/;
        //email validatio
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!inputs.VehicleOwner) {
            alert("Vehicle Owners Name is required");
        } else if (!re.test(inputs.VehicleOwner)) {
            alert("Enter only letters");
        } else if (!inputs.VehicleModel) {
            alert("Vehicle Model is required");
        } else if (!inputs.VehicleNumber) {
            alert("Vehicle Number is required");
        } else if (!inputs.Type) {
            alert("Type is required");
        } else if (!inputs.Seats) {
            alert("Seats are required");
        } else if (!inputs.ID) {
            alert("NIC is required");
        } else if (!inputs.MNumber) {
            alert("Phone  number is required");
        } else if (inputs.MNumber.length < 10) {
            alert("Phone  number should have 10 characters ");
        } else if (!regex.test(inputs.email)) {
            alert("Ëmail is not valid");
        } else if (!inputs.email) {
            alert("Ëmail is required");
        } else if (!inputs.password) {
            alert("Password is required");
        } else if (inputs.password.length < 4 || inputs.password.length > 10) {
            alert("Password more than 4 characters");
        }
        // else if (inputs.password.match(inputs.ConformPassword))
        // {
        //     alert("Password is not matching");
        // }
        else {
            await axios
                .post("http://localhost:4000/VehicleOwner/signupDetails", {
                    VehicleOwner: String(inputs.VehicleOwner),
                    VehicleModel: String(inputs.VehicleModel),
                    VehicleNumber: String(inputs.VehicleNumber),
                    Type: String(inputs.Type),
                    Seats: Number(inputs.Seats),
                    ID: String(inputs.ID),
                    MNumber: Number(inputs.MNumber),
                    email: String(inputs.email),
                    password: String(inputs.password),
                    //ConformPassword: String(inputs.ConformPassword),
                    tag:String(inputs.tag)
                })
                .then(res=>{
                    console.log(res.data)
                    
                   // setErrMessage(res.data)
    
                })
                

            //CAllING VALIDITY FUNCTIONS
            handlValidation();
            // window.location.reload(2000);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        sendRequest()
        // .then(() => history("/login"));
    };

    

    return (
        <div>
            <div className="validity"> {message}</div>
            <div className="Errvalidity"> {ErrMessage}</div>

            <div>
                <section>
                    <div className="contentBx">
                        <div className="formBx">
                            <form className="SignupForm" onSubmit={handleSubmit}>
                                <h2>Vehicle Sign up</h2>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Vehicle Owner"
                                        className="own"
                                        value={inputs.VehicleOwner}
                                        onChange={handleChange}
                                        // required
                                        name="VehicleOwner"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Vehicle Model"
                                        className="own"
                                        value={inputs.VehicleModel}
                                        onChange={handleChange}
                                        // required
                                        name="VehicleModel"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Vehicle Number"
                                        className="own"
                                        value={inputs.VehicleNumber}
                                        onChange={handleChange}
                                        name="VehicleNumber"
                                    />
                                    <p>{errorInput1}</p>
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Vehicle Type"
                                        className="own"
                                        value={inputs.Type}
                                        onChange={handleChange}
                                        // required
                                        name="Type"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Number of Seats"
                                        className="own"
                                        value={inputs.Seats}
                                        onChange={handleChange}
                                        id="noSeats"
                                        // required
                                        name="Seats"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Owner's ID Number"
                                        className="own"
                                        value={inputs.ID}
                                        onChange={handleChange}
                                        // required
                                        name="ID"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Owner's Mobile Number"
                                        className="own"
                                        value={inputs.MNumber}
                                        onChange={handleChange}
                                        // required
                                        name="MNumber"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="own"
                                        value={inputs.email}
                                        onChange={handleChange}
                                        // required
                                        name="email"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="own"
                                        value={inputs.password}
                                        onChange={handleChange}
                                        // required
                                        name="password"
                                    />
                                </div>

                                {/* <div className="SignupInputBox">
                  <input
                    type="password"
                    placeholder="Conform password"
                    className="own"
                    value={inputs.ConformPassword}
                    onChange={handleChange}
                    required
                  />
                </div> */}

                                <input
                                    type="submit"
                                    className="SignupButton"
                                    value="SIGN UP ME"
                                />
                            </form>
                        </div>
                    </div>

                    <div className="imgBx">
                        <img src={require('../assets/2.jpg')} />
                    </div>
                </section>
            </div>
        </div>
    );
}
