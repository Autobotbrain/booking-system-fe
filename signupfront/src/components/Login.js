import React, { Component } from 'react'
import { login } from './UserFunctions'
import '../Styles/Login.css'

export default class Login extends Component {

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
        

        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const user={
            email:this.state.email,
            password:this.state.password
        }



        login(user).then(res=>{
            this.props.history.push(`/profile`)
        })
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
                                        <input type="checkbox" className='userAggrementCheckbox' />
                                        I've read and agree with Terms of Service and our Privacy Policy
                                    </label>
                                    
                                    </div>

                                    <button  className='signInButton'>Sign In</button>

                                    <p className='notAccountSingUpContainer'>Don’t have an acount?<a href='/'> SIGN UP</a></p>
                                    <p className='poliyContainer'>By singing up you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>

                                </h1>
                            </form>
                        </div>
                    </div>
                    
                
            </div>
        )
    }
}
