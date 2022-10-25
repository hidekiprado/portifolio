import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "intersection-observer";
import { setupServer } from "msw/node";
import { rest } from "msw";
import AppContext from "../AppContext";
import ContactMe from "./ContactMe";

const darkMode = {
  value: true,
};

test("Title Contact/h1 has to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <ContactMe />
    </AppContext.Provider>
  );

  const h1Title = await waitFor(() => screen.getByText("Contact"));
  expect(h1Title).toBeInTheDocument();
});

test("Two buttons have to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <ContactMe />
    </AppContext.Provider>
  );

  const buttons = await screen.findAllByRole("button");
  expect(buttons).toHaveLength(2);
  expect(buttons[1]).toHaveAttribute(
    "href",
    "https://drive.google.com/file/d/1pAv1iozTNpzcwlNnViGG4MQi3BK6xhBw/view?usp=sharing"
  );
  expect(buttons[1]).toHaveAttribute("target", "_blank");
});

test("Two inputs and one text area have to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <ContactMe />
    </AppContext.Provider>
  );

  const inputName = await waitFor(() => screen.getByTestId("name"));
  expect(inputName).toHaveAttribute("name", "name");
  expect(inputName).toHaveAttribute("placeholder", "Enter Name");

  const inputEmail = await waitFor(() => screen.getByTestId("email"));
  expect(inputEmail).toHaveAttribute("name", "email");
  expect(inputEmail).toHaveAttribute("placeholder", "name@example.com");

  const textArea = await waitFor(() => screen.getByTestId("message"));
  expect(textArea).toHaveAttribute("name", "message");
  expect(textArea).toHaveAttribute("placeholder", "Message");
});
