import React, {Component} from "react";
import axios from 'axios';
import StaffSignup from "./components/StaffSignup";
import UserProfile from "./components/userProfile/userProfile";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddBooking from "./components/AddBooking/AddBooking";
import Update from "./components/Update/Update";
import Payment from "./components/Payment/Payment";





class App extends Component {

   
  render() { 
    return (
      <div>

      
       <Router>
         <Routes>
           
           <Route exact path='/' element={<StaffSignup/>} />
           <Route path='/a' element={<UserProfile />} />
           <Route path='/addbooking' element={<AddBooking />} />
           <Route path='/update' element={<Update/>} />
           <Route path='/Payment' element={<Payment/>} />
    
          </Routes>
        </Router>
                 
      </div>
    );
  }
}
 
export default App;