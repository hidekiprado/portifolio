import { Container, Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { SocialIcon } from "react-social-icons";

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
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
function Home() {
  return (
    <>
      <Container>
        <Fade>
          <div style={styles.mainContainer}>
            <h1 style={styles.nameStyle}>Vinicius Prado</h1>
            <div style={styles.typeWriterContainer}>
              <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: ["a Junior Software Engineer", "an Eager Learner"],
                }}
              />
            </div>
            <div className="social">
              <SocialIcon
                url="https://github.com/hidekiprado"
                target="_blank"
                rel="SocialIcon"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/vinicius-prado-8911ab3a/"
                target="_blank"
                rel="SocialIcon"
              />
            </div>
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default Home;
