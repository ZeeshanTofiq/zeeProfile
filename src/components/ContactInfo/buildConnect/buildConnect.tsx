import React from 'react';
import { buildConnect } from '../../../utility/interfaces';
import { Col, Image, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Facebook, GitHub } from '@material-ui/icons';

const BuildConnect = function (props: { data: buildConnect[] }) {
    const iconStyle = {
        height: "2rem",
        width: "2rem"
    }
    return (
        <div className="buildConnect mt-4">
            <h2 className="responsive__heading">Build Connection with me</h2>
            <Row className="mt-3">
                {
                    props.data.map((value, index) => {
                        let logo;
                        if (value.logo) {
                            logo = <Image src={value.logo} className="buildConnect__logo" style={iconStyle} />
                        }
                        else if (value.name === "Facebook") {
                            logo = <Facebook className="buildConnect__logo" style={{ ...iconStyle, color: '337AFF' }} />
                        }
                        else if (value.name === "Github") {
                            logo = <GitHub className="buildConnect__logo" style={iconStyle} />
                        }
                        return <OverlayTrigger
                            overlay={
                                <Tooltip id={`tooltip-${value.name}`}>
                                    {value.name}
                                </Tooltip>
                            }
                        >
                            <Col>
                                <a href={value.profileLink} target="_blank">
                                    {logo}
                                </a>
                            </Col>
                        </OverlayTrigger>
                    })
                }
            </Row>
        </div>
    );
}

export default BuildConnect;