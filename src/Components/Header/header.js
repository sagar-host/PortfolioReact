import React from 'react';
import {Navbar,Nav,Container } from "react-bootstrap";
import "./header.css"



function header() {

  return (
     <div className="header">
         <Navbar id='NAVBAR' collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand href="/" >EverGreen</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  to="/myproject">My Project</Nav.Link>
      <Nav.Link href="/contact">Contact Me</Nav.Link>
    
    
    </Nav>
    <Nav>
      <a href="https://www.linkedin.com/in/sagar-208723153"><i className="fa fa-twitter"></i></a>

      <a href="https://www.github.com/sagar-host">
      <i className="fa fa-github"></i>
      </a>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     </div>
  )
}

export default header