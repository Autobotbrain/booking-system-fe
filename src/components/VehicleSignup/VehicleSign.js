import React, {Component} from "react";
import axios from 'axios';
//import './App.css';
import './new.css';

class VehicleSign extends Component {
  constructor(){
    super()
    this.state ={
      VehicleOwner:'',
      VehicleModel:'',
      VehicleNumber:'',
      Type:'',
      Seats:'',
      ID:'',
      MNumber:'',
      email:'',
      password:''
    }

    this.changeVehicleOwner= this.changeVehicleOwner.bind(this)
    this.changeVehicleModel= this.changeVehicleModel.bind(this)
    this.changeVehicleNumber= this.changeVehicleNumber.bind(this)
    this.changeType= this.changeType.bind(this)
    this.changeSeats= this.changeSeats.bind(this)
    this.changeID= this.changeID.bind(this)
    this.changeMNumber= this.changeMNumber.bind(this)
    this.changeEmail= this.changeEmail.bind(this)
    this.changePassword= this.changePassword.bind(this)
    this.onSubmit=this.onSubmit.bind(this)

  }

  changeVehicleOwner(event){
    this.setState({
      VehicleOwner:event.target.value
    })
  }

  changeVehicleModel(event){
    this.setState({
      VehicleModel:event.target.value
    })
  }

  changeVehicleNumber(event){
    this.setState({
      VehicleNumber:event.target.value
    })
  }

  changeType(event){
    this.setState({
      Type:event.target.value
    })
  }

  changeSeats(event){
    this.setState({
      Seats:event.target.value
    })
  }

  changeID(event){
    this.setState({
      ID:event.target.value
    })
  }

  changeMNumber(event){
    this.setState({
      MNumber:event.target.value
    })
  }

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const registered={
      VehicleOwner:this.state.VehicleOwner,
      VehicleModel:this.state.VehicleModel,
      VehicleNumber:this.state.VehicleNumber,
      Type:this.state.Type,
      Seats:this.state.Seats,
      ID:this.state.ID,
      MNumber:this.state.MNumber,
      email:this.state.email,
      password:this.state.password
    }

    axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

    this.setState({
      VehicleOwner:'',
      VehicleModel:'',
      VehicleNumber:'',
      Type:'',
      Seats:'',
      ID:'',
      MNumber:'',
      email:'',
      password:''
    })
  }

   
  render() { 
    return (
      <div>
        <section>
          
          <div className="contentBx">
              <div className="formBx">
                <h2>Vehicle Sign up</h2>

                <form onSubmit={this.onSubmit}>
                  <div className="inputBx">
                      {/* <span>Vehicle Owner : </span> */}

                      <input type='text' 
                      placeholder="Vehicle Owner" 
                      onChange={this.changeVehicleOwner}
                      value={this.state.VehicleOwner}
                      className='own'
                      required
                       />
                  </div>

                  <div className="inputBx">
                      {/* <span>Vehicle Model : </span> */}

                      <input type='text' 
                      placeholder="Vehicle Model" 
                      onChange={this.changeVehicleModel}
                      value={this.state.VehicleModel}
                      className='own'
                      required
                      />
                  </div>

                  <div className="inputBx">
                      {/* <span>Vehicle Number : </span> */}

                      <input type='text' 
                       placeholder="Vehicle Number" 
                      onChange={this.changeVehicleNumber}
                      value={this.state.VehicleNumber}
                      className='own'
                      required
                       />
                  </div>

                  <div className="inputBx">
                      {/* <span>Vehicle Type : </span> */}

                      <input type='text' 
                      placeholder="Vehicle Type" 
                      onChange={this.changeType}  
                      value={this.state.Type} 
                      className='own'
                      required
                      />
                  </div>

                  <div className="inputBx">
                      {/* <span>Number of Seats : </span> */}

                      <input type='text' 
                      placeholder="Number of Seats" 
                      onChange={this.changeSeats}
                      value={this.state.VehicleSeats}
                      className='own'
                      id="noSeats"
                      required
                />
                  </div>

                  <div className="inputBx">
                      {/* <span>Owner's ID Number : </span> */}

                      <input type='text' 
                      placeholder="Owner's ID Number" 
                      onChange={this.changeID}
                      value={this.state.ID}
                      className='own'
                      required
                />
                  </div>

                  <div className="inputBx">
                      {/* <span>Owner's Mobile Number : </span> */}

                      <input type='text' 
                      placeholder="Owner's Mobile Number" 
                      onChange={this.changeMNumber}
                      value={this.state.MNumber}
                      className='own'
                      required
                />
                  </div>
                  
                  <div className="inputBx">
                      {/* <span>Email : </span> */}

                      <input type='email' 
                      placeholder="E-mail" 
                      onChange={this.changeEmail}
                      value={this.state.email}
                      className='own'
                      required
                      />
                  </div>

                  <div className="inputBx">
                      {/* <span>password : </span> */}

                      <input type='password' 
                      placeholder="password" 
                       onChange={this.changePassword}
                      value={this.state.password}
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
               
                <div >
                <input type='submit' className="btn" value='SIGN UP ME'/>
                </div>
                  

                </form>
              </div>
          </div>

          <div className="imgBx">
              <img src ="2.jpg"></img>
          </div>
        </section>
          
        </div>

       



        
          //  <div className="container">
            
             
          //    <div className="left">
          //    <div className="right"> <img src='2.jpg'></img></div>
          //     <h2 className="signup">Vehicle Registration</h2>
          //     <form className="fm" onSubmit={this.onSubmit}>
          //       <input type='text' 
          //         placeholder="Vehicle Owner" 
          //         onChange={this.changeVehicleOwner}
          //         value={this.state.VehicleOwner}
          //         className="form-control"
          //         required
          //       />
          //       <br/>
          //       <input type='text' 
          //         placeholder="Vehicle Model" 
          //         onChange={this.changeVehicleModel}
          //         value={this.state.VehicleModel}
          //         className="form-control"
          //         required
          //       />
          //       <br/>
          //       <input type='text' 
          //         placeholder="Vehicle Number" 
          //         onChange={this.changeVehicleNumber}
          //         value={this.state.VehicleNumber}
          //         className="form-control"
          //         required
          //       />
          //       <br/>

          //       <input type='text' 
          //              placeholder="Vehicle Type" 
          //              onChange={this.changeType}  
          //              value={this.state.Type} 
          //              className='form-control'
          //              required
          //              />

          //       <input type='text' 
          //         placeholder="Number of Seats" 
          //         onChange={this.changeSeats}
          //         value={this.state.VehicleSeats}
          //         className="form-control"
          //         id="noSeats"
          //         required
          //       />
          //       <br/>

              
          //              <input type='text' 
          //              placeholder="Owner's ID Number" 
          //              onChange={this.changeID}
          //              value={this.state.ID}
          //              className='form-control'
          //              required
          //        />
                   
          //          <br/>


          //             <input type='text' 
          //             placeholder="Owner's Mobile Number" 
          //              onChange={this.changeOwners_Mobile_Number}
          //              value={this.state.Owners_Mobile_Number}
          //              className='form-control'
          //              required
          //        />
                 

          //       <input type='email' 
          //         placeholder="E-mail" 
          //         onChange={this.changeEmail}
          //         value={this.state.email}
          //         className="form-control"
          //         required
          //       />
          //       <br/>
          //       <input type='password' 
          //         placeholder="password" 
          //         onChange={this.changePassword}
          //         value={this.state.password}
          //         className="form-control"
          //         required
          //       />
                
          //       <br/>
          //       <input type='submit' className="btn" value='SIGN UP ME'/>
          //     </form>
          //   </div>
          
          
         
          //   <div>
              
          //   </div>
          // </div> 
            
          
            
       
      
    );
  }
}
 
export default VehicleSign;