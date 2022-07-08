import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

let matchMedia;

describe("Pagination tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("renders Pagination", () => {
    render(
      <Pagination
        items={[1, 2]}
        itemsPerPage={10}
        handlePagination={() => {}}
      />
    );
    expect(screen.getByRole("list")).toHaveClass("pagination");
  });

  test("Pagination includes all items", () => {
    const handlePagination = jest.fn();
    render(
      <Pagination
        items={[1, 2]}
        itemsPerPage={10}
        handlePagination={handlePagination}
      />
    );
    expect(handlePagination).toBeCalledWith(expect.arrayContaining([1, 2]));
  });

  test("Pagination slices items", () => {
    const handlePagination = jest.fn();
    render(
      <Pagination
        items={[1, 2]}
        itemsPerPage={1}
        handlePagination={handlePagination}
      />
    );
    expect(handlePagination).toBeCalledWith(expect.arrayContaining([1]));
  });
});
