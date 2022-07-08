import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";

let matchMedia;

describe("NavBar tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("renders NavBar component and menues", () => {
    render(<NavBar />);
    expect(screen.getByRole(/nav/)).toBeInTheDocument();
  });

  test("Navbar initial state is closed", () => {
    render(<NavBar />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("Toggle Navbar shows dialog", async () => {
    render(<NavBar />);
    const button = screen.getByRole(/button/);
    fireEvent.click(button);
    screen.getByRole("dialog");
  });

  test("Navbar includes menu elements", async () => {
    render(<NavBar />);
    const button = screen.getByRole(/button/);
    fireEvent.click(button);
    //screen.getByRole('link', { name: 'Dashboard' })
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Influencer list/i)).toBeInTheDocument();
    expect(screen.getByText(/My Account/i)).toBeInTheDocument();
  });
});
