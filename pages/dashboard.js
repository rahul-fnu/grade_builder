import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";

import styles from '../styles/Dashboard.module.css';
import {
    useAuth,
    getServerSideAuth,
  } from "../auth";
  
function withAuth(Component) {
    return function WrappedComponent(props) {
        const auth = useAuth(props.initialAuth);
        const data = props.data
        const router = useRouter();
        return <Component {...props} auth={auth} data={data} router={router} />;
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
            this.loadUserData(props.auth.idTokenData.email)
        }
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
         this.setState({userData : data.data});
     }

    displaySubjectStats = (subject) => {
        // const ab = this.loadUserData({email : this.state.email})
        console.log(this.state.userData)
        const userData = {}
        userData.email = 'ali@outlook.com';
        userData.questions_solved = [
              {"subject":"chemistry", "lastname":"Doe"}, 
              {"subject":"chemistry", "lastName":"Smith"},
              {"subject":"chemistry", "lastName":"Jones"},
              {"subject":"economics", "lastname":"Doe"}, 
              {"subject":"economics", "lastName":"Smith"},
              {"subject":"physics", "lastName":"Jones"},
              {"subject":"physics", "lastname":"Doe"}, 
              {"subject":"maths", "lastName":"Smith"},
              {"subject":"maths", "lastName":"Jones"}
            ]
        
        const total = this.props.q ? this.props.q.filter(e => e.subject === subject) : 0;
        const solved = userData.questions_solved.filter(e => e.subject === subject);
        return (
            <div className= {styles.subjectView}>
                <h3>{subject}</h3>
                <h4> {solved.length}  / {total.length}</h4>
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
                {/* <NavigationBar></NavigationBar><br/> */}
                <div className={styles.grid}>
                    <a href="http://localhost:3000/dashboard" className={styles.card}>
                        {this.displaySubjectStats('physics')}
                    </a>

                    <a href="http://localhost:3000/dashboard" className={styles.card}>
                        {this.displaySubjectStats('chemistry')}
                    </a>

                    <a href="http://localhost:3000/dashboard" className={styles.card}>
                        {this.displaySubjectStats('maths')}
                    </a>

                    <a href="http://localhost:3000/dashboard" className={styles.card}>
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
