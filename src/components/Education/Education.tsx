import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { education, educationState } from '../../utility/interfaces';
import { dbReq } from '../../axios';
import './Education.scss';

class Education extends React.Component<any, educationState>{
    constructor(props: any) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        dbReq.get<education[]>('education').then((res) => {
            this.setState({
                data: res.data
            });

        }).catch((e) => {
            console.log('error found');
        })
    }
    render() {
        if (this.state.data === null) {
            return <div className="text-center mt-3">
                <Spinner animation="border" />
            </div>
        } else {
            
            return (
                <Container as={'main'} className="Education text-center mt-4 mb-4">
                    <h2 className="responsive__heading">Education</h2>
                    <ul className="education__list">
                        {
                            this.state.data.map((value) => {
                                return (
                                    <li className="education__list--item mb-3">
                                        <div className="education__list--item--title">
                                            <span className="education__list--item--title--name">{value.name}</span>
                                            <span className="education__list--item--title--passYear">{value.passYear}</span>
                                        </div>
                                        <div className="education__list--item--content">
                                            <div className="education__list--item--content--institute">
                                                <span className="education__list--item--content--institute--Q"></span>
                                                <span className="education__list--item--content--institute--A">{value.InstituteName}</span>
                                            </div>
                                            <p className="education__list--item--content--about" style={{display:value.about?"block":"none"}}>
                                                <span className="education__list--item--content--about--Q"></span>
                                                <span className="education__list--item--content--about--A">{value.about}</span>
                                            </p>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>

                </Container>
            );
        }
    }
}

export default Education;