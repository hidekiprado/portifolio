import { Container, Col, Row } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import endpoints from "../constants/endpoints";

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
    borderRadius: "5rem",
  },
  iconContainer: {
    display: "inline-block",
    textAlign: "center",
    margin: "0 0.2em",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: "0.9vh",
  },
};

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
              <Row style={{ whiteSpace: "pre-wrap" }}>
                <Col style={styles.infoContainer}>
                  <h3>{data?.aboutTitle}</h3>
                  <p>{data?.about}</p>
                  <h3>{data?.interests}</h3>
                  <p>{data?.interestsContent}</p>
                  <h3>{data?.recreationTitle}</h3>
                  <div>
                    {data?.recreations.map((row, index) => {
                      return (
                        <div style={styles.iconContainer} key={index}>
                          <img
                            style={styles.iconStyle}
                            src={row.icon}
                            alt="recreation"
                          />
                          <p>{row.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </Col>
                <Col>
                  <Container>
                    <img
                      style={{ maxWidth: "80vw", margin: "10px" }}
                      src={data?.image}
                      alt="self"
                    />
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
