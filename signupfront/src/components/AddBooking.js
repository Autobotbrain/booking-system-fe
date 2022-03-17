import React, { Component } from 'react'
import { addBooking } from './UserFunctions'

export default class AddBooking extends Component {

    constructor(){
        super();
        this.state={
            time:'',
            user_name:'',
            route:''
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
            time:this.state.time,
            user_name:this.state.user_name,
            route:this.state.route,
        }

        addBooking(user).then(res=>{
            this.props.history.push(`/uploads`)
        })
    }


    render() {
        return (
            <div className='container'>
                <h2>
                    <div className='row'>
                        <div className='col-md-6 mt-5 mx-auto'>
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className='h3 mb-3 font-weight-normal'>
                                    <p align='center'>Add Booking</p>

                                    <div className=' form-group'>
                                        <label htmlFor='time'>Time</label>
                                        <input type='text'
                                                className='form-control'
                                                name='time'
                                                placeholder='Enter Time'
                                                value={this.state.time}
                                                onChange={this.onChange}
                                                />
                                    </div>

                                    <div className=' form-group'>
                                        <label htmlFor='Passenger Name'>Passenger Name</label>
                                        <input type='text'
                                                className='form-control'
                                                name='user_name'
                                                placeholder='Enter Passenger name'
                                                value={this.state.user_name}
                                                onChange={this.onChange}
                                                />
                                    </div>

                                    <div className=' form-group'>
                                        <label htmlFor='route'>Destination</label>
                                        <input type='email'
                                                className='form-control'
                                                name='route'
                                                placeholder='Enter where you want to be'
                                                value={this.state.route}
                                                onChange={this.onChange}
                                                />
                                    </div>


                                    <button className='btn btn-lg btn-primary btn-block'>Add Booking</button>


                                </h1>
                            </form>
                        </div>
                    </div>
                </h2>
            </div>
        )
    }
}