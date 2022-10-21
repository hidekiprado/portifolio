import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

test("first test", () => {});

test("Title Projects/h1 has to be on the screen", () => {
  render(<Projects />);
  const h1Title = screen.getByText("Projects");
  expect(h1Title).toBeInTheDocument();
});
