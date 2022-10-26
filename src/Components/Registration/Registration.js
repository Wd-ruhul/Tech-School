import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const Registration = () => {
  const { createUser } = useContext(AuthContext)
  
  const handleRegForm = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log( email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        return error;
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <Form className="w-50 " onSubmit={handleRegForm}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="Text" placeholder="Enter Your Name" name="name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registration
        </Button>
        <p>
          <small>
            Already Have An Account ,Please <Link to="/login">Login</Link>
          </small>
        </p>
      </Form>
    </div>
  );
};

export default Registration;