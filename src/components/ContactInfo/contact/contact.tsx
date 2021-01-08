import React from 'react';
import { contact } from '../../../utility/interfaces';
import { Col, Row } from 'react-bootstrap';
import { LocationOn, Email, Phone } from '@material-ui/icons';

const contactWidget = function (props: { data: contact }) {
    return (
        <div className="contact mt-4">
                <h2 className="responsive__heading">Contact Information</h2>

                <Row className="contact__item mt-3">
                    <Col>
                        <span className="mr-2">
                            <LocationOn />
                        </span>
                        {props.data.address}
                    </Col>
                </Row>
                <Row className="contact__item mt-3">
                    <Col>
                        <span className="mr-2">
                            <Email />
                        </span>
                        {props.data.email}
                    </Col>
                </Row>
                <Row className="contact__item mt-3">
                    <Col>
                        <span className="mr-2">
                            <Phone />
                        </span>
                        {props.data.phone}
                    </Col>
                </Row>
        </div>
    );
}

export default contactWidget;