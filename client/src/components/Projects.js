import { Container, Row, Button, Card, Badge } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <>
      <div className="main-container">
        <Container>
          <Fade duration="2000">
            <Zoom>
              <h1>Projects</h1>
              <Row style={{ display: "flex", justifyContent: "space-around" }}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src="../images/projects/wordle.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">GitHub</Button>
                    <Button variant="dark">Live</Button>
                  </Card.Body>
                  <Card.Footer>
                    <Badge text="testing">testing</Badge>
                  </Card.Footer>
                </Card>

                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src="../images/projects/wordle.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">GitHub</Button>
                    <Button variant="dark">Live</Button>
                  </Card.Body>
                  <Card.Footer>
                    <Badge text="testing">testing</Badge>
                  </Card.Footer>
                </Card>

                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src="../images/projects/wordle.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">GitHub</Button>
                    <Button variant="dark">Live</Button>
                  </Card.Body>
                  <Card.Footer>
                    <Badge text="testing">testing</Badge>
                  </Card.Footer>
                </Card>
              </Row>
            </Zoom>
          </Fade>
        </Container>
      </div>
    </>
  );
};

export default Projects;
