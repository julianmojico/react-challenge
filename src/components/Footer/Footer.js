import React from "react";
import { Pagination } from "react-bootstrap";
import "./Footer.css";
import PropTypes from "prop-types";

const Footer = ({ pageList, actualPage }) => {
  return (
    <div className="d-none d-md-flex d-lg-flex d-xl-flex justify-content-center py-4">
      <Pagination>
        <Pagination.First className="paginationControl" />
        <Pagination.Prev className="paginationControl" />
        {pageList.map((pageNumber) => (
          <div key={pageNumber} className="rounded-5">
            <Pagination.Item
              className="pageNumber mx-3"
              key={pageNumber}
              active={pageNumber === actualPage}
            >
              {pageNumber}
            </Pagination.Item>
          </div>
        ))}
        <Pagination.Next className="paginationControl" />
        <Pagination.Last className="paginationControl" />
      </Pagination>
    </div>
  );
};

Footer.propTypes = {
  pageList: PropTypes.array,
  actualPage: PropTypes.number,
};
export default Footer;
