import axios from 'axios';
import React from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "../Styles/DriverSignup.css";

export default function DriverSignup() {
  const [inputs, setInputs] = useState({
        
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        //ConfirmPassword,
        phone_number:'',
        nic_number:'',
        driving_licence_id:'',
        address:'',
        tag:"driver"


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
        console.log("error occur ");
        //leets validatoin
        const re = /^[A-Za-z]+$/;
        //const number = /^[0-9]+$/;
        //email validatio
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!inputs.firstname) {
            alert("Driver first Name is required");
        } else if (!re.test(inputs.lastname)) {
            alert("Driver last Name is required");      
        } else if (!re.test(inputs.firstname)) {
            alert("Enter only letters");
          } else if (!re.test(inputs.lastname)) {
            alert("Enter only letters");
        } else if (!inputs.email) {
            alert("Ëmail is required");
        } else if (!inputs.password) {
            alert("Password is required");
        } else if (inputs.password.length < 4 || inputs.password.length > 10) {
            alert("Password more than 4 characters");
        } else if (!inputs. phone_number) {
            alert("Phone  number is required");
        } else if (inputs.phone_number.length < 10) {
            alert("Phone  number should have 10 characters ");
        } else if (!inputs.nic_number) {
            alert("NIC is required");
        } else if (!inputs.driving_licence_id) {
            alert("Driving_Licence_Id is required");
        }else if (!inputs.address) {
            alert("Address is required");
            }
        // else if (inputs.password.match(inputs.ConformPassword))
        // {
        //     alert("Password is not matching");
        // }
        else {
            await axios
                .post("http://localhost:4000/DriverSignup/signupDetails", {
                  firstname: String(inputs.firstname),
                  lastname: String(inputs.lastname),
                  email:String(inputs.email),
                  password: String(inputs.password),
                  //ConfirmPassword: String(inputs.ConfirmPassword),
                  phone_number: Number(inputs.phone_number),
                  nic_number: String(inputs.nic_number),
                  driving_licence_id: String(inputs.driving_licence_id),
                  address: String(inputs.address),
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
                {/* <section> */}
                    <div className="container">
                    <div className="imgs"> <img src='https://www.clabservice.com/wp-content/uploads/2017/03/driver.jpg'></img></div>
                        <div className="left">
                            <form className="Signup" onSubmit={handleSubmit}>
                                <h2>Driver Sign up</h2>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="FirstName"
                                        className="own"
                                        value={inputs.firstname}
                                        onChange={handleChange}
                                        // required
                                        name="firstname"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                       type="text"
                                       placeholder="LastName"
                                       className="own"
                                       value={inputs.lastname}
                                       onChange={handleChange}
                                       // required
                                       name="lastname"   
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
                                        placeholder="Confirmpassword"
                                        className="own"
                                        value={inputs.ConfirmPassword}
                                        onChange={handleChange}
                                        // required
                                        name="ConfirmPassword"
                                    />
                                </div> */}
                               
                               
                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Driver's Mobile Number"
                                        className="own"
                                        value={inputs.phone_number}
                                        onChange={handleChange}
                                        // required
                                        name="phone_number"
                                    />
                                </div>
                               

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Driver's NIC Number"
                                        className="own"
                                        value={inputs.nic_number}
                                        onChange={handleChange}
                                        // required
                                        name="nic_number"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Driver's Driving_Licence Id"
                                        className="own"
                                        value={inputs.driving_licence_id}
                                        onChange={handleChange}
                                        // required
                                        name="driving_licence_id"
                                    />
                                </div>

                                <div className="SignupInputBox">
                                    <input
                                        type="text"
                                        placeholder="Driver's Address"
                                        className="own"
                                        value={inputs.address}
                                        onChange={handleChange}
                                        // required
                                        name="address"
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
                {/* </section> */}
            </div>
        </div>
    );
}
