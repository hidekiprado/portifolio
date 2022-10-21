import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Chrono } from "react-chrono";
import React, { useEffect, useState, useContext } from "react";
import endPoints from "../constants/endPoints";
import MainSpinner from "./MainSpinner";
import AppContext from "../AppContext";
import { lightTheme, darkTheme } from "../theme/themes";

const Education = () => {
  // Component ThemeToggler is the context consumer with the button DarkModeToggle
  // the Provider is on the App.js

  const isDarkMode = useContext(AppContext).darkMode.value;

  const [data, setData] = useState(null);
  const [mode, setMode] = useState("VERTICAL_ALTERNATING");
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    isDarkMode ? setTheme(darkTheme) : setTheme(lightTheme);
    console.log("from Education", theme);
  }, [theme, isDarkMode]);

  useEffect(() => {
    fetch(endPoints.education, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    if (window?.innerWidth < 576) {
      setMode("VERTICAL");
    }
  }, []);
  return (
    <>
      {/* <h1>Education</h1> */}
      <div className="main-container">
        <Container>
          <Fade>
            <h1>Education</h1>
          </Fade>
          <br />
          {data && theme ? (
            <Fade>
              <Chrono
                allowDynamicUpdate
                useReadMore={false}
                items={data?.education}
                cardHeight={250}
                mode={mode}
                scrollable={true}
                theme={{
                  primary: "#02A3BC",
                  secondary: "#02A3BC",
                  cardBgColor: "#dedede",
                  cardForeColor: "#2b2b2b",
                  titleColor: "#2b2b2b",
                  titleColorActive: theme.fontColor, //special black
                }}
              >
                <div className="chrono-icons">
                  {data?.education.map((education) =>
                    education.icon ? (
                      <img
                        key={education.icon.src}
                        src={education.icon.src}
                        alt={education.icon.alt}
                      />
                    ) : null
                  )}
                </div>
              </Chrono>
            </Fade>
          ) : (
            <MainSpinner />
          )}
        </Container>
      </div>
    </>
  );
};

export default Education;
