import { Container } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";
import endPoints from "../constants/endPoints";
import React, { useEffect, useState } from "react";
import MainSpinner from "./MainSpinner";

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
    fetch(endPoints.skills, {
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
            <Fade>
              <Zoom>
                <br />
                <p>{data.intro}</p>
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
                                data-testid={item.title}
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
              </Zoom>
            </Fade>
          ) : (
            <MainSpinner />
          )}
        </Container>
      </div>
    </>
  );
};

export default Skills;
