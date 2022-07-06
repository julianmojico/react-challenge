import React from "react";
import './InfluencerCard.css'
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import SocialNetworks from "../SocialNetworks";

const InfluencerCard = () => {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Body>
                            <div class='cardgrid'>
                                <Image className='avatar' roundedCircle={true} src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/834.jpg" />
                                <h5 className='name'>Influencer Name</h5>
                                <div className="social"><SocialNetworks /></div>
                                <Card.Text className='cardText'>
                                    <p>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </p>
                                    <div>
                                        <ul className="d-flex list-unstyled">
                                            <li>
                                                <b>Reach</b>: 43.234
                                            </li>
                                            <li className='mx-3'>
                                                <b>Resonance</b>: 63.234
                                            </li>
                                        </ul>

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