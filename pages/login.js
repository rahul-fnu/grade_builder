import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import {
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../auth";
import styles from '../styles/Home.module.css'
import Image from 'next/image'


function withAuth(Component) {
  return function WrappedComponent(props) {
    const router = useRouter();
    const auth = useAuth(props.initialAuth);
    const {login} = useAuthFunctions();
    return <Component {...props} auth={auth} login = {login} router = {router}/>;
  }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userData: {}
        }
        this.auth = props.auth
        this.login = props.login
        this.router = props.router
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
      if (!user) return; 
      const checkIfExists = await axios({
        method: 'POST',
        url: '/api/users',
        data: {
          data: user,
          operation: "GET"
        },
        timeout: 1000000000
      })
      if (checkIfExists.data.data.length > 0) {
        console.log(checkIfExists)
        console.log('user exists');
      } 
      else {
        const response = await axios({
          method: 'POST',
          url: '/api/users',
          data: {
            data: user,
            operation: "CREATE"
          }
        })
      }
      this.router.replace("/dashboard");
    }

    render(){
      return (
        <div className={styles.container}>
          <main className={styles.main}>
            <span className={styles.mainLogo}>
              <Image  src="/logo.png" width={200} height={200} />
            </span>
          </main>
        
          <div className={styles.leftPic}>
            <Image   src="/Final.jpg" width={450} height={350} />

            <div className={styles.rightButton}>
                <React.Fragment>
                  {this.auth ? <p>dghe</p>: (
                  <React.Fragment>
                    <button className= {styles.rectangleButton} type="button" onClick={() => this.login()}>
                      Sign In
                    </button>
                  </React.Fragment>
                )}
                </React.Fragment>
            </div>
          </div>
          <footer className={styles.footer}>
            <p>Brought to you with ❤️  by Rahul, Alyan, Saif and Zareen.</p>
          </footer>

        </div>
      );
    }
}

const loginWithAuth = withAuth(Login)

export const getServerSideProps = async (context) => {
  const initialAuth = getServerSideAuth(context.req)

  return { props: { initialAuth } };
};

export default loginWithAuth;