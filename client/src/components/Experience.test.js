import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "intersection-observer";
import { setupServer } from "msw/node";
import { rest } from "msw";
import AppContext from "../AppContext";
import Experience from "./Experience";

const mockResponse = {
  mainTitle: "Experience",
  experiences: [
    {
      title: "Rope Access Technician",
      company: "All Trades Abseiling",
      workType: "Sole-Trader",
      technologiesTitle: "",
      technologies: "",
      descriptionTitle: "Responsibilties",
      description: ["- Remedial repairs"],
      date: "11/2017 – Present",
    },
    {
      title: "Systems integration Engineer",
      company: "Syngenta, Brazil",
      workType: "Full-time",
      technologiesTitle: "Technologies used",
      technologies: "Scrum, Business Analysis, SQL, Microsoft 365 products",
      descriptionTitle: "Responsibilties",
      description: [
        "- System design and planning activities with vendor including business requirement mapping",
        "- Data format and application integration interface specifications",
        "- Agile project management with daily reporting on progress and risk identification",
        "- Design and implementation of Data pipeline and supervision of data loads",
        "- Consulting, training and change management of team members",
      ],
      date: "09/2011 – 05/2016",
    },
  ],
};
const darkMode = {
  value: true,
};

const server = setupServer(
  rest.get("profile/experiences.json", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("first test", () => {});

test("Title Experience/h1 has to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Experience url="profile/experiences.json" />
    </AppContext.Provider>
  );
  const h1Title = await waitFor(() => screen.getByText("Experience"));
  expect(h1Title).toBeInTheDocument();
});

test("In the sub containers' titles to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Experience url="profile/experiences.json" />
    </AppContext.Provider>
  );
  const container1Title = await waitFor(() =>
    screen.getByText("Rope Access Technician")
  );
  expect(container1Title).toBeInTheDocument();

  const container2Title = await waitFor(() =>
    screen.getByText("Systems integration Engineer")
  );
  expect(container2Title).toBeInTheDocument();
});
