import React, { Component } from 'react'
import axios  from 'axios'
import TableRow from './TableRow'



export default class BookingList extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            routes: []
        }

        

    }

    componentDidMount() {
        
        axios.get('http://localhost:5000/bookings/')
            .then(Response => {
                this.setState({ routes: Response.data })
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    TabRow() {
        return this.state.routes.map(function (obj, key) {
            return <TableRow obj={obj} key={key} />
        })
    }


    render() {
        return (
            <div>
    
                <h2>
                    <table className='table ' style={{ marginTop: 140,background:"white"}}>
                    <h1 align='center'>Booking List</h1>
                        <tread style={{ margin:120,background:"#DCDCDC"}}>
                            <tr>
                                <th scope="col">Route---------</th>
                                <th scope="col">Time-------</th>
                                <th scope="col">Passenger-----</th>
                                <th scope="col">Date</th>
                                
                            </tr>
                            <tbody>
                                {this.TabRow()}
                            </tbody>
                        </tread>
                    </table>
                </h2>
            </div>
        )
    }
}

