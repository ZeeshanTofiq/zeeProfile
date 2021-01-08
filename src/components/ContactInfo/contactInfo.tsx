import React from 'react';
import { dbReq } from '../../axios';
import { Spinner, Container, Table } from 'react-bootstrap';
import { contactInfoState } from '../../utility/interfaces';
import Contact from './contact/contact';
import BuildConnect from './buildConnect/buildConnect';
import './contactInfo.scss';


class ContactInfo extends React.Component<any, contactInfoState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: null,
            showSpinner: true
        }
    }
    componentDidMount() {
        dbReq.get<contactInfoState["data"]>('contactInfo').then(
            (res) => {
                this.setState({ data: res.data, showSpinner: false });
            }
        ).catch((err) => {
            console.log(err);
        })
    }
    render() {
        if (this.state.showSpinner) {
            return <div className="text-center mt-3">
                <Spinner animation="border" />
            </div>
        } else {
            if (this.state.data != null) {
                const generalInfo = this.state.data.generalInfo;
                return (
                    <Container as={'main'} className="ContactInfo text-center mt-4 mb-4">
                        <h2 className="responsive__heading">General Information</h2>
                        <Table>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{generalInfo.name}</td>
                                    <th>Gender</th>
                                    <td>{generalInfo.gender}</td>
                                </tr>
                                <tr>
                                    <th>DOB</th>
                                    <td>{generalInfo.dob}</td>

                                    <th>Country</th>
                                    <td>{generalInfo.country}</td>
                                </tr>
                                <tr>
                                    <th>About Me</th>
                                    <td>{generalInfo.aboutMe}</td>
                                </tr>
                            </tbody>
                        </Table>

                        <Contact data={this.state.data.contact} />
                        <BuildConnect data={this.state.data.buildConnect} />
                    </Container>
                );
            }
        }
    }
}

export default ContactInfo;