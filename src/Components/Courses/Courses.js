import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const courseCategories = useLoaderData()
  console.log("🚀 ~ file: Courses.js ~ line 9 ~ Courses ~ courseCategories", courseCategories)
  return (
    <div>
      This Is Courses
      <Container>
        <Row>
          <Col lg="4">
            <div>
              Courses: {courseCategories.length}
              {courseCategories.map((courseCategory) => (
                <p key={courseCategory.id}>
                  <Link>{courseCategory.name}</Link>
                </p>
              ))}
            </div>
          </Col>
          <Col lg="8">2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
