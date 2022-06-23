import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../Styles/StaffSignup.css"

  

export default function StaffSignup() {



const history = useNavigate();
  const [inputs, setInputs] = useState({
      firstName:'',
      lastName:'',
      phoneNumber:'',
      nic:'',
      city:'',
      company:'',
      email:'',
      password:'',
      tag:"staff"
  });

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


  const sendRequest = async () => {

    const re = /^[A-Za-z]+$/;
    // const number = /^[0-9]+$/;
    //email validatio
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!inputs.firstName) 
    {
      alert("firstName is required");
    } 
    else if (!re.test(inputs.firstName)) 
    {
      alert("Enter only letters");
    } 
    else if (!inputs.lastName) 
    {
      alert("lastName is required");
    } 
    else if (!re.test(inputs.lastName)) 
    {
        alert("Enter only letters");
    } 
    else if (!inputs.phoneNumber) 
    {
      alert("Phone  number is required");
    } 
    else if (inputs.phoneNumber.length < 10) 
    {
      alert("Phone  number should have 10 characters ");
    }
    else if (!inputs.nic) 
    {
      alert("NIC is required");
    } 
    else if (!inputs.city) 
    {
      alert("city Model is required");
    } 
    else if (!regex.test(inputs.email)) 
    {
      alert("Ëmail is not valid");
    } 
    else if (!inputs.email) 
    {
      alert("Ëmail is required");
    } 
    else if (!inputs.password) 
    {
      alert("Password is required");
    } 
    else if (inputs.password.length < 6 || inputs.password.length > 10) 
    {
      alert("Password should be more than 6 characters");
    }
   
    else {
  
      await axios
      .post("http://localhost:4000/staffmemberRoute/signupDetails", {
        firstName: String(inputs.firstName),
        lastName: String(inputs.lastName),
        phoneNumber: String(inputs.phoneNumber),
        nic: String(inputs.nic),
        city: String(inputs.city),
        company: String(inputs.company),
        email: String(inputs.email),
        password: String(inputs.password),
        confirmPassword: String(inputs.confirmPassword),
        tag:String(inputs.tag)
      })
      .then(res=>{
        console.log(res.data)
        
       // setErrMessage(res.data)

    })
    
      //CAllING VALIDITY FUNCTIONS
      handlValidation();
      //window.location.reload(2000);
    }
  };

  const handleSubmit = (e) => {
    console.log(inputs);
    e.preventDefault();
    sendRequest();
     //reload the window with empty fields
    
  };


  return (
    <div>
      <div className="validity"> {message}</div>
          <div>
        <section>
          
          <div className="contentBx">
              <div className="formBx">

                <form className="SignupForm" onSubmit={handleSubmit} >

                <h2>Staff-member Sign up</h2>
                
                  <div className="SignupInputBox">
                      

                      <input type='text' 
                      placeholder="firstName" 
                      className='own'
                      value={inputs.firstName}
                      onChange={handleChange}
                      // required
                      name='firstName'
                       />
                      
                  </div>

                  <div className="SignupInputBox">


                      <input type='text' 
                      placeholder="lastName" 
                      className='own'
                      value={inputs.lastName}
                      onChange={handleChange}
                      // required
                      name='lastName'
                      />
                  </div>

                  <div className="SignupInputBox">
                      <input type='text' 
                       placeholder="phoneNumber" 
                      className='own'
                      value={inputs.phoneNumber}
                      onChange={handleChange}
                      // required
                      name='phoneNumber'
                       />
                  </div>

                  <div className="SignupInputBox">
                      <input type='text' 
                      placeholder="nic" 
                      className='own'
                      value={inputs.nic}
                      onChange={handleChange}
                      // required
                      name='nic'
                />
                  </div>

                  <div className="SignupInputBox">
                      <input type='text' 
                      placeholder="city" 
                      className='own'
                      value={inputs.city}
                      onChange={handleChange}
                      // required
                      name='city'
                />
                  </div>
                  <div className="SignupInputBox">
                      <input type='text' 
                      placeholder="company" 
                      className='own'
                      value={inputs.company}
                      onChange={handleChange}
                      // required
                      name='company'
                      />
                  </div>

                  <div className="SignupInputBox">
                      <input type='text' 
                      placeholder="email" 
                      className='own'
                      value={inputs.email}
                      onChange={handleChange}
                      // required
                      name='email'
                      />
                  </div>

                  <div className="SignupInputBox">
                      <input type='text' 
                      placeholder="password" 
                      className='own'
                      value={inputs.password}
                      onChange={handleChange}
                      id="noSeats"
                      // required
                      name='password'
                />
                  </div>
                  
                  
                
                <input type='submit' className="SignupButton" value='SIGN UP ME' />
               
                  

                </form>
              </div>
          </div>

          <div className="imgBx">
                        <img src={require('../assets/staff4.jpg')} />
          </div>
        </section>
          
        </div>
    </div>
  )
}
