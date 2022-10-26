import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "intersection-observer";
import { setupServer } from "msw/node";
import { rest } from "msw";
import "jest-canvas-mock";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import AppContext from "../AppContext";
// import DarkModeToggle from "react-dark-mode-toggle";

const mockResponse = {
  sections: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Education",
      href: "/education",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
const darkMode = {
  value: true,
};

const server = setupServer(
  rest.get("profile/header.json", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// test("to have seven itens in the navbar", async () => {
//   render(
//     <BrowserRouter>
//       <Header url="profile/header.json" />
//     </BrowserRouter>
//   );

//   const aTags = await waitFor(() => screen.getAllByRole("a"));
//   expect(aTags).toHaveLength(7);
// });
// test("logo to be on the screen", async () => {
//   render(
//     <BrowserRouter>
//       <Header url="profile/header.json" />
//     </BrowserRouter>
//   );

//   const logo = await waitFor(() => screen.getByTestId("logo"));
//   expect(logo).toHaveAttribute("alt", "main logo");
//   expect(logo).toHaveAttribute("src", "logo.png");
// });
test("logo to be on the screen", async () => {
  render(
    <BrowserRouter>
      <AppContext.Provider value={{ darkMode }}>
        <Header url="profile/header.json">
          <AppContext.Consumer>
            <DarkModeToggle checked={true} />
          </AppContext.Consumer>
        </Header>
      </AppContext.Provider>
    </BrowserRouter>
  );
  const logo = await waitFor(() => screen.getByTestId("logo"));
  expect(logo).toHaveAttribute("alt", "main logo");
  expect(logo).toHaveAttribute("src", "logo.png");
});
