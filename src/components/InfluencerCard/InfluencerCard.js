import React from "react";
import './InfluencerCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import SocialNetworks from "../SocialNetworks";

const InfluencerCard = () => {
    return (
        <Row xs={1} md={2} className="g-2">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card className='card border-0 m-2'>
                        <Card.Body>
                            <div class='cardgrid'>
                                <div className="avatar">
                                    <Image roundedCircle={true} src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/834.jpg" />
                                </div>
                                <span className="name pt-3">Influencer Name</span>
                                <SocialNetworks className="social" />
                                <Card.Text class="cardText">
                                    <p>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </p>
                                    <div className="d-flex flex-column flex-md-row">
                                        <div><b>Reach</b>: 43.234</div>
                                        <div className='mx-md-5'><b>Resonance</b>: 63.234</div>
                                    </div>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default InfluencerCard;