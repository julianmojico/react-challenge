import React from "react";
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import SocialNetworks from "./SocialNetworks";

const InfluencerCard = () => {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Body>
                            <Row sm={0} >
                                <Col xs={3} md={3}>
                                    <Image className='float-sm-left w-75' roundedCircle={true} src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/834.jpg" />
                                </Col>
                                <Col xs={9} md={9}>
                                    <Card.Title>Influencer name</Card.Title>
                                    <SocialNetworks />
                                    <Card.Text>
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
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default InfluencerCard;