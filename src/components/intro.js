import React, { Component } from 'react';

export class Intro extends Component {
    render() {
        return (
            <section id="intro">
                <div className="intro-content">
                    <div className="row">
                        <h5>Hello, People.</h5>
                        <h1>Your diet starts now.</h1>
                        <a href="#about" className="btn" id="get-started">
                            Get started!
				      </a>
                    </div>
                </div>
            </section>
        );
    }
}
export default Intro;