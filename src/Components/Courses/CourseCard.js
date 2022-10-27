import React from 'react';

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
  const {_id, name,img } = props.category;
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
            <Button variant="primary">
              <Link
                className="text-decoration-none text-white"
                to={`/premiumCourse/${_id}`}
              >
                CheckOut Premium Course
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseCard;