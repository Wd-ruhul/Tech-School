import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLoaderData } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const Courses = () => {
  const courseCategories = useLoaderData()
  console.log("🚀 ~ file: Courses.js ~ line 9 ~ Courses ~ courseCategories", courseCategories)
  return (
    <div>
      This Is Courses
      <Container>
        <Row >
          <Col lg="4">
            <div className="position-sticky top-0 ">
              Courses: {courseCategories.length}
              {courseCategories.map((courseCategory) => (
                <ListGroup>
                  <ListGroup.Item variant="info">
                    <p key={courseCategory.id}>
                      <Link to="/cources" as="li">
                        {courseCategory.name}
                      </Link>
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </div>
          </Col>
          <Col lg="8">
            <div className="">
              {courseCategories.map((category) => (
                <div>
                  <Card style={{ width: "30rem" }}>
                    <Card.Img
                      className="img-fluid"
                      variant="top"
                      src={category.img}
                    />
                    <Card.Body>
                      <Card.Title>{category.name}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
