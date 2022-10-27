import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Tech School</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" nav me-auto d-lg-flex  justify-content-lg-around">
              <Link className=" nav me-5 text-decoration-none" to="/login">
                Login
              </Link>

              <Link
                className=" nav  me-5 text-decoration-none"
                to="/courses"
              >
                {" "}
                Courses
              </Link>

              <Link
                className=" nav  me-5 text-decoration-none"
                to="/faq"
              >
                {" "}
                Faq
              </Link>

              <Link
                className="nav  me-5 text-decoration-none"
                to="/blog"
              >
                {" "}
                Blog
              </Link>
            </Nav>
            <Nav>
              {user?.photoURL ? (
                <Image
                  style={{ height: "40px" }}
                  roundedCircle
                  src={user.photoURL}
                  alt={user.displayName}
                  title={user.displayName}
                ></Image>
              ) : (
                <FaUserCircle></FaUserCircle>
              )}

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