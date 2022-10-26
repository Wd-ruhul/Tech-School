import React from 'react';
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
  const { logIn, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        return error;
      });
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <Form className="w-50 " onSubmit={handleLogIn}>
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
        <Button className="m-3" variant="primary" type="submit">
          Login
        </Button>
        <Button onClick={handleGoogleSignIn} variant="outline-success">
          Log in With Google
        </Button>
      </Form>
    </div>
  );
};

export default Login;
