import React, { Component } from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

import './style.css'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (                
            
            <div className="bg-dark text-center">
              <a href="#" style={{ textAlign:"right" }} className="fa fa-facebook"></a>
              <a href="#" style={{ textAlign:"right" }} className="fa fa-linkedin"></a>
              <div className="footer-copyright text-center py-3">© 2020 Copyright:
              <a href="#"> Mohamed Hussien</a>
            </div>
             </div>


        )
    }
}

export default Footer