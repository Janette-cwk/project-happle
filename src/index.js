import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Router from "./components/Router";
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2nvpFEmGQvG5gd4X7eg5mXDvyt2rJ908",
    authDomain: "happle-2ffdd.firebaseapp.com",
    databaseURL: "https://happle-2ffdd.firebaseio.com",
    projectId: "happle-2ffdd",
    storageBucket: "happle-2ffdd.appspot.com",
    messagingSenderId: "512283409951"
  };
  firebase.initializeApp(config);


ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
// registerServiceWorker();