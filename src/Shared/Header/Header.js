import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Tech School</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             
                <Link to="/registration"> Registration</Link>

                <Link to="/login"> Login </Link>
             
             
             
              
                <Link to="/registration"> Courses</Link>
              
             
                <Link to="/registration"> Faq</Link>
              
              
                <Link to="/registration"> Blog</Link>
              
            </Nav>
            <Nav>
              <Nav.Link>More deets</Nav.Link>
              <Nav.Link eventKey={2}>Dank memes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;