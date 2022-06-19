import React, {Component} from "react";
import Announsment from "./components/VehicleOwner/Annousments/Announsment";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewOrders from "./components/VehicleOwner/ViewOrders/ViewOrders";
import EditAnnounsment from "./components/Admin/EditAnnousments/EditAnnousment";
import AssignDrivers from "./components/Admin/AssignDrivers/AssignDrivers";
import AddNewAnno from "./components/Admin/EditAnnousments/AddNewAnno";
import AnnousmentUpdate from "./components/Admin/EditAnnousments/AnnousmentUpdate";
import UserUpdate from "./components/VehicleOwner/UserUpdate/UserUpdate";
import FeedBAckTable from "./components/Admin/FeedBack/FeedBAckTable";
import PaymentTable from "./components/Admin/PaymentRequest/PaymentTable";
import SignupTable from "./components/Admin/VehicleSignup/VehicleSignup";
import SignUp from "./components/VehicleOwner/VehicleSignup/SignUp";
import SelectRole from "../src/components/Admin/UserRole/SelectRole";



class App extends Component {
   
  render() { 
    return (
      <div>
    
       <Router>
         <Routes> 
          
           <Route path='/' element={<SelectRole/>}/>
           <Route exact path='/VehicleSignup' element={ <SignUp/>} />
           <Route path='/VehicleOwner' element={<Announsment/>} />
           <Route path='/UserUpdate' element={<UserUpdate/>} />
           <Route path='/Admin' element={<EditAnnounsment/>} />
           <Route path='/AssignDrivers' element={<AssignDrivers/>} />
           <Route path='/AddNewAnno' element={<AddNewAnno/>} />
           <Route path='/Admin/:id' element={<AnnousmentUpdate/>} />
           <Route path='/feedback' element={<FeedBAckTable/>}/>
           <Route path='/PaymentRequest' element={<PaymentTable/>}/>
           <Route path='/ViewOrders' element={<ViewOrders/>} />

           <Route path='/x' element={<SignupTable/>}/>
           

         </Routes>
       </Router>
                 
      </div>
    );
  }
}
 
export default App;