import { render, screen } from "@testing-library/react";
import Education from "./Education";

test("first test", () => {});

test("Title Education/h1 has to be on the screen", () => {
  render(<Education />);
  const h1Title = screen.getByText("Education");
  expect(h1Title).toBeInTheDocument();
});
