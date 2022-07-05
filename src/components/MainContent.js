import React from "react";
import InfluencerCard from "./InfluencerCard";
import Container from 'react-bootstrap/Container';

const MainContent = ({ props }) => {

    const influencers = {};
    return (
        <Container>
            <h1 className='my-5'>Influencers</h1>
            <InfluencerCard/>
        </Container>)
}

export default MainContent;