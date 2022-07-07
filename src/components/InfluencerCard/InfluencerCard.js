import React from "react";
import './InfluencerCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import SocialNetworks from "../SocialNetworks";

const InfluencerCard = ({data}) => {
    return (
        <Row xs={1} md={2} className="p-0 g-2">
            {data.map((item) => (
                <Col key={item.uid}>
                    <Card className='card border-0 mr-2'>
                        <Card.Body>
                            <div className='cardgrid'>
                                <div className="avatar">
                                    <Image fluid roundedCircle={true} src={item.avatar} />
                                </div>
                                <span className="name mx-3 mx-md-0">{item.name}</span>
                                <SocialNetworks className="social" />
                                <Card.Text className="cardText pr-3">
                                    <div className="description">
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="d-flex flex-column flex-md-row flex-md-nowrap justify-content-md-start mt-3">
                                        <p><b>Reach:</b><>&#160;</>{item.reach}</p>
                                        <p className='mx-md-4'><b>Resonance:</b><>&#160;</> {item.resonance} </p>
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