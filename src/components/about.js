import React, { Component } from 'react';
import fire from './Fire';

export class About extends Component {
    
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <section id="about" >
                <div className="section-intro">
                    <h1>What is Happle? </h1>
                    <div className="intro-info">
                        <h3>
                            Lose weight or gain weight?<br></br>
                            Happle is a simple tool to find food recipes for you.
                            <button onClick={this.logout}>Logout</button>

				      </h3>
                        <h4><i>Achieve your body's goal in an quick, easy, and fun way.</i></h4>
                    </div>
                </div>
            </section>
        );
    }
}
export default About;