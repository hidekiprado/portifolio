import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
function Skills() {
  return (
    <>
      <Container>
        <h1>Skills</h1>
        <Fade>
          <p>
            I love to learn new things and experiment with new technologies.
            These are some of the major languages, technologies, tools and
            platforms I have worked with:
          </p>

          <Container>
            <h3>Languages & Database</h3>
            <p>images</p>
          </Container>
          <Container>
            <h3>Frameworks & Technologies</h3>
            <p>images</p>
          </Container>
          <Container>
            <h3>Tools & Platforms</h3>
            <p>images</p>
          </Container>
        </Fade>
      </Container>
    </>
  );
}

export default Skills;
