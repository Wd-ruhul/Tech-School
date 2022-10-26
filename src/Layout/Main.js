import React from 'react';


import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
           <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="8">
            
            <Outlet></Outlet>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Main;