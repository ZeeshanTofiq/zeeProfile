import React from 'react';
import { skills, SkillsState } from '../../utility/interfaces';
import { Container, Spinner, Badge } from 'react-bootstrap';
import { dbReq } from '../../axios/dbReq';

class Skills extends React.Component<any, SkillsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        dbReq.get<skills[]>('/skills').then((res) => {
            this.setState({
                data: res.data
            })
            console.log('done');
        });
    }
    render() {
        if (this.state.data === null) {
            return (
                <div className="text-center mt-3">
                    <Spinner animation="border" />
                </div>
            );
        } else {
            return (
                <Container as={'main'} className="Skills mt-4 mb-4 text-center">
                    <h2 className="responsive__heading">Skills</h2>
                    {
                        this.state.data.map((value, index) => {
                            return (
                                <div className="btn btn-primary m-2">
                                    {value.name}
                                    <Badge variant="primary" >
                                        {`${value.exp} ${parseInt(value.exp) > 1 ? 'years' : 'year'}`}
                                    </Badge>
                                </div>
                            );
                        })
                    }
                </Container>
            );
        }

    }
}

export default Skills;