import { render, screen } from "@testing-library/react";
import ContactMe from "./ContactMe";

test("first test", () => {});

test("Title ContactMe/h1 has to be on the screen", () => {
  render(<ContactMe />);
  const h1Title = screen.getByText("Contact");
  expect(h1Title).toBeInTheDocument();
});
