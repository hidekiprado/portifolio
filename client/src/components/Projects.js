import { Container, Row, Button, Card, Badge } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState, useContext } from "react";
import endPoints from "../constants/endPoints";
import MainSpinner from "./MainSpinner";
import AppContext from "../AppContext";
import { lightTheme, darkTheme } from "../theme/themes";

const styles = {
  buttonsSpace: { margin: "0px 4px" },
};

const Projects = () => {
  // Component ThemeToggler is the context consumer with the button DarkModeToggle
  // the Provider is on the App.js
  const isDarkMode = useContext(AppContext).darkMode.value;
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    isDarkMode ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [isDarkMode]);

  useEffect(() => {
    fetch(endPoints.projects, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  return (
    <>
      {/* <h1>Projects</h1> */}
      <div className="main-container">
        <Container>
          <Fade>
            <h1>{data?.mainTitle}</h1>
          </Fade>
          <br />
          {data ? (
            <Fade>
              <Row
                style={{
                  gap: "2em",
                  whiteSpace: "pre-wrap",
                  justifyContent: "center",
                }}
              >
                {data.projects.map((item) => {
                  return (
                    <Card
                      key={item.title}
                      style={{
                        width: "18rem",
                        padding: "0px",
                        borderStyle: "none",
                      }}
                    >
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body
                        style={{ backgroundColor: theme.cardBackground }}
                      >
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.bodyText}</Card.Text>
                        {item.links.map((link) => {
                          return (
                            <Button
                              style={styles.buttonsSpace}
                              target="_blank"
                              href={link.href}
                              key={link.href}
                              variant={theme.themeSecondVariante}
                            >
                              {link.text}
                            </Button>
                          );
                        })}
                      </Card.Body>
                      <Card.Footer
                        style={{
                          backgroundColor: theme.cardFooterBackground,
                        }}
                      >
                        {item.tags.map((tag) => {
                          return (
                            <Badge
                              style={styles.buttonsSpace}
                              key={tag}
                              pill
                              bg={theme.themeSecondVariante}
                              text={theme.themeFirtVariante}
                            >
                              {tag}
                            </Badge>
                          );
                        })}
                      </Card.Footer>
                    </Card>
                  );
                })}
              </Row>
            </Fade>
          ) : (
            <MainSpinner />
          )}
        </Container>
      </div>
    </>
  );
};

export default Projects;
