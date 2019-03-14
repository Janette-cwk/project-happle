import React, { Component } from 'react';
import { helpblock, FormGroup, FormControl, ControlLabel, Form, Button } from "react-bootstrap";
import LoaderButton from "./LoaderButton";


export class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: '',
            password: '',
            confirmPassword: '',
            newUser: null
        };
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ isLoading: true });
        this.setState({ newUser: "test" });
        this.setState({ isLoading: false });
    }


    render() {
        return (
           
            <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password" />
                </FormGroup>
                <FormGroup controlId="confirmPassword" bsSize="large">
                    <ControlLabel>ConfirmPassword</ControlLabel>
                    <FormControl
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        type="password"/>
                </FormGroup>
                <LoaderButton
                    helpblock="true"
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Signup"
                    loadingText="Signing up..." />
            </Form>


        );
    }

}

export default SignUpForm;
