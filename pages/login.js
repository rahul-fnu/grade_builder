import React from 'react';
import GoogleLogin from 'react-google-login';
import {Component} from 'react';
import Route from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          credentials:{}
        }
    }  
    responseGoogle = (response) => {
      //console.log(response)
      this.setState({credentials: response});
      console.log(this.state.credentials)
    }

    userData = {};

    render(){
      return (
        <div>
          <p>Grade Builder is a platform for students who want to practice for their exams.</p>
        
          <GoogleLogin
            clientId= "1070055233643-68seh13ja0pr5ddo7sb5g9futj71ivoe.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          {/* <Route path = "/dashboard/:credentials"
              render = {() => <HomePage credentials = {this.state.credentials.googleID} />} /> */}
        </div>
      );
    }
}

export default Login;