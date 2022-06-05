import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom'

const URL ="http://localhost:4000/app/signup"

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data)
  }
  

export default function SignUp() {

const [Annos, setAnnos] = useState();
  useEffect(()=>{
      fetchHandler().then((data)=>setAnnos(data.Details)); //here anno is the array name
  },[]);

  console.log(Annos);

  return (
    <div>
          <div>
        <section>
          
          <div className="contentBx">
              <div className="formBx">

                <form className="form">

                <h2>Vehicle Sign up</h2>
                
                  <div className="inputBx">
                      

                      <input type='text' 
                      placeholder="Vehicle Owner" 
                    //   onChange={this.changeVehicleOwner}
                    //   value={this.state.VehicleOwner}
                      className='own'
                      required
                       />
                  </div>

                  <div className="inputBx">


                      <input type='text' 
                      placeholder="Vehicle Model" 
                    //   onChange={this.changeVehicleModel}
                    //   value={this.state.VehicleModel}
                      className='own'
                      required
                      />
                  </div>

                  <div className="inputBx">
                      {/* <span>Vehicle Number : </span> */}

                      <input type='text' 
                       placeholder="Vehicle Number" 
                    //   onChange={this.changeVehicleNumber}
                    //   value={this.state.VehicleNumber}
                      className='own'
                      required
                       />
                  </div>

                  <div className="inputBx">
                      {/* <span>Vehicle Type : </span> */}

                      <input type='text' 
                      placeholder="Vehicle Type" 
                    //   onChange={this.changeType}  
                    //   value={this.state.Type} 
                      className='own'
                      required
                      />
                  </div>

                  <div className="inputBx">
                      {/* <span>Number of Seats : </span> */}

                      <input type='text' 
                      placeholder="Number of Seats" 
                    //   onChange={this.changeSeats}
                    //   value={this.state.VehicleSeats}
                      className='own'
                      id="noSeats"
                      required
                />
                  </div>

                  <div className="inputBx">
                      {/* <span>Owner's ID Number : </span> */}

                      <input type='text' 
                      placeholder="Owner's ID Number" 
                    //   onChange={this.changeID}
                    //   value={this.state.ID}
                      className='own'
                      required
                />
                  </div>

                  <div className="inputBx">
                      {/* <span>Owner's Mobile Number : </span> */}

                      <input type='text' 
                      placeholder="Owner's Mobile Number" 
                    //   onChange={this.changeMNumber}
                    //   value={this.state.MNumber}
                      className='own'
                      required
                />
                  </div>
                  
                  <div className="inputBx">
                      {/* <span>Email : </span> */}

                      <input type='email' 
                      placeholder="E-mail" 
                    //   onChange={this.changeEmail}
                    //   value={this.state.email}
                      className='own'
                      required
                      />
                  </div>

                  <div className="inputBx">
                      {/* <span>password : </span> */}

                      <input type='password' 
                      placeholder="password" 
                    //    onChange={this.changePassword}
                    //   value={this.state.password}
                      className='own'
                      required
                      />
                  </div>

                  <div className="inputBx">
                      {/* <span>password : </span> */}

                      <input type='password' 
                      placeholder="Conform password" 
                       //  onChange={this.changePassword}
                      // value={this.state.password}
                      className='own'
                      required
                      />
                  </div> 
               
                
                <input type='submit' className="btn" value='SIGN UP ME'/>
               
                  

                </form>
              </div>
          </div>

          <div className="imgBx">
              <img src ="2.jpg"/>
          </div>
        </section>
          
        </div>
    </div>
  )
}
