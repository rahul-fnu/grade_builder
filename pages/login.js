import React from 'react';
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
        this.state = {
          userData: {}
        }
        this.auth = props.auth,
        this.login = props.login,
        this.logout = props.logout
        if (props.auth) {
          this.response()
        }
    }

    response = () => {
      const userData = {};
      userData.email = this.auth.idTokenData.email;
      this.setState({userData: userData});
      this.validateUser(userData)
    }

    validateUser = async (user) => {
      const checkIfExists = await axios({
        method: 'GET',
        url: '/api/users',
        data: user
      })
      const filtered = checkIfExists.data.data.filter(e => e.email && e.email === user.email);
      if (filtered.length == 1) {
        console.log('user exists');
      } 
      else {
        const response = await axios({
          method: 'POST',
          url: '/api/users',
          data: user
        })
      }
    }

    render(){
      return (
        <div>
              <React.Fragment>
                {this.auth ? (
                <button type="button" onClick={() => this.logout()}>
                  sign out
                </button>
                ) : (
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