import React from "react";
import Image from "react-bootstrap/Image";
import { Link, useLoaderData } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const CourseDetails = (props) => {
  const courseDetails = useLoaderData()
  
 
  

  return (
    <div>
      <h1 className="text-center text-info text-decoration-underline">
        {courseDetails.name}
      </h1>

      <Container>
        <Row>
          <Col>
            <Image
              className=""
              style={{ width: "40rem" }}
              src={courseDetails.img}
            ></Image>
          </Col>
          <Col>
            <p>{courseDetails.info}</p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;
