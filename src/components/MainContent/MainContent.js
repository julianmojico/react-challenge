import React from "react";
import { useState, useEffect } from "react";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import Container from "react-bootstrap/Container";
import "./MainContent.css";
import SearchBar from "../SearchBar/SearchBar";
import { useSearchData } from "../../hooks/useSearchData.js";
import Pagination from "../Pagination/Pagination";

const arraysEquals = (a, b) =>
{
 if (a.length === b.length){
  a.every((item) => b.includes(item)) && b.every((item) => a.includes(item));
 }
}

const MainContent = () => {
  const [filteredData, handleSearch] = useSearchData();
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {}, [paginatedData]);

  const handlePagination = (newData) => {
    if (!arraysEquals(newData, paginatedData)) {
      setPaginatedData(newData);
    }
  };

  return (
    <Container className="mainContent px-4">
      <div className="d-flex flex-between justify-content-between align-items-center my-4">
        <h1 className="title">Influencers</h1> 
        <SearchBar handleSearch={handleSearch} />
      </div>
      <InfluencerCard data={paginatedData} />
      <Pagination
        items={filteredData}
        itemsPerPage={10}
        handlePagination={handlePagination}
      />
    </Container>
  );
};

export default MainContent;
