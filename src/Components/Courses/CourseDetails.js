import React from "react";
import { useLoaderData } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CourseDetails = (props) => {
  const courseDetails = useLoaderData()
 
  

  return (
    <div>
      course Details: {courseDetails.name}
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={courseDetails.img} />
        <Card.Body>
          <Card.Title>{courseDetails.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
