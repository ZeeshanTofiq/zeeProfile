import React from 'react';
import { Image } from 'react-bootstrap';
import { dbReq } from '../../axios';
import { headerState, profile } from '../../utility/interfaces';
import Sidebar from '../sidebar/sidebar';
import './header.scss';


class Header extends React.Component<any, headerState> {
    constructor(props: any) {
        super(props);
        this.state = { data: null, showSidebar: false };
    }
    componentDidMount() {
        dbReq.get<profile>('profile').then(
            (res) => {
                this.setState({
                    data: { ...res.data },
                    showSidebar: false
                });
            }
        ).catch(err => console.log('error found'));
    }
    showSidebar = () => {
        this.setState(prevState => {
            return { ...prevState, showSidebar: true, }
        })
    }
    render() {

        if (this.state.data != null) {

            return (
                //    header
                <React.Fragment>
                    <header className="header">

                        <div className="coverImg" >
                            <Image src={this.state.data.coverImg} />
                            <div className="coverImg__wrapper">
                            </div>
                        </div>

                        <span className="header__bars" onClick={this.showSidebar}>&#9776;</span>

                        <div className="profileImg">
                            <Image src={this.state.data.img} roundedCircle />
                            <h1 className="profileImg__user text-center text-light">{this.state.data.name}</h1>
                        </div>

                    </header>
                    <Sidebar show={this.state.showSidebar} onClose={() => this.setState((prev) => {
                        return {
                            ...prev,
                            showSidebar: false,
                        }
                    })} />
                </React.Fragment>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
export default Header;