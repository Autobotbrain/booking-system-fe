import React, {Component} from "react";
import axios from 'axios';
import VehicleSign from "./components/VehicleSignup/VehicleSign";
import UserProfile from "./components/UserProfile/UserProfile";
import Announsment from "./components/Annousments/Announsment";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewOrders from "./components/ViewOrders/ViewOrders";


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
           
           <Route exact path='/' element={ <VehicleSign/>} />
           <Route path='/a' element={<Announsment />} />
           <Route path='/userprofile' element={<UserProfile/>} />
           <Route path='/ViewOrders' element={<ViewOrders/>} />
         </Routes>
       </Router>
                 
      </div>
    );
  }
}
 
export default App;