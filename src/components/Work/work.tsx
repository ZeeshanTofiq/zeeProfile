import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { work, workState } from '../../utility/interfaces';
import { dbReq } from '../../axios';

class Work extends React.Component<any, workState>{
    constructor(props: any) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        dbReq.get<work[]>('work').then((res) => {
            this.setState({
                data: res.data
            });
        }).catch((e) => {
            console.log('error found');
        })
    }
    render() {
        if (this.state.data == null) {
            return <div className="text-center mt-3">
                <Spinner animation="border" />
            </div>
        } else {
            return (
                <Container as={'main'} className="Work  mt-4 mb-4">
                    <h2 className="responsive__heading text-center">Work</h2>
                    {
                        this.state.data.map((value, index) => {
                            return (
                                <dl className="mt-3 mb-5" key={`list-item--${index}`}>
                                    <dt style={{ fontSize: "1.4rem" }}>{value.companyName}</dt>
                                    <dd className="ml-4 mt-2">
                                        <dl>
                                            <dt className="mt-2">Pass Year</dt>
                                            <dd className="ml-5">{value.passYear} {parseInt(value.passYear) > 1 ? 'years' : 'year'}</dd>
                                            <dt className="mt-2">What type of this Company?</dt>
                                            <dd className="ml-5">{value.type}</dd>
                                        </dl>
                                    </dd>
                                </dl>
                            );
                        })
                    }
                </Container>
            );
        }
    }
}
export default Work;