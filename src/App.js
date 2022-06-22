import React, {Component} from "react";


import Announsment from "./components/Announsment";
import SelectRole from "./components/SelectRole";
import UserUpdate from "./components/UserUpdate";
import VehicleSignUp from "./components/VehicleSignUp";
import ViewOrders from "./components/ViewOrders";
import EditAnnounsment from "./components/EditAnnousments/EditAnnousment";
import AnnousmentUpdate from "./components/EditAnnousments/AnnousmentUpdate";
import FeedBAckTable from "./components/FeedBAckTable";
import PaymentTable from "./components/PaymentTable";
import CheckVehiclesRegistration from "./components/CheckVehiclesRegistration";


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import ViewOrders from "./components/VehicleOwner/ViewOrders/ViewOrders";


import AddNewAnno from "./components/EditAnnousments/AddNewAnno";




import SignupTable from "./components/Admin/VehicleSignup/VehicleSignup";


import ViewBookings from "./components/Admin/ViewBookings/ViewBookings";

import Passenger from "./components/Passenger/StaffMember";
import Driver from "./components/Driver/Driver";
import SchoolStudent from "./components/SchoolStudent/SchoolStudent";




class App extends Component {
   
  render() { 
    return (
      <div>
    
       <Router>
         <Routes> 
          
           <Route path='/' element={<SelectRole/>}/>
           <Route exact path='/VehicleSignup' element={ <VehicleSignUp/>} />

           {/* USER Profiles*/}
           <Route path='/VehicleOwner' element={<Announsment/>} />
           <Route path='/Admin' element={<EditAnnounsment/>} />
           <Route path='/Passenger' element={<Passenger/>} />
           <Route path='/Driver' element={<Driver/>} />
           <Route path='/SchoolStudent' element={<SchoolStudent/>} />

           <Route path='/UserUpdate' element={<UserUpdate/>} />
           <Route path='/AddNewAnno' element={<AddNewAnno/>} />
           <Route path='/Admin/:id' element={<AnnousmentUpdate/>} />
           <Route path='/feedback' element={<FeedBAckTable/>}/>
           <Route path='/PaymentRequest' element={<PaymentTable/>}/>
           
           {/* <Route path='/ViewOrders' element={<ViewBookings/>} /> */}
           <Route path='/ViewOrders' element={<ViewOrders/>} />

           <Route path='/checkvehicles' element={<CheckVehiclesRegistration/>} />
           



           <Route path='/x' element={<SignupTable/>}/>
           

         </Routes>
       </Router>
                 
      </div>
    );
  }
}
 
export default App;