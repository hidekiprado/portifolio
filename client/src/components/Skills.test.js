import { render, screen, fireEvent } from "@testing-library/react";
import Skills from "./Skills";

test("first test", () => {});

test("Title Skills/h1 has to be on the screen", () => {
  render(<Skills />);
  const h1Title = screen.getByText("Skills");
  expect(h1Title).toBeInTheDocument();
});
