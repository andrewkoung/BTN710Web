import React, { Component } from 'react';
import firebase from 'firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { password: '', error: '', loading: false };
        this.onSubmit = this.onSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentWillMount() {
        this.authListener = this.authListener.bind(this);
        this.authListener();
    } 

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                    this.props.history.push('/resource');
                }
        });
    } 

    onSubmit(event) {
        event.preventDefault();
        //Attempts to sign in
        firebase.auth().signInWithEmailAndPassword("apkoung@myseneca.ca", this.state.password).catch((e) => {
            console.log(e);
            this.setState({ error: "Invalid Credentials" });
        })
    }

     handlePasswordChange (e) {
        this.setState({password: e.target.value});
     }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h1 style={{paddingBottom: '100px'}}>BTN710 Resource Portal</h1>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
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