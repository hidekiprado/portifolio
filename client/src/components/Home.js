import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { SocialIcon } from "react-social-icons";
import React, { useEffect, useState } from "react";
import endPoints from "../constants/endPoints";
import { Container } from "react-bootstrap";
import MainSpinner from "./MainSpinner";

const styles = {
  nameStyle: {
    fontSize: "4em",
  },
  typeWriterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inlineChild: {
    display: "inline-block",
  },
  homeMainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  },
};
function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endPoints.home, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  return (
    <div className="main-container">
      <Container>
        {data ? (
          <Fade>
            <div className="main-container">
              <div style={styles.homeMainContainer}>
                <h1 style={styles.nameStyle}>{data?.name}</h1>
                <div style={styles.typeWriterContainer}>
                  <h2 style={styles.inlineChild}>I'm&nbsp;</h2>
                  <Typewriter
                    options={{
                      loop: true,
                      autoStart: true,
                      strings: data?.roles,
                    }}
                  />
                </div>
                <div style={{ display: "flex", gap: ".5rem" }}>
                  {data?.social.map((icon) => {
                    return (
                      <div key={icon.network}>
                        <SocialIcon
                          url={icon.href}
                          target="_blank"
                          rel="SocialIcon"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Fade>
        ) : (
          <MainSpinner />
        )}
      </Container>
    </div>
  );
}

export default Home;
