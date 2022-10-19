import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Chrono } from "react-chrono";
import React, { useEffect, useState } from "react";
import endPoints from "../constants/endPoints";
import MainSpinner from "./MainSpinner";

const Education = () => {
  const [data, setData] = useState(null);
  const [mode, setMode] = useState("VERTICAL_ALTERNATING");

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
      <div className="main-container">
        <Container>
          <Fade>
            <h1>Education</h1>
          </Fade>
          <br />
          {data ? (
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
                  titleColorActive: "#2b2b2b", //special black
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
