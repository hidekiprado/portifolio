import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "intersection-observer";
import { setupServer } from "msw/node";
import { rest } from "msw";
import AppContext from "../AppContext";
import Projects from "./Projects";

const mockResponse = {
  mainTitle: "Projects",
  projects: [
    {
      image: "images/projects/wordle.png",
      title: "Wordle",
      bodyText:
        "- My first project using skills acquired at General Assembly (Software Engineering )",
      links: [
        {
          text: "GitHub",
          href: "https://github.com/hidekiprado/wordle",
        },
        {
          text: "Live",
          href: "https://hidekiprado.github.io/wordle/",
        },
      ],
      tags: ["HTML", "JavaScript", "CSS"],
    },
    {
      image: "images/projects/my-recipes.png",
      title: "My Recipes",
      bodyText:
        "- My second project using skills acquired at General Assembly (Software Engineering )",
      links: [
        {
          text: "GitHub",
          href: "https://github.com/hidekiprado/My-Recipes",
        },
        {
          text: "Live",
          href: "https://my-recipes-vinicius.herokuapp.com/",
        },
      ],
      tags: [
        "Python",
        "Django",
        "JavaScript",
        "Flask",
        "Heroku",
        "PostgreSQL",
        "Bcrypt",
      ],
    },
    {
      image: "images/projects/cocktail-cabinet.png",
      title: "Cocktail Cabinet",
      bodyText:
        "- My third project using skills acquired at General Assembly (Software Engineering )",
      links: [
        {
          text: "GitHub",
          href: "https://github.com/elevin-bot/cocktailCabinet",
        },
        {
          text: "Live",
          href: "https://hidden-inlet-61020.herokuapp.com/",
        },
      ],
      tags: ["NodeJS", "JavaScript", "AXIOS", "PostgreSQL", "Heroku", "Bcrypt"],
    },
    {
      image: "images/projects/portfolio.png",
      title: "Portfolio",
      bodyText:
        "- My forth project using skills acquired at General Assembly (Software Engineering )",
      links: [
        {
          text: "GitHub",
          href: "https://github.com/hidekiprado/portifolio",
        },
        {
          text: "Live",
          href: "https://pure-atoll-48332.herokuapp.com/",
        },
      ],
      tags: ["React", "NodeJS", "JavaScript", "Heroku", "PostgreSQL", "Bcrypt"],
    },
  ],
};

const darkMode = {
  value: true,
};

const server = setupServer(
  rest.get("profile/projects.json", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("first test", () => {});

test("Title Projects/h1 has to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Projects url="profile/projects.json" />
    </AppContext.Provider>
  );

  const h1Title = await waitFor(() => screen.getByText("Projects"));
  expect(h1Title).toBeInTheDocument();
});

test("In the sub containers' titles to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Projects url="profile/projects.json" />
    </AppContext.Provider>
  );

  const container1Title = await waitFor(() => screen.getByText("Wordle"));
  expect(container1Title).toBeInTheDocument();

  const container2Title = await waitFor(() => screen.getByText("My Recipes"));
  expect(container2Title).toBeInTheDocument();

  const container3Title = await waitFor(() =>
    screen.getByText("Cocktail Cabinet")
  );
  expect(container3Title).toBeInTheDocument();
  const container4Title = await waitFor(() => screen.getByText("Portfolio"));
  expect(container4Title).toBeInTheDocument();
});
