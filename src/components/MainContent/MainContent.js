import React from "react";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import Container from 'react-bootstrap/Container';
import './MainContent.css';
import SearchBar from "../SearchBar/SearchBar";
import Data from '../../resources/data/data.js';

const MainContent = ({ props }) => {
    const data = Data.influencers;
    return (
        <Container className="mainContent px-4">
            <div className="d-flex flex-between justify-content-between align-items-center my-4">
                <h1 className="title">Influencers</h1>
                {/* TODO: Componentizar */}
                <SearchBar/>
            </div>
            <InfluencerCard data={data}/>
        </Container>)
}

export default MainContent;