import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,  Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import './App.css';
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

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        whichOne: 0
    }

}

 
  render() { 
  return (
    <div>
    <div style={{height: '65px', position: 'relative'}}>
    <Layout fixedHeader style={{ display: 'flex' }}>
        <Header title={<span><span style={{ color: '#ddd', flex: 1  }}> <a  className="btn btn-dark" href="/">Home</a> </span><strong>Welcome to my Portfolio</strong></span>}>
            <Navigation style={{ backgroundColor: 'black',  flexDirection: 'row-reverse'  }}>
               <a  className="btn btn-dark" href="/contact">Contact</a>
               <a  className="btn btn-dark" href="/about">About</a>
               <a  className="btn btn-dark" href="/projects">Projects</a>
            
            </Navigation>
        </Header>
    </Layout>
  </div>
  <div className="page-content" >
  <Navbarr />
  <Footer />
  </div>
  </div>
  );
  }
}

export default App;
