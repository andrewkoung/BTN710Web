import React, { Component } from 'react';
import * as firebase from 'firebase';

class Resource extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        firebase.auth().signOut();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" class="btn btn-primary" onClick={this.onLogout}>Log out</button>
                </div>
                <div className="App">
                    <h1>Video Presentation Link</h1>
                    <a href="https://youtu.be/UUB4WLglxxQ">Link to the video presentation</a>
                    <h1>Report</h1>
                    <img src={require("../media/page1.PNG")}></img>
                    <img src={require("../media/page2.PNG")}></img>
                    <img src={require("../media/page3.PNG")}></img>
                    <img src={require("../media/page4.PNG")}></img>
                    <img src={require("../media/page5.PNG")}></img>
                    <img src={require("../media/page6.PNG")}></img>
                    <img src={require("../media/page7.PNG")}></img>
                    <img src={require("../media/page8.PNG")}></img>
                    <img src={require("../media/page9.PNG")}></img>
                    <img src={require("../media/page10.PNG")}></img>
                    <img src={require("../media/page11.PNG")}></img>
                </div>
            </div>

        );
    }
}

export default Resource;