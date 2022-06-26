import React, { Component } from 'react'
import { login } from './UserFunctions'
import '../Styles/Login.css'
import {withRouter} from './withRouter';
import jwtDecode from 'jwt-decode'

class Login extends Component {
    

    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            tag:'',
            vehicle:false,
            staff:false,
            parent:false,
            driver:false,
        }
        

        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.handleChangeVehicle=this.handleChangeVehicle.bind(this)
        this.handleChangeStaff=this.handleChangeStaff.bind(this)
        this.handleChangeParent=this.handleChangeParent.bind(this)
        this.handleChangeDriver=this.handleChangeDriver.bind(this)

    }

    handleChangeVehicle (e){this.setState({ vehicle: e.target.checked })};
    handleChangeStaff (e){this.setState({ staff: e.target.checked })};
    handleChangeParent (e){this.setState({ parent: e.target.checked })};
    handleChangeDriver (e){this.setState({ driver: e.target.checked })};

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state.driver)
    }
    onSubmit(e){
        e.preventDefault()

        if(this.state.vehicle){
            this.state.tag="vehicle"
        }if (this.state.staff) {
            this.state.tag="staff"
        }if (this.state.parent) {
            this.state.tag="parent"
        }if (this.state.driver) {
            this.state.tag="driver"
        }if(!(this.state.email || this.state.password)){
            alert("Please enter email and Password")
        }if(!(this.state.vehicle || this.state.staff || this.state.parent || this.state.driver)){
            alert("Please select role")
        }

        const user={
            email:this.state.email,
            password:this.state.password,
            tag:this.state.tag
        }

        if(this.state.email && this.state.tag){
            login(user).then(res=>{
            
                // if(res.data)
                console.log(user)
                const token = localStorage.usertoken
                const decode = jwtDecode(token)
                
    
                console.log(decode.tag)
                if(decode.tag=="vehicle"){
                    this.props.navigate(`/Announsment`,{res})
                }
                if(decode.tag=="staff"){
                    this.props.navigate(`/Announsment`,{res})
                }
                if(decode.tag=="parent"){
                    this.props.navigate(`/Announsment`,{res})
                }
                if(decode.tag=="driver"){
                    this.props.navigate(`/Announsment`,{res})
                }
                if(!decode.tag){
                    alert(" email or password is invalid")
                }
                
                
            }).catch(err=>{
                console.log("User not found! Check Email and Password"+err)
                alert("User not found! Check Email and Password")
            })
        }

        
    }


    render() {
        return (

            
            <div className='loginContainer'>
            
                    <div className='imageContainer'>
                        <img className='image' src={require('../assets/jakob-rosen-zMii6FgTvSk-unsplash.jpg')} />
                    </div>
                    
                    
                    <div className='card'>
                    
                    <img className='logo' src={require('../assets/Taxi.png')} />
                        <div className='col-md-6 mt-5 mx-auto'>
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className='h3 mb-3 font-weight-normal'>
                                    <p className='signIn'>Sign In</p>
                                    <div className='emailContainer'>
                                        <label htmlFor='email'>Email Address</label>
                                        <input type='email'
                                                className='inputBody'
                                                name='email'
                                                placeholder='Enter Email'
                                                value={this.state.email}
                                                onChange={this.onChange}
                                                />
                                    </div>

                                    <div className='passwordContainer'>
                                        <label htmlFor='password'>password</label>
                                        <input type='password'
                                                className='inputBody'
                                                name='password'
                                                placeholder='Enter password'
                                                value={this.state.password}
                                                onChange={this.onChange}
                                                />
                                    </div>

                                    
                                    
                                    <div className='userAggrementContainer'>
                                    
                                    <label className='userAggrementBody'>
                                        <input type="checkbox" className='userAggrementCheckbox' checked={this.state.vehicle} onChange={this.handleChangeVehicle}/>
                                        Vehicle
                                    </label>
                                    <label className='userAggrementBody'>
                                        <input type="checkbox" className='userAggrementCheckbox' checked={this.state.staff} onChange={this.handleChangeStaff}/>
                                        Staff
                                    </label>
                                    <label className='userAggrementBody'>
                                        <input type="checkbox" className='userAggrementCheckbox' checked={this.state.parent} onChange={this.handleChangeParent}/>
                                        Parent
                                    </label>
                                    <label className='userAggrementBody'>
                                        <input type="checkbox" className='userAggrementCheckbox' checked={this.state.driver} onChange={this.handleChangeDriver}/>
                                        Driver
                                    </label>
                                    
                                    </div>

                                    <button  className='signInButton'>Sign In</button>

                                    <p className='notAccountSingUpContainer'>Don’t have an acount?<a href='/'> SIGN UP</a></p>

                                </h1>
                            </form>
                        </div>
                    </div>
                    
                
            </div>
        )
    }
}

export default withRouter(Login);
