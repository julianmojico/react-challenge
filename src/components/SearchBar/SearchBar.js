import React, { useEffect } from "react";
import { useState } from "react";
import './SearchBar.css';
import Form from 'react-bootstrap/Form';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {

    const [open,setOpen] = useState(false);
    const openClass = open? 'open' : '';

    return (
        <Form className={`searchBar ${openClass}`} onClick={() => setOpen(!open)} >
            <FiSearch className='searchIcon' />
            <Form.Control
                type="search"
                placeholder="Search for an influencer"
                aria-label="Search"
            />
        </Form>
    );
}

export default SearchBar;