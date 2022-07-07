import React from "react";
import { useState } from "react";
import { Pagination as PaginationBs } from "react-bootstrap";
import "./Pagination.css";
import PropTypes from "prop-types";

const Pagination = ({ itemsPerPage, items, handlePagination }) => {
  let [currentPage, setCurrentPage] = useState(0);
  const pagesAmount = Math.ceil(items.length / itemsPerPage);
  const pagesArray = Array.from({ length: pagesAmount }, (v, i) => i);
  const firstPage = pagesArray[0];
  const lastPage = pagesArray[pagesArray.length - 1];
  const currentPageStartOffset =
    items.length > itemsPerPage ? itemsPerPage * currentPage : 0;
  const currentPageEndOffset =
    items.length > itemsPerPage
      ? currentPageStartOffset + itemsPerPage
      : items.length;
  const currentData = items.slice(currentPageStartOffset, currentPageEndOffset);
  const nextPage = () =>
    currentPage === lastPage ? lastPage : currentPage + 1;
  const prevPage = () =>
    currentPage === firstPage ? firstPage : currentPage - 1;
  handlePagination(currentData);

  return (
    <div className="d-none d-md-flex d-lg-flex d-xl-flex justify-content-center py-4">
      <PaginationBs>
        <PaginationBs.First
          onClick={() => setCurrentPage(firstPage)}
          className="paginationControl"
        />
        <PaginationBs.Prev
          onClick={() => setCurrentPage(prevPage())}
          className="paginationControl"
        />
        {pagesArray.map((pageNumber) => (
          <div key={pageNumber} className="rounded-5">
            <PaginationBs.Item
              className="pageNumber mx-3"
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber + 1}
            </PaginationBs.Item>
          </div>
        ))}
        <PaginationBs.Next
          onClick={() => setCurrentPage(nextPage())}
          className="paginationControl"
        />
        <PaginationBs.Last
          onClick={() => setCurrentPage(lastPage)}
          className="paginationControl"
        />
      </PaginationBs>
    </div>
  );
};

Pagination.propTypes = {
  pageList: PropTypes.array,
  actualPage: PropTypes.number,
  items: PropTypes.array,
  itemsPerPage: PropTypes.number,
  handlePagination: PropTypes.func,
};
export default Pagination;
