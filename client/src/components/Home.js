import { Container, Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
function Home() {
  return (
    <>
      <Container>
        <Fade>
          <p>I will gently appear as I enter the viewport</p>
        </Fade>
      </Container>
    </>
  );
}

export default Home;
