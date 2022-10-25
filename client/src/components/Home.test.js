import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "intersection-observer";
import { setupServer } from "msw/node";
import { rest } from "msw";
import AppContext from "../AppContext";
import Home from "./Home";

const mockResponse = {
  name: "Vinicius Prado",
  roles: ["a Junior Software Engineer", "an eager learner"],
  social: [
    {
      network: "linkedin",
      href: "https://www.linkedin.com/in/vinicius-prado-8911ab3a/",
    },
    {
      network: "github",
      href: "https://github.com/hidekiprado",
    },
  ],
};

const darkMode = {
  value: true,
};

const server = setupServer(
  rest.get("profile/home.json", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Title Home/h1 has to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Home url="profile/home.json" />
    </AppContext.Provider>
  );

  const h1Title = await waitFor(() => screen.getByText("Vinicius Prado"));
  expect(h1Title).toBeInTheDocument();
});

test("Social icons have to be on the screen with defined properties", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Home url="profile/about.json" />
    </AppContext.Provider>
  );

  const img1 = await waitFor(() => screen.getByTestId("linkedin"));
  expect(img1).toHaveAttribute("alt", "linkedin");
  expect(img1).toHaveAttribute("rel", "SocialIcon");
  expect(img1).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/vinicius-prado-8911ab3a/"
  );

  const img2 = await waitFor(() => screen.getByTestId("github"));
  expect(img2).toHaveAttribute("alt", "github");
  expect(img2).toHaveAttribute("rel", "SocialIcon");
  expect(img2).toHaveAttribute("href", "https://github.com/hidekiprado");
});
