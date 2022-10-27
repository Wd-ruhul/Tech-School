import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Blog = () => {
  return (
    <div className="m-5">
      <Container>
        
        <h2 className='text-center text-info'>Welcome To Our Blog</h2>
        <Row>
          <Col lg="6">
            <div className="bg-info p-4 text-white mb-3">
              <h3>what is `cors`?</h3>
              <p>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request. An example of a cross-origin
                request: the front-end JavaScript code served from
                https://domain-a.com uses XMLHttpRequest to make a request for
                https://domain-b.com/data.json.
              </p>
            </div>
            <div className="bg-info p-4 text-white mb-3">
              <h3>
                Why are you using `firebase`? What other options do you have to
                implement authentication?
              </h3>
              <p>
                authentication? Image result for Why are you using `firebase`?
                Firebase Authentication provides backend services, easy-to-use
                SDKs, and ready-made UI libraries to authenticate users to your
                app. It supports authentication using passwords, phone numbers,
                popular federated identity providers like Google, Facebook and
                Twitter, and more. Auth0, MongoDB, Passport, Okta, and Firebase
                are the most popular alternatives and competitors to Firebase
                Authentication.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="bg-info p-4 text-white mb-3">
              <h3>How does the private route work?</h3>
              <p>
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in)Private Routes in React Router (also
                called Protected Routes) require a user being authorized to
                visit a route (read: page). So if a user is not authorized for a
                specific page, they cannot access it. The most common example is
                authentication in a React application where a user can only
                access the protected pages when they are authorized (which means
                in this case being authenticated). Authorization goes beyond
                authentication though. 
              </p>
            </div>

            <div className="bg-info p-4 text-white mb-3">
              <h3>What is Node? How does Node work?</h3>
              <p>
                Node. js is an open-source, cross-platform JavaScript runtime
                environment and library for running web applications outside the
                client's browser.Node is completely event-driven. Basically the
                server consists of one thread processing one event after
                another. A new request coming in is one kind of event. The
                server starts processing it and when there is a blocking IO
                operation, it does not wait until it completes and instead
                registers a callback function.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;