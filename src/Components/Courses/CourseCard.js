import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseCard = (props) => {
  const { id, name,img } = props.category;
  return (
    <div>
      <div>
        <Card style={{ width: "30rem" }}>
          <Card.Img className="img-fluid" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseCard;