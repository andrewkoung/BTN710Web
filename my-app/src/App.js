import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import firebase from 'firebase/app';
import Login from './components/login.js';
import Resource from './components/resource.js';

function App() {

  const config = {
    apiKey: "AIzaSyBHXB6uvalDm7u79m7fjmyENaeVTevl3WQ",
    authDomain: "btn710-82e2e.firebaseapp.com",
    databaseURL: "https://btn710-82e2e.firebaseio.com",
    projectId: "btn710-82e2e",
    storageBucket: "btn710-82e2e.appspot.com",
    messagingSenderId: "357577898065",
    appId: "1:357577898065:web:33bbd9f7ad5ec6a12ea070",
    measurementId: "G-5LX39FQQVN"
  };

  firebase.initializeApp(config);

  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/resource" component={Resource} />
      </Router>
    </div>
  );
}

export default App;
