import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import Examples from './components/Examples'
import InputCorrespondence from './components/InputCorrespondence'
import Language from './components/Language'



class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <LandingPage />
      <Examples />
      <InputCorrespondence />
      <Language />
      <Footer />
      </div>
    );
  }
}

export default App;
