import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen } from "@testing-library/react";
import App from "./App";

let matchMedia;

describe("Your testing module", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("App Components render", () => {
    render(<App />);
    const mainApp = screen.getByText("Influencers");
    expect(mainApp).toBeInTheDocument();
  });
});
