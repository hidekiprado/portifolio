import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "intersection-observer";

import About from "./About";

test("first test", () => {});

test("Title About/h1 has to be on the screen", async () => {
  render(<About />);
  const h1Title = screen.getByText("About");
  expect(h1Title).toBeInTheDocument();
});

// test("renders hint when there is no data", () => {
//   render(<GiphyDisplay />);

//   const hint = screen.getByText("Please enter a phrase");
//   expect(hint).toBeInTheDocument();
// });

// test("renders an image when there is some data", () => {
//   render(
//     <GiphyDisplay
//       gifData={{
//         images: {
//           downsized_large: {
//             url: "http://test.image/one.gif",
//           },
//         },
//         title: "One",
//       }}
//     />
//   );

//   const img = screen.getByTestId("gif-image");
//   expect(img).toHaveAttribute("src", "http://test.image/one.gif");
//   expect(img).toHaveAttribute("alt", "One");
// });
