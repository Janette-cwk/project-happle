import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import Header from "./header";
import Intro from "./intro";
import Review from "./review";
import Instruction from "./instruction";
import About from "./about";
import Result from "./Result";
import Recipes from "./Recipes";
import Login from './Login';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>

        <div className="intro-content">
          <Intro />
        </div>

        <div className="about">
          <About />
        </div>

        <div className="how">
          <Instruction />
        </div>

        <div className="result">
          <h1>Get your recipe here</h1>
          <div className="app">
            <header className="App-header">
              <h1 className="App-title">Recipe Generator</h1>
            </header>
            <Result getRecipe={this.getRecipe} />
            <Recipes hits={this.state.hits} />
          </div>
        </div>

        <div className="reviews">
          <Review />
        </div>

        <div className="container">
          {/* <h1>Sign Up</h1>
          <SignUpForm /> */}
          {this.state.user ? (<about/>) : (<Login />)}

        </div>

        <footer>
          <div className="row">
            <div className="copyright">
              <span>© Copyright Edward Halim 2019.</span>
              <span>Design by <a href="http://www.linkedin.com/in/edwardhalim">Edward Halim</a></span>
            </div>
          </div>

        </footer>
        <div id="preloader">
          <div id="loader"></div>
        </div>
      </div>


    );
  }
}

export default Homepage;
