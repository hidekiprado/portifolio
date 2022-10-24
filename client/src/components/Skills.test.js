import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "intersection-observer";
import { setupServer } from "msw/node";
import { rest } from "msw";
import AppContext from "../AppContext";
import Skills from "./Skills";

const mockResponse = {
  mainTitle: "Skills",
  intro: "I love to learn new things and experiment with new technologies.",
  skills: [
    {
      title: "Languages & Databases",
      items: [
        {
          icon: "images/skills/js.png",
          title: "JavaScript",
        },
        {
          icon: "images/skills/python.png",
          title: "Python",
        },
        {
          icon: "images/skills/mysql.png",
          title: "MySQL",
        },
        {
          icon: "images/skills/tomcat.png",
          title: "Tomcat",
        },
        {
          icon: "images/skills/postgresql.png",
          title: "PostgreSQL",
        },
        {
          icon: "images/skills/java.png",
          title: "Java",
        },
      ],
    },
    {
      title: "Frameworks & Technologies",
      items: [
        {
          icon: "images/skills/react.png",
          title: "React",
        },
        {
          icon: "images/skills/nodejs.png",
          title: "Nodejs",
        },
        {
          icon: "images/skills/jest.png",
          title: "Jest",
        },
        {
          icon: "images/skills/axios.png",
          title: "Axios",
        },
        {
          icon: "images/skills/rest-api.png",
          title: "Rest API",
        },
        {
          icon: "images/skills/flask.png",
          title: "Flask",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        {
          icon: "images/skills/git.png",
          title: "Git",
        },
        {
          icon: "images/skills/vs-code.png",
          title: "VS Code",
        },
      ],
    },
  ],
};

const darkMode = {
  value: true,
};

const server = setupServer(
  rest.get("profile/skills.json", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Title Skills/h1 has to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Skills url="profile/skills.json" />
    </AppContext.Provider>
  );

  const h1Title = await waitFor(() => screen.getByText("Skills"));
  expect(h1Title).toBeInTheDocument();
});

test("In the main container, titles to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Skills url="profile/skills.json" />
    </AppContext.Provider>
  );

  const container1Title = await waitFor(() =>
    screen.getByText("Languages & Databases")
  );
  expect(container1Title).toBeInTheDocument();

  const container2Title = await waitFor(() =>
    screen.getByText("Frameworks & Technologies")
  );
  expect(container2Title).toBeInTheDocument();

  const container3Title = await waitFor(() =>
    screen.getByText("Tools & Platforms")
  );
  expect(container3Title).toBeInTheDocument();
});

test("Skills images have to be on the screen with defined properties", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Skills url="profile/skills.json" />
    </AppContext.Provider>
  );

  const img1 = await waitFor(() => screen.getByTestId("JavaScript"));
  expect(img1).toHaveAttribute("alt", "JavaScript");
  expect(img1).toHaveAttribute("src", "images/skills/js.png");

  const img2 = await waitFor(() => screen.getByTestId("Python"));
  expect(img2).toHaveAttribute("alt", "Python");
  expect(img2).toHaveAttribute("src", "images/skills/python.png");

  const img3 = await waitFor(() => screen.getByTestId("MySQL"));
  expect(img3).toHaveAttribute("alt", "MySQL");
  expect(img3).toHaveAttribute("src", "images/skills/mysql.png");

  const img4 = await waitFor(() => screen.getByTestId("Tomcat"));
  expect(img4).toHaveAttribute("alt", "Tomcat");
  expect(img4).toHaveAttribute("src", "images/skills/tomcat.png");
});
