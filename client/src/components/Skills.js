import { Container, Row } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";
import endpoints from "../constants/endpoints";
import React, { useEffect, useState } from "react";

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
};

const Skills = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(endpoints.skills, {
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
              <h1>Skills</h1>
              <p>{data?.intro}</p>

              {data &&
                data.skills?.map((skill, index) => {
                  return (
                    <div key={index}>
                      <h2>{skill.title}</h2>
                      {skill.items.map((item) => {
                        return (
                          <div
                            style={{ display: "inline-block" }}
                            key={item.title}
                          >
                            <img
                              style={styles.iconStyle}
                              src={item.icon}
                              alt={item.title}
                            />
                            <p>{item.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              {/* <h3>Languages & Database</h3>
          <Container>
            <p>images</p>
          </Container>
          <h3>Frameworks & Technologies</h3>
          <Container>
            <p>images</p>
          </Container>
          <h3>Tools & Platforms</h3>
          <Container>
            <p>images</p>
          </Container> */}
            </Zoom>
          </Fade>
        </Container>
      </div>
    </>
  );
};

export default Skills;
