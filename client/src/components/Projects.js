import { Container, Col, Row, Button, Card, Badge } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

function Projects() {
  return (
    <>
      <Container>
        <Fade>
          <h1>Projects</h1>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../images/projects/wordle.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">GitHub</Button>
                  <Button variant="primary">Live</Button>
                </Card.Body>
                <Card.Footer>
                  <Badge text="testing">testing</Badge>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../images/projects/wordle.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">GitHub</Button>
                  <Button variant="primary">Live</Button>
                </Card.Body>
                <Card.Footer>
                  <Badge text="testing">testing</Badge>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../images/projects/wordle.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">GitHub</Button>
                  <Button variant="primary">Live</Button>
                </Card.Body>
                <Card.Footer>
                  <Badge text="testing">testing</Badge>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Fade>
      </Container>
    </>
  );
}

export default Projects;
