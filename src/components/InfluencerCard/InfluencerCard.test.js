import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen, within } from "@testing-library/react";
import InfluencerCard from "./InfluencerCard";

let matchMedia;

const sampleInfluencer1 = {
  audience: 2439571,
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/834.jpg",
  description: "In doloremque nisi laboriosam mollitia enim eaque.",
  name: "Giuseppe Hickle",
  reach: 4.333,
  resonance: 35.538,
  uid: "036caeb1-0d56-46aa-b0ff-6a261a8d1239",
  is_aligned: false,
  channels: [
    {
      handle: "Giuseppe.Hickle54",
      platform: "INSTAGRAM",
    },
    {
      handle: "Giuseppe.Hickle54",
      platform: "TIKTOK",
    },
  ],
};

const sampleInfluencer2 = {
  audience: 268321,
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/657.jpg",
  description:
    "Omnis minus qui vitae dolor sapiente eligendi exercitationem odio ipsa.",
  location: "Federal Way, DE Uganda",
  name: "Herman Dietrich",
  reach: 96.75,
  resonance: 57.816,
  uid: "70d2ffe6-23cc-44b5-bec8-f822386710d5",
  is_aligned: true,
  channels: [
    {
      handle: "Herman_Dietrich70",
      platform: "TWITCH",
    },
    {
      handle: "Herman_Dietrich70",
      platform: "TIKTOK",
    },
  ],
};

describe("InfluencerCard tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("renders InfluencerCard", () => {
    render(<InfluencerCard data={[sampleInfluencer1, sampleInfluencer2]} />);
    expect(screen.getByRole("influencer-list")).toBeInTheDocument();
  });

  test("SocialNetworks input renders instagram", async () => {
    render(<InfluencerCard data={[sampleInfluencer1, sampleInfluencer2]} />);
    const list = screen.getByRole("influencer-list");
    const { getAllByRole } = within(list);
    const card = getAllByRole("influencer-card");
    expect(card.length).toEqual(2);
  });
});
