import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./container.css";
import { GiCat } from "react-icons/gi";

const RegContainer = () => {
  return (
    <Container className="container" fluid>
      <Row>
        <Col xs="12" md={{ span: 3, order: 2 }}>
          <h1>Table of Contents</h1>
          <p>
            On top for small screens. Appears last (on the right) for medium
            screens.
          </p>
        </Col>
        <Col xs="12" md={{ span: 9, order: 1 }}>
          <GiCat size={100} color="orange"/>
          <h1>Article</h1>
          <p>
            On the bottom for small screens. Appears first (on the left) for
            medium screens.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegContainer;
