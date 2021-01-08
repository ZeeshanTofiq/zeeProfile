import React from 'react';
import ContactInfo from './ContactInfo/contactInfo';
import Skills from '../components/Skills/skills';
import Education from '../components/Education/Education';
import Work from '../components/Work/work';
import Header from './header/header';
import './app.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

interface appState {
    show: boolean;
}
class App extends React.Component<any, appState> {
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                <Header />
                    <Switch>
                        <Route path="/" exact component={ContactInfo} />
                        <Route path="/skills" exact component={Skills} />
                        <Route path="/edu" exact component={Education} />
                        <Route path="/work" exact component={Work} />
                        <Redirect to="/" />

                    </Switch>
            </React.Fragment>
        );
    }
}

export default App;