import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./home";
import Cards from './cards'

const Navbar = () => ( 
        <Switch>
            <Route  exact path= "/" component = { Home } />
            <Route  exact path= "/projects" component = { Cards } />
        </Switch>

)

export default Navbar