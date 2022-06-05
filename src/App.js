import React, {Component} from "react";
import axios from 'axios';
import VehicleSign from "./components/VehicleOwner/VehicleSignup/VehicleSign";
import UserProfile from "./components/VehicleOwner/UserProfile/UserProfile";
import Announsment from "./components/VehicleOwner/Annousments/Announsment";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewOrders from "./components/VehicleOwner/ViewOrders/ViewOrders";
import EditAnnounsment from "./components/Admin/EditAnnousments/EditAnnousment";
import AssignDrivers from "./components/Admin/AssignDrivers/AssignDrivers";
import PaymentRequest from "./components/Admin/PaymentRequest/PaymentRequest";
import AddNewAnno from "./components/Admin/EditAnnousments/AddNewAnno";
import AnnousmentUpdate from "./components/Admin/EditAnnousments/AnnousmentUpdate";
import SignUp from "./components/VehicleOwner/VehicleSignup/SignUp";


// import Navbarcomp from "./components/Navbarcomp";
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

   
  render() { 
    return (
      <div>

        {/* <UserProfile/> */}
      
       {/* <Announsment/> */}  
      
      
    
       <Router>
         <Routes>
           
           {/* <Route path="/" element={<SignUp/>}/> */}
           <Route exact path='/' element={ <VehicleSign/>} />
           <Route path='/a' element={<Announsment/>} />
           <Route path='/userprofile' element={<UserProfile/>} />
           <Route path='/ViewOrders' element={<ViewOrders/>} />

           <Route path='/e' element={<EditAnnounsment/>} />
           <Route path='/AssignDrivers' element={<AssignDrivers/>} />
           <Route path='/PaymentRequest' element={<PaymentRequest/>} />
           <Route path='/AddNewAnno' element={<AddNewAnno/>} />
           <Route path='/e/:id' element={<AnnousmentUpdate/>} />
         </Routes>
       </Router>
                 
      </div>
    );
  }
}
 
export default App;