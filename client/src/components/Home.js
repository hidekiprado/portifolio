import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { SocialIcon } from "react-social-icons";
import React, { useEffect, useState, useContext } from "react";
import endPoints from "../constants/endPoints";
import { Container } from "react-bootstrap";
import MainSpinner from "./MainSpinner";
import AppContext from "../AppContext";
import { lightTheme, darkTheme } from "../theme/themes";

const styles = {
  nameStyle: {
    fontSize: "4em",
  },
  typeWriterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "calc(1.325rem + .9vw)", //same size as a H2 tag
    fontWeight: "500",
  },
  inlineChild: {
    display: "inline-block",
    margin: "0px",
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
  // Component ThemeToggler is the context consumer with the button DarkModeToggle
  // the Provider is on the App.js
  const isDarkMode = useContext(AppContext).darkMode.value;

  const [data, setData] = useState(null);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    isDarkMode ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [isDarkMode]);

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
                      strings: data.roles,
                    }}
                  />
                </div>
                <div style={{ display: "flex", gap: ".5rem" }}>
                  {data.social.map((icon) => {
                    return (
                      <div key={icon.network}>
                        <SocialIcon
                          data-testid={icon.network}
                          url={icon.href}
                          target="_blank"
                          rel="SocialIcon"
                          bgColor={theme.socialIconsBgColor}
                          alt={icon.network}
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
