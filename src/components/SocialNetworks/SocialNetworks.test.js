import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen } from "@testing-library/react";
import SocialNetworks from "./SocialNetworks";

let matchMedia;

describe("SocialNetworks tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("renders SocialNetworks", () => {
    const sampleData = [{ platform: "instagram" }];
    render(<SocialNetworks data={sampleData} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("SocialNetworks input renders instagram", async () => {
    const sampleData = [{ platform: "instagram" }];
    render(<SocialNetworks data={sampleData} />);
    const list = screen.getByRole("instagram");
    expect(list).toBeInTheDocument();
  });

  test("SocialNetworks input renders tiktok", async () => {
    const sampleData = [{ platform: "tiktok" }];
    render(<SocialNetworks data={sampleData} />);
    const list = screen.getByRole("tiktok");
    expect(list).toBeInTheDocument();
  });
});
