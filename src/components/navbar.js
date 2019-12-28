import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './style.css'

class Navbar extends Component {
    
    render() {
        return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-conytent-end">
            <a className="navbar-brand" href="#">Home</a>
            {/* <div classNam="navbar-nav text-right" > */}
                <a className="nav-link" href="#">Projects</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">contact</a>
            {/* </div>            */}
            
            <div className="flex-grow-1" id="navbarSupportedContent">
            <ul className="navbar-nav text-right">
            <li className="nav-item active">
                <a className="nav-link" href="#">Right Link 1</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">Right Link 2</a>
            </li>
        </ul>
    </div>
</nav>
        )
    }
}

export default Navbar