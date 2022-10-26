import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import React, { useEffect, useState, useContext } from "react";
import endPoints from "../constants/endPoints";
import MainSpinner from "./MainSpinner";
import { lightTheme, darkTheme } from "../theme/themes";
import AppContext from "../AppContext";

const Experience = () => {
  // Component ThemeToggler is the context consumer with the button DarkModeToggle
  // the Provider is on the App.js
  const isDarkMode = useContext(AppContext).darkMode.value;

  const [data, setData] = useState(null);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    isDarkMode ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [isDarkMode]);

  useEffect(() => {
    fetch(endPoints.experiences, {
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
          {data ? (
            <div>
              <Fade direction="left">
                <Timeline lineColor={"#ddd"}>
                  {data.experiences.map((item, index) => {
                    return (
                      <div key={index}>
                        <TimelineItem
                          dateText="04/2009 – 11/2010"
                          dateInnerStyle={{
                            background: theme.standardBlue,
                            color: theme.fontColor,
                          }}
                          bodyContainerStyle={{
                            background: theme.timelineLineColor,
                            color: theme.fontColor,
                            padding: "20px",
                            borderRadius: "8px",
                          }}
                        >
                          <h3>{item.title}</h3>
                          <br />
                          <h4 style={{ color: theme.standardBlue }}>
                            {item.company}-{" "}
                            <span style={{ color: "gray" }}>
                              {item.workType}
                            </span>
                          </h4>
                          <br />
                          <h5>{item.technologiesTitle}</h5>
                          <p>{item.technologies}</p>
                          <h5>{item.descriptionTitle}</h5>
                          {item.description.map((row) => {
                            return <p key={row}>{row}</p>;
                          })}
                        </TimelineItem>
                      </div>
                    );
                  })}
                </Timeline>
              </Fade>
            </div>
          ) : (
            <MainSpinner />
          )}
        </Container>
      </div>
    </>
  );
};

export default Experience;
