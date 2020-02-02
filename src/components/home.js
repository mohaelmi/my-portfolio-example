import React, { Component } from 'react'
import Cards from "./cards";

import Navbar from "./navbar";
import Footer from './footer'
import myImage from "../asset/me.jpg";
import './style.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <body class="d-flex flex-column">
            <div id="page-content">
                <div class="container text-center">
                <div className="myImage"> <img src={ myImage } className="rounded-circle" alt="my image"></img></div>
                <div class="row justify-content-center">
                    <div class="col-md-7">
                    <h1 class="font-weight-light mt-4 text-white heading-primary">welcome to my Portfolio</h1>
                    <p class="lead text-white-50">Use just two Bootstrap 4 utility classes and three <br></br> custom CSS rules and you will have a flexbox enabled sticky footer for your website!</p>
                    <p class="lead text-white-50">Use jles and you will have a flexbox enabledsffd sticky footer for your website!</p>
                    <p class="lead text-white-50">Use just two Bootstrapasdsutility classes and three custom CSS rules and you will have a flexbox enabled sticky footer for your website!</p>
                    </div>

                </div>
                
                {/* <Cards /> */}
                {/* <Footer />  */}
                </div>
            </div>
            {/* <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
                <div class="container text-center">
                <small>Copyright &copy; Your Website</small>
                </div>
            </footer> */}
            </body>
        )
    }
}

export default Home