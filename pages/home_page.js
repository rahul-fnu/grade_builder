import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import {Component} from 'react';


const responseGoogle = (response) => {
  console.log(response);
}


class HomePage extends Component {
    constructor(props) {
        super(props);
    }    

    render(){
      return (
        <GoogleLogin
          clientId= "1070055233643-68seh13ja0pr5ddo7sb5g9futj71ivoe.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      );
    }
}

export default HomePage;