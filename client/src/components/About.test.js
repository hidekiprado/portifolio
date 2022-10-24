import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "intersection-observer";
import { setupServer } from "msw/node";
import { rest } from "msw";
import AppContext from "../AppContext";
import About from "./About";

const mockResponse = {
  mainTitle: "About",
  aboutTitle: "Versatile Software Engineer",
  about:
    "Amateur inventor equipped with a bachelor’s degree in Computer Science, a postgraduate degree in Project Management (specialised on PMBOK) and 6 years of professional experience as a Java and SQL Developer, I apply analytic thinking and systematic approach to problem-solving. My strong Agile-driven and Object-oriented system design capability and coding experience in Java 8, JavaScript, SQL give me confidence to work with all other programming languages.",
  interests: "Interests and activities",
  interestsContent:
    "I enjoy sports and being outdoors. I love spending time at Australian beaches and I’m a passionate Slackliner. \n I try to look at every step-in life as a project and apply my knowledge and experience to resolve anything that comes along as well as effectively manage and lead groups of people to achieve collective goals.",
  recreationTitle: "  Sports and Recreation",
  recreations: [
    {
      icon: "images/about/slackline.png",
      title: "Slackline",
    },
    {
      icon: "images/about/juggling.png",
      title: "Juggling",
    },
    {
      icon: "images/about/rock-climbing.png",
      title: "Rock Climbing",
    },
    {
      icon: "images/about/rubiks-cube.png",
      title: "Speed Cubing",
    },
  ],
  profileLightMode: "images/about/profile-lightMode.png",
  profileDarkMode: "images/about/profile-darkMode.png",
};

const darkMode = {
  value: true,
};

const server = setupServer(
  rest.get("profile/about.json", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Title About/h1 has to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <About url="profile/about.json" />
    </AppContext.Provider>
  );

  const h1Title = await waitFor(() => screen.getByText("About"));
  expect(h1Title).toBeInTheDocument();
});
test("In the main container, titles to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <About url="profile/about.json" />
    </AppContext.Provider>
  );

  const container1Title = await waitFor(() =>
    screen.getByText("Versatile Software Engineer")
  );
  expect(container1Title).toBeInTheDocument();

  const container2Title = await waitFor(() =>
    screen.getByText("Interests and activities")
  );
  expect(container2Title).toBeInTheDocument();

  const container3Title = await waitFor(() =>
    screen.getByText("Sports and Recreation")
  );
  expect(container3Title).toBeInTheDocument();
});

test("Self image has to be on the screen with defined properties", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <About url="profile/about.json" />
    </AppContext.Provider>
  );

  const img = await waitFor(() => screen.getByTestId("self-image"));
  expect(img).toHaveAttribute("alt", "self");
  expect(img).toHaveAttribute("src", "images/about/profile-darkMode.png");
});

test("Sport and Recreation images have to be on the screen with defined properties", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <About url="profile/about.json" />
    </AppContext.Provider>
  );

  const img1 = await waitFor(() => screen.getByTestId("Slackline"));
  expect(img1).toHaveAttribute("alt", "recreation");
  expect(img1).toHaveAttribute("src", "images/about/slackline.png");

  const img2 = await waitFor(() => screen.getByTestId("Juggling"));
  expect(img2).toHaveAttribute("alt", "recreation");
  expect(img2).toHaveAttribute("src", "images/about/juggling.png");

  const img3 = await waitFor(() => screen.getByTestId("Rock Climbing"));
  expect(img3).toHaveAttribute("alt", "recreation");
  expect(img3).toHaveAttribute("src", "images/about/rock-climbing.png");

  const img4 = await waitFor(() => screen.getByTestId("Speed Cubing"));
  expect(img4).toHaveAttribute("alt", "recreation");
  expect(img4).toHaveAttribute("src", "images/about/rubiks-cube.png");
});
