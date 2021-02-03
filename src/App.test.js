import App from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("App UI tests", () => {
  test("renders App component", () => {
    render(<App />);
    expect(screen.getByText("Start")).toBeInTheDocument();
  });
});
