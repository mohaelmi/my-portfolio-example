import React, { Component } from 'react'
import Card from "./card";
import Navbar from "./navbar";
import Modal from 'react-awesome-modal';
import $ from 'jquery'
import img3 from './../asset/image-to-material-ui.png'


class Cards extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            img1: "https://i2.wp.com/digitalinspiration.com/images/google-forms-pdf.png?fit=970%2C616&ssl=1",
            img2: "https://hackernoon.com/drafts/1tjg32bo.png",

            body1: "awsome app that you can fill multiple forms and add in the database ",
            body2: "admin dashboard that you can apply CRUD operations either users or posts ",
            body3: " converted image to html/css and material-ui and made it responsive ",
            which: 0,
            visible : false,
            readmore1: '' 
        }
    }


    // openModal() {
       
    // }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }

    showDeteils(num){
        if(num === 1){
        $('#content').text("orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
        $('#title').text( ' Mutiple Step Form ' )
        }else if(num === 2){
        $('#title').text( ' Admin Dashboard ' )
        $('#content').text("orem Ipsum has been the industry's standar   prleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s witum project two .")    
        }else if(num === 3){
            $('#title').text( 'Image to HTML/CSS' )
            $('#content').text(" using html and css with some material ui components i converted image to responsive single page website and that i was increasing my fundamental skills that is reqiure every front-end developer")    
            }
        this.setState({
            visible : true
        });
    }

    render() {
        // const { imgsrc } = this.props
        return (
            <div>
                
            <div className="container-flud d-flex justify-content-center">
            <div className="row">
                <div className="col-md-6">
                <Card imgsrc = { this.state.img1 } title = 'Multiple Step Form'  body ={this.state.body1}  github = "https://github.com/mohamedhssien/multstepforms"  readmore = { ()=>  this.showDeteils(1) } />
                </div>
                <div className="col-md-6 ">
                <Card  imgsrc = { this.state.img2 } title = 'Admin Dashboard' body={this.state.body2} github = "https://github.com/mohamedhssien/admin-dashboard"  readmore = { ()=> this.showDeteils(2) } />
                </div>
                <div className="col-md-6 ">
                <Card  imgsrc = { img3 }  title = "Image to HTML/CSS and Material-ui"  body={this.state.body3} github = "https://github.com/mohamedhssien/imagetoHtmlCss"  readmore = { ()=> this.showDeteils(3) }  />
                </div>
                <div className="col-md-6">
                <Card />
                </div>
            </div>
            <Modal visible={this.state.visible} width="600" height="330" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1 id="title"> </h1>
                        <p id="content" > </p>
                    </div>
                        <button onClick={() => this.closeModal()}  ><i class="fa fa-times"></i></button>
                </Modal>
        </div>

        </div>
        )
    }
}

export default Cards