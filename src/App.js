import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from "./components/cards";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Navbar from "./components/navbar";
import Footer from './components/footer'


class App extends Component {
  render() { 
  return (
    <div>
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
  }
}

export default App;
