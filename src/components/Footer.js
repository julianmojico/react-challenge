import React from "react";
import { Pagination } from "react-bootstrap";

const Footer = ({ pageList, actualPage }) => {
    return (
        <div className="d-flex justify-content-center">
            <Pagination >
                <Pagination.First />
                <Pagination.Prev />
                {pageList.map(pageNumber =>
                    <Pagination.Item key={pageNumber} active={pageNumber === actualPage} >{pageNumber}</Pagination.Item>
                )}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    )
}

export default Footer;