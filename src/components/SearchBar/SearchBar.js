import React from "react";
import { useState } from "react";
import './SearchBar.css';
import Form from 'react-bootstrap/Form';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({handleSearch}) => {

    const [open, setOpen] = useState(false);
    const openClass = open ? 'open' : '';

    return (
        <Form className={`searchBar ${openClass}`} onClick={() => setOpen(!open)} >
            <FiSearch className='searchIcon' />
            <Form.Control
                onChange={ (event) => handleSearch(event.target.value) }
                type="search"
                placeholder="Search for an influencer"
                aria-label="Search"
            />
        </Form>
    );
}

export default SearchBar;