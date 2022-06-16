import React from "react";
import axios from "axios";

export default class DriverList extends React.Component {
  state = {
    drivers: []
  };

  componentDidMount() {
    axios.get('http://localhost:3001/driver').then(res => {
      const drivers = res.data;
      this.setState({ drivers });
      console.log(res)
    });
  }
  onTrigger = (value) => {
    this.props.parentCallback(value.target.value);
    console.log(value.target.value)
  };

  render() {
    // return (
    //     <div>
    //       <br></br> <br></br>
    //       <button onClick={this.onTrigger}>Click me</button>
    //     </div>
    //   );

    return (
    <select onChange={this.onTrigger}>
       {this.state.drivers.map(driver => <option>{driver.name}</option>)}
   </select>
     );
  }

  
}
