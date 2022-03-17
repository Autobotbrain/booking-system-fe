import React, { Component } from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'


export default class Navbarcomp extends Component {
  render() {
    return (
      <div>
          <Navbar bg="dark" expand="lg">

         
  <Container>
 
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <Nav.Link href="#home"><p class="text-warning">Home</p></Nav.Link>
        <Nav.Link href="#link"><p class="text-warning">About us</p></Nav.Link>
        <Nav.Link href="#link"><p class="text-warning">Contact us</p></Nav.Link>

        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="#home"><p class="text-warning" >AUTOBOTBRAIN CABS</p></Navbar.Brand>

        

  </Container>
  
</Navbar>

      </div>
    )
  }
}
