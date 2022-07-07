import React from "react";
import { useState } from "react";
import "./SearchBar.css";
import Form from "react-bootstrap/Form";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

const SearchBar = ({ handleSearch }) => {
  const [open, setOpen] = useState(false);
  const openClass = open ? "open" : "";

  return (
    <Form className={`searchBar ${openClass}`}>
      <FiSearch className="searchIcon" onClick={() => setOpen(!open)} />
      <Form.Control
        onChange={(event) => handleSearch(event.target.value)}
        type="search"
        placeholder="Search for an influencer"
        aria-label="Search"
      />
    </Form>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
};

export default SearchBar;
