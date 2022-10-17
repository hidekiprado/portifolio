import { Container, Col, Row } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import endpoints from "../constants/endpoints";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.about, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <div className="main-container">
        <Container>
          <Fade duration="2000">
            <Zoom>
              <h1>About</h1>
              <Row>
                <Col>
                  <h3>{data?.aboutTitle}</h3>
                  <p>{data?.about}</p>
                  <h3>{data?.interests}</h3>
                  <p>{data?.interestsContent}</p>
                  <h3>{data?.recreationTitle}</h3>
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
