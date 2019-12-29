import React, { Component } from 'react'
import './style.css'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="card text-center" >
                <div className ="overflow" >
                <img src={ this.props.imgsrc } className="card-img-top" alt="simple admin dashboard" />
                </div>
                <div className="card-body">
                <h5   className="card-title"> {this.props.title}</h5>
                <p className="card-text">{ this.props.body }</p>
                <button  className="btn" onClick={ this.props.readmore } >Read More...</button>
                <a  href={this.props.github} target="_blank" className="btn btn-primary"  >Github</a>
                </div>
            </div>
            
        )
    }
}

export default Card