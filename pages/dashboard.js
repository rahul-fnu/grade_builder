import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";

import styles from '../styles/Dashboard.module.css';
import {
    useAuth,
    getServerSideAuth,
    useAuthFunctions
  } from "../auth";
  
function withAuth(Component) {
    return function WrappedComponent(props) {
        const auth = useAuth(props.initialAuth);
        const data = props.data
        const router = useRouter();
        const {logout} = useAuthFunctions();

        return <Component {...props} auth={auth} data={data} router={router} logout={logout} />;
    }   
}

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.auth.idTokenData.email,
            userData: {},
        }
        if (this.props.auth) {
            this.loadUserData({email : props.auth.idTokenData.email})
        }
        this.logout = props.logout
        this.router = props.router;
    }
    loadUserData = async (user) => {
         const data = await axios({
             method: 'POST',
             url: '/api/users',
             data: {
                data: user,
                operation: "GET"
              }
         })

         this.setState({userData : data.data.data[0]});
     }

    displaySubjectStats = (subject) => {
        // const ab = this.loadUserData({email : this.state.email})
        this.state.userData.email ? console.log(this.state.userData) : null;
        // const total = this.props.q ? this.props.q.filter(e => e.subject === subject) : 0;

        const solved = this.state.userData.email && this.state.userData.questions_solved > 0 ? this.state.userData.questions_solvedquestions_solved.filter(e => e.subject === subject) : [];
        return (
            <div className= {styles.subjectView}>
                <h3>{subject}</h3>
                <h4> {solved.length}</h4>
                {/* <button onClick={this.loadSubjectPage(subject)}>Solve Question</button> */}
                <button onClick={(e) => this.loadSubjectPage(e, subject)}>Solve Question</button>
            </div>
        )
    }
    loadSubjectPage(e, subject) {     
        this.router.replace(`/caie-a-level/${subject}`)
        e.preventDefault()   
    }
    render(){
      return (
        <div className={styles.container}>
            <main className={styles.main}>
                <button type="button" onClick={() => this.logout()}>
                    sign out
                  </button>
                {/* <NavigationBar></NavigationBar><br/> */}
                <div className={styles.grid}>
                    <a className={styles.card}>
                        {this.displaySubjectStats('physics')}
                    </a>

                    <a className={styles.card}>
                        {this.displaySubjectStats('chemistry')}
                    </a>
                </div>
                <div className={styles.grid}>
                    <a className={styles.card}>
                        {this.displaySubjectStats('maths')}
                    </a>

                    <a className={styles.card}>
                        {this.displaySubjectStats('economics')}
                    </a>
                </div>
            </main>
        </div>
      );
    }
}

const homePageWithAuth = withAuth(HomePage)

export const getServerSideProps = async (context) => {
    const initialAuth = getServerSideAuth(context.req);
    return { props: {initialAuth}};
};

export default homePageWithAuth;
