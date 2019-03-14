import React, { Component } from 'react';

export class Instruction extends Component {
    render() {
        return (
            <section id="how">
                <div className="row section-intro">
                    <h1>How It Works</h1>
                </div>
                <div className="signup">
                    <h3>1.Sign up for free.</h3>
                    <h3>2.Find food recipes based on ingredients.</h3>
                    <h3>3.Save your favorite recipes.</h3>
                </div>
            </section>
        );
    }
}
export default Instruction;