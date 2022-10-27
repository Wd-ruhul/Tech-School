import React from 'react';
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";


const CourseLeftSideLink = (props) => {
  const { _id, name } = props.courseCategory;
  return (
    <div>
      
      <ListGroup>
        <ListGroup.Item variant="info">
          <p>
            <Link to={`/course_details/${_id}`} as="li">
              {name}
            </Link>
          </p>
        </ListGroup.Item>
      </ListGroup>
      
    </div>
  );
};

export default CourseLeftSideLink;