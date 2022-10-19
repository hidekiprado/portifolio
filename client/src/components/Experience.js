import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import React, { useEffect, useState } from "react";
import endPoints from "../constants/endPoints";
import MainSpinner from "./MainSpinner";

const Experience = () => {
  const [data, setData] = useState(null);

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
            <h1>Experience</h1>
          </Fade>
          {data ? (
            <Timeline lineColor={"#ddd"}>
              <Fade direction="left" cascade={true}>
                {data.experiences.map((item, index) => {
                  return (
                    <div key={index}>
                      <TimelineItem
                        dateText="04/2009 – 11/2010"
                        dateInnerStyle={{
                          background: "#02A3BC",
                          color: "#484848",
                        }}
                        bodyContainerStyle={{
                          background: "#ddd",
                          padding: "20px",
                          borderRadius: "8px",
                        }}
                      >
                        <h3>{item.title}</h3>
                        <br />
                        <h4 style={{ color: "#02A3BC" }}>
                          {item.company}-{" "}
                          <span style={{ color: "#484848" }}>
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
              </Fade>
            </Timeline>
          ) : (
            <MainSpinner />
          )}
        </Container>
      </div>
    </>
  );
};

export default Experience;
