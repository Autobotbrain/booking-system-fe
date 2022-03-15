import React, { Component } from "react";
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmpassword:'',
        nic:'',
        address:'',
        contactNumbers:'',
        childName:'',
        childSchool:'',
      
        
    }

    this.changefirstName=this.changefirstName.bind(this)
    this.changelastName=this.changelastName.bind(this)
    this.changeemail=this.changeemail.bind(this)
    this.changepassword=this.changepassword.bind(this)
    this.changeconfirmpassword=this.changeconfirmpassword.bind(this)
    this.changenic=this.changenic.bind(this)
    this.changeaddress=this.changeaddress.bind(this)
    this.changecontactNumbers=this.changecontactNumbers.bind(this)
    this.changechildName=this.changechildName.bind(this)
    this.changechildSchool=this.changechildSchool.bind(this)
    this.onSubmit=this.onSubmit.bind(this)

  }

  changefirstName(event) {
    this.setState({
      firstName:event.target.value
    })
  }

  changelastName(event) {
    this.setState({
      lastName:event.target.value
    })
  }

  changeemail(event) {
    this.setState({
      email:event.target.value
    })
  }

  changepassword(event) {
    this.setState({
      password:event.target.value
    })
  }
  changeconfirmpassword(event) {
    this.setState({
      confirmpassword:event.target.value
    })
  }
  changenic(event) {
    this.setState({
     nic:event.target.value
      
    })
  }
  changeaddress(event) {
    this.setState({
      address:event.target.value
    })
  }
  changecontactNumbers(event) {
    this.setState({
      contactNumbers:event.target.value
    })
  }
 
  changechildName(event) {
    this.setState({
      childName:event.target.value
    })
  }
  changechildSchool(event) {
    this.setState({
      childSchool:event.target.value
    })
  }
  
  onSubmit(event) {
    event.preventDefault()

    const registered = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      password:this.state.password,
      confirmpassword:this.state.confirmpassword,
      nic:this.state.nic,
      address:this.state.address,
      contactNumbers:this.state.contactNumbers,
      childName:this.state.childName,
      childSchool:this.state.childSchool,
   

    }

    axios.post('http://localhost:3001/parent/signup', registered)
      .then(response => console.log(response.data))

    this.setState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmpassword:'',
      nic:'',
      address:'',
      contactNumbers:'',
      childName:'',
      childSchool:'',
     
      
    })
  }

  render() {
    return (
      


        <div className="container">
          <div className="right"> <img src='https://klfdradio.com/media/2021/09/pexels-photo-4543110.jpeg'></img></div>

          <div className="left">
            <h2 className="signup">School Student Sign Up</h2>
            <form className="fm" onSubmit={this.onSubmit}>
              <input type="text"
                placeholder="Guardian First Name"
                onChange={this.changefirstName}
                value={this.state.firstName}
                className="form-control"
              />
              <br />
              <input type="text"
                placeholder="Guardian Last Name"
                onChange={this.changelastName}
                value={this.state.lastName}
                className="form-control"
              />
              <br />
              <input type="email"
                placeholder="E-mail"
                onChange={this.changeemail}
                value={this.state.email}
                className="form-control"


              />
              <br />
              <input type="password"
                placeholder="Password"
                onChange={this.changepassword}
                value={this.state.password}
                className="form-control"
              />
              <br />
              <input type="password"
                placeholder="Confirm Password"
                onChange={this.changeconfirmpassword}
                value={this.state.confirmpassword}
                className="form-control"
              />
              <br />
              <input type="text"
                placeholder="NIC Number"
                onChange={this.changenic}
                value={this.state.nic}
                className="form-control"
              />
              <br />
              <input type="text"
                placeholder="Address"
                onChange={this.changeaddress}
                value={this.state.address}
                className="form-control"
              />
              <br />
              <input type="text"
                placeholder="Mobile Number"
                onChange={this.changecontactNumbers}
                value={this.state.contactNumbers}  
                className="form-control"
              />
            
              <h3 className="signup">Children Details</h3>
             
              <input type="text"
                placeholder="Child Name"
                onChange={this.changechildName}
                value={this.state.childName}
                className="form-control"
              />
              <br />
              <input type="text"
                placeholder="Student School"
                onChange={this.changechildSchool}
                value={this.state.childSchool}
                className="form-control"
              />
              <br />
              <p className="para">If you have two or more children please use separate registrations. </p>

              <br />
              <input type='submit' className="btn" value='Register' />
            </form>
          </div>
        </div>
    
    );
  }
}

export default App;