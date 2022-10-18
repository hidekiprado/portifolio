import { Container } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";
import { Chrono } from "react-chrono";
import React, { useEffect, useState } from "react";
import endpoints from "../constants/endpoints";

const Education = () => {
  const [data, setData] = useState(null);
  const [mode, setMode] = useState("VERTICAL_ALTERNATING");

  useEffect(() => {
    fetch(endpoints.education, {
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
          <Fade duration="2000">
            <Zoom>
              <h1>Education</h1>
              <Container>
                <Chrono
                  allowDynamicUpdate
                  useReadMore={false}
                  items={data?.education}
                  cardHeight={250}
                  mode={mode}
                  scrollable={true}
                  theme={{
                    primary: "black",
                    secondary: "#02A3BC",
                    cardBgColor: "#dedede",
                    cardForeColor: "black",
                    titleColor: "black",
                    titleColorActive: "black",
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
              </Container>
            </Zoom>
          </Fade>
        </Container>
      </div>
    </>
  );
};

export default Education;
