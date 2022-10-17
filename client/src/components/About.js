import { Container, Col, Row } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";

function About() {
  return (
    <>
      <div className="main-container">
        <Container>
          <Fade duration="2000">
            <Zoom>
              <h1>About</h1>
              <Row>
                <Col>
                  <h3>Profile Title</h3>
                  <p>Profile Description</p>
                  <h3>Interests Title</h3>
                  <p>Interests Description</p>
                  <h3>Recreation Title</h3>
                  <p>Recreation Description</p>
                </Col>
                <Col>
                  <Container>
                    <div>face image</div>
                  </Container>
                </Col>
              </Row>
            </Zoom>
          </Fade>
        </Container>
      </div>
    </>
  );
}

export default About;
