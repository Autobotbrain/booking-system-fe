import React, { Component } from 'react'


import {Link,withRouter} from 'react-router-dom'


class NavBar extends Component {

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }


    
    render() {
        
        const loginRegLink=(
            <ul className='nav nav-tabs'>
                <li className='nav nav-tabs'>
                    <Link to ="/" className='nav-link' style={{color: "#000"}}>
                        <h1><img src="https://img.icons8.com/ios/50/000000/about.png"/>About</h1>
                    </Link>
                </li>
                <li className='nav nav-tabs'>
                    <Link to ="/login" className='nav-link' style={{color: "#000"}}>
                        <h1><img src="https://img.icons8.com/ios/50/000000/login-rounded-right--v1.png"/>Login</h1>
                    </Link>
                </li>
                <li className='nav-tabs'>
                    <Link to ="/register" className='nav-link' style={{color: "#000"}}>
                        <h1><img src="https://img.icons8.com/ios/50/000000/sign-up.png"/>Register</h1>
                    </Link>
                </li>
                <li className='nav nav-tabs'>
                    <Link to ="/" className='nav-link' style={{color: "#000"}}>
                        <h1><img src="https://img.icons8.com/ios/50/000000/phone-disconnected.png"/>Contact Us</h1>
                    </Link>
                </li>
            </ul>
        )
        const userLink =(
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link to ="/profile" className='nav-link' style={{color: "#000"}}>
                        <h1><img src="https://img.icons8.com/ios/50/000000/user-menu-male.png"/>User</h1>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/AddBookings" className='nav-link' style={{color: "#000"}}>
                        <h1><img src="https://img.icons8.com/ios/50/000000/booking.png"/>Add Booking</h1>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/bookings" className='nav-link' style={{color: "#000"}}>
                        <h1><img src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/000000/external-booking-hotel-service-outline-others-cattaleeya-thongsriphong-2.png"/>Booking List</h1>
                    </Link>
                </li>
                <li className='nav-item'>
                    <a href='' onClick={this.logOut.bind(this)} className='nav-link' style={{color: "#000"}}>
                    <h1><img src="https://img.icons8.com/ios/50/000000/exit.png"/>Logout</h1>
                    </a>
                </li>
            </ul>
        )

        return(
            <nav className='navbar navbar-expand-lg navbar-light rounded'>
                <button className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbar1'
                        aria-controls='navbar1'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-md-center' id='navbar1'>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link' style={{color: "#000"}}>
                                <h1><img src="https://img.icons8.com/ios/50/000000/home--v1.png"/>Home</h1>
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink:loginRegLink }
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);