import React from 'react';
import GoogleLogin from 'react-google-login';
import {Component} from 'react';
import Route from 'react-router';
import axios from 'axios';
import {
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../auth";

function withAuth(Component) {
  return function WrappedComponent(props) {
    const auth = useAuth(props.initialAuth);
    const {login, logout} = useAuthFunctions();
    return <Component {...props} auth={auth} login = {login} logout={logout}/>;
  }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          credentials:{}
        }
        this.auth = props.auth,
        this.login = props.login,
        this.logout = props.logout
    }

    responseGoogle = (response) => {
      //console.log(response)
      this.setState({credentials: response});
      console.log(this.state.credentials)
      const userData = {};
      userData.email = this.state.credentials.profileObj.email;
      userData.google_ID = this.state.credentials.profileObj.googleId;
      userData.first_name = this.state.credentials.profileObj.givenName;
      userData.last_name = this.state.credentials.profileObj.familyName;
      this.setState({userData: userData});
      this.validateUser(userData)
    }

    validateUser = async (user) => {
      const checkIfExists = await axios({
        method: 'GET',
        url: '/api/users',
        data: user.google_ID
      })

      const filtered = checkIfExists.data.data.filter(e => e.google_ID === user.google_ID);

      if (filtered.length == 1) {
        console.log('user exists');
        console.log(filtered);
      } 
      else {
        const response = await axios({
          method: 'POST',
          url: '/api/users',
          data: user
        })
        console.log(response)
      }
    }

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
              <React.Fragment>
                {this.auth ? (
                <button type="button" onClick={() => this.logout()}>
                  sign out
                  </button>) : (
                  <React.Fragment>
                    <button type="button" onClick={() => this.login()}>
                      sign in
                      </button>
                      </React.Fragment>
                      )}
                      </React.Fragment>
        </div>
      );
    }
}

const loginWithAuth = withAuth(Login)

export const getServerSideProps = async (context) => {
  const initialAuth = getServerSideAuth(context.req);
  return { props: { initialAuth } };
};

export default loginWithAuth;