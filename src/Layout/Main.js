import React from "react";

import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";


import Header from "../Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default Main;
