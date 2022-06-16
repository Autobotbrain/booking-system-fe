import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rate, Form, Input, Button } from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';
import  DriverList from "./Driver-list";

class App extends React.Component {
  state = {
    name: '',
    comment:'',
    email:'',
    rating:'',
    userId:'62a6e8a0d83f68458cfa1586',
   driverId:''//'62a6eb445b842c221800698d'
  }

  handleChange = event => {
    this.setState({ name:event.target.value });
    this.setState({ comment:event.target.value });
    this.setState({ email:event.target.value });
    this.setState({ rating:event.target.value });
  }

  handleSubmit = event => {
    //event.preventDefault();

    const feedback = {
      name: this.state.name,
      comment: this.state.comment,
      email: this.state.email,
      rating: this.state.rating,
      userId:'62a6e8a0d83f68458cfa1586',
  //driverId:'62a6eb445b842c221800698d'
      driverId:this.state.driverId
    };
console.log(JSON.stringify(feedback))
    axios.post('http://localhost:3001/feedback/add', {feedback})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      
 }


 handleCallback = (childData) =>{
  this.setState({driverId: childData})
}


  render(){
    //Form with star rating
    const { TextArea } = Input;
    const Demo = () => {
      const {driverId} = this.state;

      return (
        <div>
        <h1> {driverId}</h1>

        <Form onFinish={this.handleSubmit }
        
          name="basic"
          initialValues={{ remember: true }}
         
        >
            <div>
    <h3>Please select your fav driver {"\u2728"}</h3>
    <DriverList parentCallback = {this.handleCallback}/>
    
    <br></br>
    </div>
    
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <TextArea rows={1} />
          </Form.Item>
  
     
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="Comment"
            name="comment"
            rules={[{ required: true, message: 'Please enter your comment!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
    
            <Form.Item
              label="Rating"
              name="rating star"
             
            >
         
        <Rate allowHalf defaultValue={2.5} />
            </Form.Item>
            <Form.Item
            label="Enter your Rating level as a number in between 1-5"
            name="rating"
            rules={[{ required: true, message: 'Please enter your rate level!' }]}
          >
            <TextArea rows={1} />
          </Form.Item>
          <Form.Item>
            <Button className="btn" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
    };
    return (
    <div className="MainDiv">
      <div className="jumbotron text-center">
          <h3>FEEDBACK FOR US<br>
          </br>Give your feedback</h3>
      </div>
      
      <div className="container">
          
      <Demo />
        </div>
      </div>
  );
}
}
export default App;