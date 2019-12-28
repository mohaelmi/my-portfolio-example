import React, { Component } from 'react'
import Card from "./card";
import Navbar from "./navbar";


class Cards extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            img1: "https://i2.wp.com/digitalinspiration.com/images/google-forms-pdf.png?fit=970%2C616&ssl=1",
            img2: "https://hackernoon.com/drafts/1tjg32bo.png",

            body1: "awsome app that you can fill multiple forms and add in the database ",
            body2: "admin dashboard that you can apply CRUD operations either users or posts ",
            which: 0    
        }
    }

    showDeteils(num){
        if(num === 1){
            console.log('project 1')
        }else if(num === 2){
            console.log('project 2')
        }
    }

    render() {
        // const { imgsrc } = this.props
        return (
            <div>
                
            <div className="container-flud d-flex justify-content-center">
            <div className="row">
                <div className="col-md-6">
                <Card imgsrc = { this.state.img1 } title = 'simple app'  body ={this.state.body1}  github = "https://github.com/mohamedhssien/multstepforms"  morepictures = { ()=> this.showDeteils(1) } />
                </div>
                <div className="col-md-6 ">
                <Card  imgsrc = { this.state.img2 } title = 'simple app 2' body={this.state.body2} github = "https://github.com/mohamedhssien/admin-dashboard"  morepictures = { ()=> this.showDeteils(2) } />
                </div>
                <div className="col-md-6 ">
                <Card />
                </div>
                <div className="col-md-6">
                <Card />
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Cards