import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Form from "./Form";
import fire from './Fire';


class LandingPage extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="contain">
                <div className="contain-sm">
                <button onClick={this.logout}>Logout</button>
                    <div>
                        {this.props.firebaseUser !== null && (
                            <Redirect to="/result" />
                        )}
                        <div className="contain-signup-outer">
                            <div className="contain-signup">
                                <Form />
                            </div>
                            Already have an account? {" "}
                            <Link to="/login">
                                <span id="signin-link" href="/">Sign in.</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;