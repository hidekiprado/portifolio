import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import React, { useState } from "react";

const ContactMe = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const form = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => setResponse(res))
      .catch((err) => err);
  };

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
              {response ? (
                <Col xs={8}>
                  <h3>Your email was sent successfully</h3>
                </Col>
              ) : (
                <Col xs={8} style={{ textAlign: "start" }}>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        name="name"
                        size="lg"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        name="email"
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
                        name="message"
                        size="lg"
                        as="textarea"
                        rows={7}
                        type="text"
                        placeholder="Message"
                      />
                    </Form.Group>
                    <Button size="lg" variant="dark" type="submit">
                      Send
                    </Button>{" "}
                    <Button
                      target="_blank"
                      href="https://drive.google.com/file/d/1pAv1iozTNpzcwlNnViGG4MQi3BK6xhBw/view?usp=sharing"
                      size="lg"
                      variant="outline-dark"
                    >
                      Download Resume
                    </Button>
                  </Form>
                </Col>
              )}

              <Col></Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </>
  );
};

export default ContactMe;
