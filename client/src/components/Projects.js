import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import endPoints from "../constants/endPoints";
import MainSpinner from "./MainSpinner";

const styles = {
  buttonsSpace: { margin: "0px 4px" },
};

const Projects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endPoints.projects, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  return (
    <>
      {/* <h1>Projects</h1> */}
      <div className="main-container">
        <Container>
          <Fade>
            <h1>Projects</h1>
          </Fade>
          <br />
          {data ? (
            <Fade>
              <Row
                style={{
                  rowGap: "2em",
                }}
              >
                {data.projects.map((item) => {
                  return (
                    <Col
                      key={item.title}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card
                        style={{
                          width: "20rem",
                          padding: "0px",
                        }}
                      >
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.bodyText}</Card.Text>
                          {item.links.map((link) => {
                            return (
                              <Button
                                style={styles.buttonsSpace}
                                target="_blank"
                                href={link.href}
                                key={link.href}
                                variant="outline-dark"
                              >
                                {link.text}
                              </Button>
                            );
                          })}
                        </Card.Body>
                        <Card.Footer>
                          {item.tags.map((tag) => {
                            return (
                              <Badge
                                style={styles.buttonsSpace}
                                key={tag}
                                bg="dark"
                              >
                                {tag}
                              </Badge>
                            );
                          })}
                          <Badge bg="dark" text="testing">
                            testing
                          </Badge>
                        </Card.Footer>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Fade>
          ) : (
            <MainSpinner />
          )}
        </Container>
      </div>
    </>
  );
};

export default Projects;
