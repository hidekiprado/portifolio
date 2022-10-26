import { Container, Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState, useContext } from "react";
import endPoints from "../constants/endPoints";
import MainSpinner from "./MainSpinner";
import { lightTheme, darkTheme } from "../theme/themes";
import AppContext from "../AppContext";

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.9vh",
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
  faceImageStyle: {
    maxWidth: "75%",
    margin: "10px",
    borderRadius: "1em",
  },
};

function About() {
  // Component ThemeToggler is the context consumer with the button DarkModeToggle
  // the Provider is on the App.js
  const isDarkMode = useContext(AppContext).darkMode.value;

  const [data, setData] = useState(null);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    isDarkMode ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [isDarkMode]);

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
      <div className="main-container">
        <Container>
          <Fade>
            <h1>{data?.mainTitle}</h1>
          </Fade>
          <br />
          {data ? (
            <Fade>
              <Row>
                <Col lg={true} style={styles.infoContainer}>
                  <h3>{data.aboutTitle}</h3>
                  <p>{data.about}</p>
                  <h3>{data.interests}</h3>
                  <p>{data.interestsContent}</p>
                  <h3>{data.recreationTitle}</h3>
                  <div>
                    {data.recreations.map((row, index) => {
                      return (
                        <div style={styles.iconContainer} key={index}>
                          <img
                            data-testid={row.title}
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
                    data-testid="self-image"
                    style={styles.faceImageStyle}
                    src={
                      isDarkMode
                        ? data?.profileDarkMode
                        : data?.profileLightMode
                    }
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
