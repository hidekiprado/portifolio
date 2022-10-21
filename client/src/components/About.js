import { Container, Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import endPoints from "../constants/endPoints";
import MainSpinner from "./MainSpinner";

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: "0.9vh",
  },
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
  faceImageStyle: { maxWidth: "90%", margin: "10px", borderRadius: "1em" },
};

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endPoints.about, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      {/* <h1>About</h1> */}
      <div className="main-container">
        <Container>
          <Fade>
            <h1>About</h1>
          </Fade>
          <br />
          {data ? (
            <Fade>
              <Row>
                <Col lg={true} style={styles.infoContainer}>
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
                  <img
                    style={styles.faceImageStyle}
                    src={data?.image}
                    alt="self"
                  />
                </Col>
              </Row>
            </Fade>
          ) : (
            <MainSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

export default About;
