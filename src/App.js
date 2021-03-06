import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Intro from "./components/intro";
import Review from "./components/review";
import Instruction from "./components/instruction";
import About from "./components/about";
import Result from "./components/Result";
import Recipes from "./components/Recipes";
import fire from './components/Fire';
import Login from './components/Login';
import AfterSignup from './components/AfterSignup';

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
          {this.state.user ? (<AfterSignup/>) : (<Login />)}
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

export default App;