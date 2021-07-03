import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import {Component} from 'react';


const responseGoogle = (response) => {
  console.log(response);
}


class Login extends Component {
    constructor(props) {
        super(props);
    }    

    render(){
      return (
        <div>
          <p>Grade Builder is a platform for students who want to practice for their exams.</p>
        
          <GoogleLogin
            clientId= "1070055233643-68seh13ja0pr5ddo7sb5g9futj71ivoe.apps.googleusercontent.com"
            buttonText="Login"
            uxMode='redirect'
            redirectUri="http://localhost:3000/dashboard"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      );
    }
}

export default Login;