import { Container } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";
import { Chrono } from "react-chrono";

const data = [
  {
    title: "May 1940",
    cardTitle: "Test 1",
    url: "http://google.com",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
  },
  {
    title: "May 1941",
    cardTitle: "Test 2",
    url: "http://google.com",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
  },
];

const Education = () => {
  return (
    <>
      <div className="main-container">
        <Container>
          <Fade duration="2000">
            <Zoom>
              <h1>Education</h1>
              <Container>
                <Chrono
                  items={data}
                  mode="VERTICAL_ALTERNATING"
                  twoColumns
                ></Chrono>
              </Container>
            </Zoom>
          </Fade>
        </Container>
      </div>
    </>
  );
};

export default Education;
