import React, { Component } from 'react';
import fire from './Fire';


export class Header extends Component {
    
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <header>
                <a href="#" className="logo">HAPPLE</a>
                <div className="menu-toggle"></div>
                <nav>
                    <ul>
                        <li><a href="#intro" id="introSmooth" className="active">Home</a></li>
                        <li><a href="#about" id="aboutSmooth">About</a></li>
                        <li><a href="#how" id="howSmooth">How</a></li>
                        <li><a href="#result" id="resultSmooth">Result</a></li>
                        <li><a href="#reviews" id="reviewsSmooth">Review</a></li>
                        <button onClick={this.logout}>Logout</button>
                    </ul>
                </nav>
                <div className="clearfix"></div>
            </header>
        );
    }
}
export default Header;