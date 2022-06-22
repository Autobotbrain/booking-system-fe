import React, { Component } from 'react'

export default class extends Component {

    render() {
        return (
            
                <tr>
                    <td>
                        {this.props.obj.route}
                    </td>
                
                    <td>
                        {this.props.obj.time}
                    </td>

                    <td>
                        {this.props.obj.user_name}
                    </td>
                
                    <td>
                        {this.props.obj.Date_Time}
                    </td>
                
                    <td>
                        <button className='btn btn-primary'>Remove</button>
                    </td>
                </tr>
            
        )
    }
}
