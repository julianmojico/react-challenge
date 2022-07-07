import React from "react";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import Container from "react-bootstrap/Container";
import "./MainContent.css";
import SearchBar from "../SearchBar/SearchBar";
import { useSearchData } from "../../hooks/useSearchData.js";

const MainContent = () => {
  const [filteredData, handleSearch] = useSearchData();

  return (
    <Container className="mainContent px-4">
      <div className="d-flex flex-between justify-content-between align-items-center my-4">
        <h1 className="title">Influencers</h1>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <InfluencerCard data={filteredData} />
    </Container>
  );
};

export default MainContent;
