import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

let matchMedia;

describe("SearchBar tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("renders SearchBar", () => {
    render(<SearchBar />);
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  test("user input event changes the value", () => {
    render(<SearchBar handleSearch={() => {}} />);
    const input = screen.getByRole("searchbox");
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "Sometext" } });
    expect(input.value).toBe("Sometext");
  });
});
