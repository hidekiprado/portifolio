import { Container } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import React, { useEffect, useState } from "react";
import endpoints from "../constants/endpoints";

const Experience = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.experiences, {
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
              <h1 style={{ marginBottom: "0px" }}>Experience</h1>
              <Timeline lineColor={"#ddd"}>
                {data?.experiences.map((item, index) => {
                  return (
                    <div key={index}>
                      <TimelineItem
                        dateText="04/2009 – 11/2010"
                        dateInnerStyle={{
                          background: "#02A3BC",
                          color: "#000",
                        }}
                        bodyContainerStyle={{
                          background: "#ddd",
                          padding: "20px",
                          borderRadius: "8px",
                          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <h3>{item.title}</h3>
                        <br />
                        <h4 style={{ color: "#02A3BC" }}>
                          {item.company}-{" "}
                          <span style={{ color: "#000" }}>{item.workType}</span>
                        </h4>
                        <br />
                        <h5>{item.technologiesTitle}</h5>
                        <p>{item.technologies}</p>
                        <h5>{item.descriptionTitle}</h5>
                        {item.description.map((row, indexDesc) => {
                          return <p>{row}</p>;
                        })}
                      </TimelineItem>
                    </div>
                  );
                })}
              </Timeline>
            </Zoom>
          </Fade>
        </Container>
      </div>
    </>
  );
};

export default Experience;
