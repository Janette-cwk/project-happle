import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import firebase from "firebase";
//import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import fire from './components/Fire';
import Login from './components/Login';
import Homepage from './components/Homepage'
import LandingPage from './components/LandingPage'

const API_KEY = "c1d6ebdfab337a5f6d26dd1abbb4ad09";
const API_ID = "512e40ea";

class App extends Component {

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }

  state = {
    hits: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch
      (`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${recipeName}&from=0&to=6`);

    const data = await api_call.json();
    this.setState({ hits: data.hits });
    console.log(this.state.hits);
  }
  // componentDidMount = () => {
  //   const json = localStorage.getItem("hits");
  //   const hits = JSON.parse(json);
  //   this.setState({ hits: hits });
  // }
  // componentDidUpdate = () => {
  //   const hits = JSON.stringify(this.state.hits);
  //   localStorage.setItem("hits", hits);
  // }


  render() {
    return (
      <Router>
        <div className="App">
          <Header user={this.state.firebaseUser} />
          <Route
            exact
            path="/"
            render={routerProps => (
              <LandingPage
                {...routerProps}
                firebaseUser={this.state.firebaseUser}
              />
            )}
          />
          <Route
            path="/homepage"
            render={routerProps => (
              <Homepage/>
            )}
          />
          <Route
            path="/login"
            render={routerProps => <Login firebaseUser={this.state.firebaseUser} />}
          />
        </div>
      </Router>


    );
  }
}

export default App;
