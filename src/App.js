import React, {Component} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import FileUpload from './components/FileUpload'
import BookingList from './components/BookingList'
import Message from './components/Message'
import AddBooking from './components/AddBooking'
import Help from './components/Help'
import VehicleSignUp from "./components/VehicleSignUp";
import UserUpdate from "./components/UserUpdate";
import Announsment from "./components/Announsment";





import ViewOrders from "./components/ViewOrders.js ";
import EditAnnounsment from "./components/EditAnnousments/EditAnnousment";
// import AssignDrivers from "./components/Admin/AssignDrivers/AssignDrivers";
import AddNewAnno from "./components/EditAnnousments/AddNewAnno";
import AnnousmentUpdate from "./components/EditAnnousments/AnnousmentUpdate";
// import FeedBAckTable from "./components/Admin/FeedBack/FeedBAckTable";
// import PaymentTable from "./components/Admin/PaymentRequest/PaymentTable";
// import SignupTable from "./components/Admin/VehicleSignup/VehicleSignup";

import SelectRole from "./components/SelectRole";
// import ViewBookings from "./components/Admin/ViewBookings/ViewBookings";
// import CheckVehiclesRegistration from "./components/Admin/CheckVehiclesRegistration/CheckVehiclesRegistration";
// import Passenger from "./components/Passenger/StaffMember";
// import Driver from "./components/Driver/Driver";
// import SchoolStudent from "./components/SchoolStudent/SchoolStudent";


import './Styles/navbar.css'
// import axios from 'axios';
// import './App.css';
// import { render } from "react-dom/cjs/react-dom.development";

// class App extends Component {
//   constructor(){
//     super()
//     this.state ={
//       FullName:'',
//       userName:'',
//       email:'',
//       password:''
//     }

//     this.changeFullName= this.changeFullName.bind(this)
//     this.changeUserName= this.changeUserName.bind(this)
//     this.changeEmail= this.changeEmail.bind(this)
//     this.changePassword= this.changePassword.bind(this)
//     this.onSubmit=this.onSubmit.bind(this)

//   }

//   changeFullName(event){
//     this.setState({
//       FullName:event.target.value
//     })
//   }

//   changeUserName(event){
//     this.setState({
//         userName:event.target.value
//     })
//   }

//   changeEmail(event){
//     this.setState({
//       email:event.target.value
//     })
//   }

//   changePassword(event){
//     this.setState({
//       password:event.target.value
//     })
//   }

//   onSubmit(event){
//     event.preventDefault()

//     const registered={
//       FullName:this.state.FullName,
//       userName:this.state.userName,
//       email:this.state.email,
//       password:this.state.password
//     }

//     axios.post('http://localhost:3000/app/signup', registered)
//         .then(response => console.log(response.data))

//     this.setState({
//       FullName:'',
//       userName:'',
//       email:'',
//       password:''
//     })
//   }
   
//   render() { 
//     return (
//       <div>
//           <div className="container">
//             <div className="form">
//               <form onSubmit={this.onSubmit}>
//                 <input type='text' 
//                   placeholder="Full Name" 
//                   onChange={this.changeFullName}
//                   value={this.state.fullName}
//                   className="form-control"
//                 />
//                 <br/>
//                 <input type='text' 
//                   placeholder="user Name" 
//                   onChange={this.changeUserName}
//                   value={this.state.UserName}
//                   className="form-control"
//                 />
//                 <br/>
//                 <input type='text' 
//                   placeholder="E-mail" 
//                   onChange={this.changeEmail}
//                   value={this.state.email}
//                   className="form-control"
//                 />
//                 <br/>
//                 <input type='password' 
//                   placeholder="password" 
//                   onChange={this.changePassword}
//                   value={this.state.password}
//                   className="form-control"
//                 />
                
//                 <br/>
//                 <input type='submit' className="btn" value='submit'/>
//               </form>
//             </div>
//           </div>
//       </div>
//     );
//   }
// }
 

class App extends Component {
  
  render() {
    return (
      <div  style={{
              display: 'flex',
              alignItems: 'center',
              background: "#F4F5F7",
              justifyContent: 'center',
              margin:0,
              padding: 0,
              height:900,
              paddingTop:50
    
    
              
            }}>
        
        
        <Router >
        <div className="base"><div className="base2"><NavBar /></div></div>
        <Routes>

          
          <Route path='/' element={<Landing />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/Help' element={<Help />} />

          <Route exact path='/VehicleSignup' element={<VehicleSignUp />} />

          USER Profiles
          <Route path='/Announsment' element={<Announsment />}  />
          <Route path='/UserUpdate' element={<UserUpdate />} />
          <Route path='/Admin' element={<EditAnnounsment />} />
          <Route path='/SelectRole' element={<SelectRole/>}/>
          {/* <Route path='/Passenger' element={<Passenger />} />
          <Route path='/Driver' element={<Driver />} />
          <Route path='/SchoolStudent' element={<SchoolStudent />} /> */}

          
          {/* <Route path='/AssignDrivers' element={<AssignDrivers />} /> */}
          <Route path='/AddNewAnno' element={<AddNewAnno />} />
          <Route path='/Admin/:id' element={<AnnousmentUpdate />} />
          {/* <Route path='/feedback' element={<FeedBAckTable />} /> */}
          {/* <Route path='/PaymentRequest' element={<PaymentTable />} /> */}

          {/* <Route path='/ViewOrders' element={<ViewBookings />} /> */}
          {/* <Route path='/checkvehicles' element={<CheckVehiclesRegistration />} /> */}
          {/* <Route path='/x' element={<SignupTable />} /> */}


        </Routes>
      </Router>
      </div>

      
      
      // <Router>
      

      //   <div
      //     style={{
      //       display: 'flex',
      //       alignItems: 'center',
      //       background: "#F4F5F7",
      //       justifyContent: 'center',
      //       height:1000
      //     }}
      //   >
      //     <div className="container" >
      //       <div className="base"><div className="base2"><NavBar /></div></div>

      //       <Route exact path="/" component={Landing} />
      //       <div className="container">
      //         {/* <Route exact path="/register" component={Register} />
      //         <Route exact path="/login" component={Login} />
      //         <Route exact path="/profile" component={Profile} />
      //         <Route exact path="/uploads" component={FileUpload} />
      //         <Route exact path="/bookings" component={BookingList} />
      //         <Route exact path="/AddBookings" component={AddBooking} />
      //         <Route exact path="/Help" component={Help} />
      //         <Route exact path="/VehicleSignup" component={VehicleSignUp}   /> */}
      //         {/* <Route path='/UserUpdate' element={<UserUpdate/>} /> */}
      //       </div>
      //     </div>
      //   </div>


        
      // </Router>
    )
  }
}
export default App;