import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css" 

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home" className='logo'>Zoop.media</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto">
                        <Nav.Link className="nav_link me-5" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav_link me-5" href="#link">Team</Nav.Link>
                        <Nav.Link className="nav_link me-5" href="#link">About Us</Nav.Link>
                        <Nav.Link className="nav_link me-5" href="#link">Services</Nav.Link>
                        <Nav.Link className="nav_link me-5" href="#link">Blog</Nav.Link>
                        <Nav.Link className="nav_link me-5" href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;