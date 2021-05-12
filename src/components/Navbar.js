import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import './Nabar.css'


function Navbar1() {
  return (
    <>
    <Container fluid='md'>


    <Navbar className='centerText' collapseOnSelect expand="lg" >
  <Navbar className='brand1' href="#home">Time 4 You</Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto custom-nav-bg navCe">
      <Nav.Link className='itemLink' href="#features">Features</Nav.Link>
      <Nav.Link className='itemLink' href="#pricing">Pricing</Nav.Link>
      <Nav.Link className='itemLink' href="#services">Services</Nav.Link>
      
    </Nav>
    <Nav>
      {/* <Nav.Link className='mr-auto custom-nav navBt ' href="#deets">Details</Nav.Link>
      <Nav.Link className='custom-nav' eventKey={2} href="#memes">
        Get Started
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
    </>
  )
}

export default Navbar1
