import React, { Component } from 'react';

export class Header extends Component {
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
                    </ul>
                </nav>
                <div className="clearfix"></div>
            </header>
        );
    }
}
export default Header;