import React from "react";
import { Pagination } from "react-bootstrap";
import './Footer.css';

const Footer = ({ pageList, actualPage }) => {
    return (
        <div className="d-none d-md-flex d-lg-flex d-xl-flex justify-content-center py-4">
            <Pagination>
                <Pagination.First className='paginationControl'/>
                <Pagination.Prev className='paginationControl'/>
                {pageList.map(pageNumber =>
                    <div class="rounded-5"><Pagination.Item className='pageNumber mx-3' key={pageNumber} active={pageNumber === actualPage} >{pageNumber}</Pagination.Item></div>
                )}
                <Pagination.Next className='paginationControl'/>
                <Pagination.Last className='paginationControl'/>
            </Pagination>
        </div>
    )
}

export default Footer;