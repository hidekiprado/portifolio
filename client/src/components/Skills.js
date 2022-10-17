import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import endpoints from "../constants/endpoints";
import React, { useEffect, useState } from "react";

function Skills() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(endpoints.skills, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Container>
        <h1>Skills</h1>
        <Fade>
          <p>
            I love to learn new things and experiment with new technologies.
          </p>

          <h3>Languages & Database</h3>
          <Container>
            <p>images</p>
          </Container>
          <h3>Frameworks & Technologies</h3>
          <Container>
            <p>images</p>
          </Container>
          <h3>Tools & Platforms</h3>
          <Container>
            <p>images</p>
          </Container>
        </Fade>
      </Container>
    </>
  );
}

export default Skills;
