import React, {Component} from "react";
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
        ConfirmPassword:'',
        Phone_Number:'',
        NIC_Number:'',
        Driving_Licence_Id:'',
        Address:''
    }

    this.changeFirstName=this.changeFirstName.bind(this);
    this.changeLastName=this.changeLastName.bind(this);
    this.changeEmail=this.changeEmail.bind(this);
    this.changePassword=this.changePassword.bind(this);
    this.changeConfirmPassword=this.changeConfirmPassword.bind(this);
    this.changePhone_Number=this.changePhone_Number.bind(this);
    this.changeNIC_Number=this.changeNIC_Number.bind(this);
    this.changeDriving_Licence_Id=this.changeDriving_Licence_Id.bind(this);
    this.changeAddress=this.changeAddress.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

  }

  changeFirstName(event){
    this.setState({
      FirstName:event.target.value
    })
  }
  changeLastName(event){
    this.setState({
      LastName:event.target.value
    })
  }

  changeEmail(event){
    this.setState({
      Email:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      Password:event.target.value
    })
  }

  changeConfirmPassword(event){
    this.setState({
      ConfirmPassword:event.target.value
    })
  }


  changePhone_Number(event){
    this.setState({
      Phone_Number:event.target.value
    })
  }
  
  changeNIC_Number(event){
    this.setState({
      NIC_Number:event.target.value
    })
  }
 
  changeDriving_Licence_Id(event){
    this.setState({
      Driving_Licence_Id:event.target.value
    })
  }
  changeAddress(event){
    this.setState({
      Address:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const registered={
        FirstName:this.state.FirstName,
        LastName:this.state.LastName,
        Email:this.state.Email,
        Password:this.state.Password,
        ConfirmPassword:this.state.ConfirmPassword,
        Phone_Number:this.state.Phone_Number,
        NIC_Number:this.state.NIC_Number,
        Driving_Licence_Id:this.state.Driving_Licence_Id,
        Address:this.state.Address
      
    }

    axios.post('http://localhost:3000/Driver/signup', registered)
        .then(response => console.log(response.data))

    this.setState({
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
        ConfirmPassword:'',
        Phone_Number:'',
        NIC_Number:'',
        Driving_Licence_Id:'',
        Address:''
      
    })
  }
   
  render() { 
    return (
      <div>
         <div className="container">
            <div className="right"> <img src='https://www.clabservice.com/wp-content/uploads/2017/03/driver.jpg'></img></div>
          
            <div className="left">
              <h2 className="signup">Driver Sign Up</h2>
              <form className="fm" onSubmit={this.onSubmit}>

                <input type="text" 
                  placeholder="First Name" 
                  onChange={this.changeFirstName}
                  value={this.state.FirstName}
                  className="form-control"
                />
                <br/>

                <input type="text" 
                  placeholder="Last Name" 
                  onChange={this.changeLastName}
                  value={this.state.LastName}
                  className="form-control"
                />
                <br/>
                
                <input type="email" 
                  placeholder="E-mail" 
                  onChange={this.changeEmail}
                  value={this.state.Email}
                  className="form-control"
                />
                <br/>
                <input type="password" 
                  placeholder="Password" 
                  onChange={this.changePassword}
                  value={this.state.Password}
                  className="form-control"
                />

                <br/>
                <input type="password"
                  placeholder="Confirm Password" 
                  onChange={this.changeConfirmPassword}
                  value={this.state.ConfirmPassword}
                  className="form-control"
                />

                <br/>
                <input type="text"
                  placeholder="Phone Number" 
                  onChange={this.changePhone_Number}
                  value={this.state.Phone_Number}
                  className="form-control"
                />
                <br/>
                
                <input type="text" 
                  placeholder="NIC Number" 
                  onChange={this.changeNIC_Number}
                  value={this.state.NIC_Number}
                  className="form-control"
                />
                <br/>
                <input type="text" 
                  placeholder="Driving Licence Id" 
                  onChange={this.changeDriving_Licence_Id}
                  value={this.state.Driving_Licence_Id}
                  className="form-control"
                />
                <br/>

                <input type="text" 
                  placeholder="Address" 
                  onChange={this.changeAddress}
                  value={this.state.Address}
                  className="form-control"
                />
                <br/>
                
                
                <input type="submit" className="btn" value='Register'/>
              </form>
            </div>
          </div>
      </div>
    );
  }
}
 
export default App;