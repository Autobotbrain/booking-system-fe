import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import '../Styles/Profile.css'

export default class Profile extends Component {


    constructor(){
        
        super()
        this.state={
            first_name:'',
            last_name:'',
            email:''
        }
        
        
    }

    componentDidMount(){
        const token=localStorage.usertoken
        const decode=jwtDecode(token)
        this.setState({
            first_name:decode.first_name,
            last_name:decode.last_name,
            email:decode.email
        })
        
        console.log(decode)
        
        
    }

    render() {
        return (
            
            <div className='container'>
                <div className='col-sm8 mx-auto'>
                        <h1 className='text-center'>Profile</h1>
                </div>



                <div class="container bootstrap snippets bootdey">
                    <div class="row">
                        <div class="profile-nav col-md-3">
                            <div class="panel">
                                <div class="user-heading round">
                                    <a href="#">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
                                    </a>
                                    <h1>{this.state.first_name}</h1>
                                    <p>{this.state.last_name}</p>
                                </div>

                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="#"> <i class="fa fa-calendar"></i> Recent Activity <span class="label label-warning pull-right r-activity">9</span></a></li>
                                    <li><a href="#"> <i class="fa fa-edit"></i> Edit profile</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='jumbotron mt-5'>
                    
                    <table className='table col-md-6 mx-auto'>
                        <h2>
                            <tbody>
                                <tr>
                                    <td>First Name:</td>
                                    <td>{this.state.first_name}</td>
                                </tr>

                                <tr>
                                    <td>Last Name:</td>
                                    <td>{this.state.last_name}</td>
                                </tr>

                                <tr>
                                    <td>Email:</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </h2>
                    </table>
                </div>

                

                









            </div>
        )
    }
}
