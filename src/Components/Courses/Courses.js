import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useLoaderData } from "react-router-dom";

import CourseLeftSideLink from "./CourseLeftSideLink";
import CourseCard from "./CourseCard";


const Courses = () => {
  const courseCategories = useLoaderData()
  console.log("🚀 ~ file: Courses.js ~ line 9 ~ Courses ~ courseCategories", courseCategories)
  return (
    <div>
      This Is Courses
      <Container>
        <Row>
          <Col lg="4">
            <div className="position-sticky top-0 ">
              Courses: {courseCategories.length}
              {courseCategories.map((courseCategory) => (
                <CourseLeftSideLink
                  key={courseCategory.id}
                  courseCategory={courseCategory}
                ></CourseLeftSideLink>
              ))}
            </div>
          </Col>
          <Col lg="8">
            <div className="">
              {courseCategories.map((category) => (
                <CourseCard key={category} category={category}></CourseCard>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
