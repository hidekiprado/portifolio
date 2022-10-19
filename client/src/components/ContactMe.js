import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";

const ContactMe = () => {
  return (
    <>
      <div className="main-container">
        <Container>
          <Fade>
            <h1>Contact</h1>
          </Fade>
          <Fade>
            <Row>
              <Col></Col>
              <Col xs={6} style={{ textAlign: "start" }}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Enter Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      size="lg"
                      type="email"
                      placeholder="name@example.com"
                    />
                    <Form.Text className="text-muted">
                      I'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      size="lg"
                      as="textarea"
                      rows={3}
                      type="text"
                      placeholder="Message"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    E-mail
                  </Button>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </>
  );
};

export default ContactMe;
