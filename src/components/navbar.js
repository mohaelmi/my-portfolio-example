import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./home";
import Cards from './cards';
import Contact from './contact'

const Navbar = () => ( 
        <Switch>
            <Route  exact path= "/" component = { Home } />
            <Route  exact path= "/projects" component = { Cards } />
            <Route  exact path= "/contact" component = { Contact } />
        </Switch>

)

export default Navbar