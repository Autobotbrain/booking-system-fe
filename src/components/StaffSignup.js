import React, {Component} from "react";
import axios from 'axios';
import './new.css';

class StaffSignup extends Component {
  constructor(){
    super()
    this.state ={
      firstName:'',
      lastName:'',
      phoneNumber:'',
      email:'',
      password:'',
      nic:'',
      address:'',
      company:''
    }

    this.changefirstName= this.changefirstName.bind(this)
    this.changelastName= this.changelastName.bind(this)
    this.changephoneNumber= this.changephoneNumber.bind(this)
    this.changeemail= this.changeemail.bind(this)
    this.changepassword= this.changepassword.bind(this)
    this.changenic= this.changenic.bind(this)
    this.changeaddress= this.changeaddress.bind(this)
    this.changecompany= this.changecompany.bind(this)
    this.onSubmit=this.onSubmit.bind(this)

  }

  changefirstName(event){
    this.setState({
      firstName:event.target.value
    })
  }

  changelastName(event){
    this.setState({
      lastName:event.target.value
    })
  }

  changephoneNumber(event){
    this.setState({
      phoneNumber:event.target.value
    })
  }

  changeemail(event){
    this.setState({
      email:event.target.value
    })
  }

  changepassword(event){
    this.setState({
      password:event.target.value
    })
  }

  changenic(event){
    this.setState({
      nic:event.target.value
    })
  }

  changeaddress(event){
    this.setState({
      address:event.target.value
    })
  }

  changecompany(event){
    this.setState({
      company:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const registered={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      phoneNumber:this.state.phoneNumber,
      email:this.state.email,
      password:this.state.password,
      nic:this.state.nic,
      address:this.state.address,
      company:this.state.company
    }

    axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

    this.setState({
      firstName:'',
      lastName:'',
      phoneNumber:'',
      email:'',
      password:'',
      nic:'',
      address:'',
      company:''
    })
  }
   
  render() { 
    return (
      <div>
        <section>
          <div className="contentBx">
             <div className="formBx">
               <h2>Staff Sign up</h2>

        
                 <form onSubmit={this.onSubmit}>
                  <div className="inputBx">
                      {/* <span>First Name : </span> */}
                
                       <input type='text' 
                       placeholder="First Name" 
                       onChange={this.changefirstName}
                       value={this.state.firstName}
                       className='own'
                       required
                       />
                  </div>
                  <div className="inputBx">
                      {/* <span>Last Name : </span> */}
                
                       <input type='text' 
                      placeholder="Last Name" 
                      onChange={this.changelastName}
                      value={this.state.lastName}
                      className='own' 
                      required
                      />
                  </div>    
                  
                  <div className="inputBx">
                      {/* <span>Phone Number : </span> */}  
                      <input type='text' 
                      placeholder="Phone Number" 
                      onChange={this.changephoneNumber}
                      value={this.state.phoneNumber}
                      className='own'                      
                      required
                      />
                  </div> 
                  <div className="inputBx">
                      {/* <span>NIC : </span> */}
                      <input type='text' 
                      placeholder="NIC" 
                      onChange={this.changenic}
                      value={this.state.nic}
                      className='own'
                      required
                      />
                  </div>   
                  <div className="inputBx">
                      {/* <span>Address : </span> */}
                      <input type='text' 
                      placeholder="Address" 
                      onChange={this.changeaddress}
                      value={this.state.address}
                      className='own'
                      required
                      />
                  </div>
                  
                  <div className="inputBx">
                      {/* <span>Company : </span> */}
                      <input type='text' 
                      placeholder="Company" 
                      onChange={this.changecompany}
                      value={this.state.company}
                      className='own'
                      required
                      />
                
                   </div>
               
                   <div className="inputBx">
                      {/* <span>Email : </span> */}
                      <input type='text' 
                      placeholder="E-mail" 
                      onChange={this.changeemail}
                      value={this.state.email}
                      className='own'
                      required
                      />
                </div>
                <div className="inputBx">
                      {/* <span>password : </span> */}
                      <input type='password' 
                      placeholder="Password" 
                      onChange={this.changepassword}
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
              <img src ="4.jpg"></img>
          </div>   
          </section>
      </div>
    );
  }
}
 
export default StaffSignup;