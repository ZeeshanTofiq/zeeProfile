import React from 'react';
import './sidebar.scss';
import { Row, Col } from 'react-bootstrap';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { PermContactCalendar, School, Work, MenuBook } from '@material-ui/icons';

interface sidebarProps extends RouteComponentProps<any> {
    show: Boolean;
    onClose: Function;
}
class Sidebar extends React.Component<sidebarProps>{

    onClose = () => {
        this.props.onClose();
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <aside className={`sidebar ${this.props.show ? 'showSideBar' : 'closeSideBar'}`}>
                    <div className="sidebar__close" onClick={this.onClose}> &#10005;</div>

                    <ul className="mt-5 sidebar__link">
                        <Link to="/" onClick={this.onClose}>
                            <Row as="li" className="sidebar__link--item">
                                <Col xs={1} sm={1} md={1} lg={1}>
                                    <PermContactCalendar className="sidebar__nav--icon" />
                                </Col>
                                <Col>
                                    Contact Information
                                </Col>
                            </Row>
                        </Link>

                        <Link to="/edu" onClick={this.onClose}>
                            <Row as="li" className="sidebar__link--item">
                                <Col xs={1} sm={1} md={1} lg={1}>
                                    <School className="sidebar__nav--icon" />
                                </Col>
                                <Col>
                                    Education
                                </Col>
                            </Row>
                        </Link>

                        <Link to="/work" onClick={this.onClose}>
                            <Row as="li" className="sidebar__link--item">
                                <Col xs={1} sm={1} md={1} lg={1}>
                                    <Work className="sidebar__nav--icon" />
                                </Col>
                                <Col>
                                    Work
                                </Col>
                            </Row>
                        </Link>

                        <Link to="/skills" onClick={this.onClose}>
                            <Row as="li" className="sidebar__link--item">
                                <Col xs={1} sm={1} md={1} lg={1}>
                                    <MenuBook className="sidebar__nav--icon" />
                                </Col>
                                <Col>
                                    Skills
                                </Col>
                            </Row>
                        </Link>

                    </ul>
                </aside>
                <div onClick={this.onClose} className={`sidebar--back sidebar--back--${this.props.show ? 'show' : 'close'}`}></div>
            </React.Fragment>
        );
    }
}

export default withRouter(Sidebar);