import React from 'react';
import {Navbar,Nav,Container } from "react-bootstrap";
import "./header.css"



function header() {

  return (
     <div className="header">
         <Navbar id='NAVBAR' collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand href="#home" >EverGreen</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  href="/myproject">My Project</Nav.Link>
      <Nav.Link href="#pricing">Contact Me</Nav.Link>
    
    
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><a href="#"><i className="fa fa-twitter"></i></a>
</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <a href="#"><i className="fa fa-github"></i></a>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     </div>
  )
}

export default header