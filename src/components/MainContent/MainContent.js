import React from "react";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const MainContent = ({ props }) => {

    const influencers = {};
    return (
        <Container className="mainContent">
            <div class="d-flex flex-between justify-content-between align-items-center">
                <h1 className='my-5'>Influencers</h1>
                <Form>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
            </div>
            <InfluencerCard />
        </Container>)
}

export default MainContent;