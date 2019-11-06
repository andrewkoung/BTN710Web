import React, { Component } from 'react';
import firebase from 'firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentWillMount() {
        this.authListener = this.authListener.bind(this);
        this.authListener();
    } 

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                    window.open('resource');
                }
        });
    } 

    onSubmit(event) {
        event.preventDefault();
        //Attempts to sign in
        console.log(this.state.email, this.state.password)
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((e) => {
            console.log(e);
            this.setState({ error: "Invalid Credentials" });
        })
    }

    handleEmailChange (e) {
        this.setState({email: e.target.value});
     }

     handlePasswordChange (e) {
        this.setState({password: e.target.value});
     }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Username:
                            <input type="text" name="username" value={this.state.email} onChange={this.handleEmailChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;