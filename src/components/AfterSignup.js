import React, { Component } from 'react';
import fire from './Fire';

export class AfterSignup extends Component {
    
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <section>
                
                <h1>
                    <button onClick={this.logout}>Logout</button>
                </h1>
            </section>
        );
    }
}
export default AfterSignup;