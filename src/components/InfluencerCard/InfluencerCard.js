import React from "react";
import "./InfluencerCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import PropTypes from "prop-types";
import { BsFillPersonFill } from "react-icons/bs";

const audienceFormatter = (number) => Math.round(number / 1000000) + "M";
function InfluencerCard({ data }) {
  const notEmpty = Array.isArray(data) && data.length;

  return (
    notEmpty && (
      <Row xs={1} md={2} className="p-0 g-2">
        {data.length &&
          data?.map((person) => (
            <Col key={person.uid}>
              <Card className="card border-0 mr-2">
                <Card.Body>
                  <div className="cardgrid">
                    <div className="avatar">
                      <Image fluid roundedCircle={true} src={person.avatar} />
                      <div className="audience">
                        <BsFillPersonFill />
                        <span>{audienceFormatter(person.audience)}</span>
                      </div>
                    </div>
                    <span className="name mx-3 mx-md-0">{person.name}</span>
                    <SocialNetworks data={person.channels} className="social" />
                    <div className="cardText pr-3">
                      <div className="description">
                        <span>{person.description}</span>
                      </div>
                      <div className="d-flex flex-column flex-md-row flex-md-nowrap justify-content-md-start mt-3">
                        <div className="audience-text">
                          <b>Audience:</b>
                          <>&#160;</> {audienceFormatter(person.audience)}{" "}
                        </div>
                        <div className="mx-md-4">
                          <b>Reach:</b>
                          <>&#160;</>
                          {person.reach}
                        </div>
                        <div className="mx-md-4">
                          <b>Resonance:</b>
                          <>&#160;</> {person.resonance}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    )
  );
}

InfluencerCard.propTypes = {
  data: PropTypes.array,
};

export default InfluencerCard;
