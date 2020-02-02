import React, { Component } from 'react';
import { BrowserRouter as Router,  Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Navbar from "./components/navbar";
import Footer from './components/footer'
import myImage from "./asset/me.jpg";
import './components/style.css'
import Cards from "./components/cards";
import Home from './components/home'
import Navbarr from './components/navbar'
import Card from './components/card';
import $ from 'jquery'

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        whichOne: 0
    }
    this.myRef = React.createRef();

}
 myFunction = () => {
  const x = $('div')
  console.log(x)
  // if (x.className === "topnav") {
  //   x.className += " responsive";
  // } else {
  //   x.className = "topnav";
  // }
}
 
  render() { 
  return (
    <div>
    <div className="topnav " id="myTopnav">
    <a href="/" className="active">Home</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>
    <a  href="javascript:void(0);" className="icon" onclick={()=> this.myFunction()}>
    <i className="fa fa-bars"></i>
  </a>
</div>
  <Navbarr />
  <Footer />
  </div>
 
  );
  }
}

export default App;
