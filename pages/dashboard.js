import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import NavigationBar from '../react_components/navbar.js'

import styles from '../styles/Home.module.css';
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
        this.state.userData.email ? console.log(this.state.userData) : null;
        const solved = this.state.userData.email && this.state.userData.questions_solved > 0 ? this.state.userData.questions_solvedquestions_solved.filter(e => e.subject === subject) : [];
        return solved.length;
    }
    loadSubjectPage(e, subject) {     
        this.router.push(`/caie-a-level/${subject}`)
        e.preventDefault()   
    }
    render(){
      return (
        <div className={styles.container}>
          <NavigationBar className={styles.navbar} logout = {this.logout}></NavigationBar>
          <main className={styles.main}>
            <h4 className={styles.title}>
              Welcome to <a style={{color: '#f38200'}}>GradeBuilder</a>
            </h4>
            <div className={styles.grid}>
              <a className={styles.card} onClick={(e) => this.loadSubjectPage(e, "chemistry")}>
                <h2>Chemistry &rarr;
                <span className={styles.miniLogo}>
                    <img src="/chemistry2.jpg"  width={120} height={60} />
                  </span>
                </h2>
                <h4>{this.displaySubjectStats('chemistry')}</h4>
              </a>
    
              <a className={styles.card} onClick={(e) => this.loadSubjectPage(e, "physics")}>
                <h2>Physics &rarr;
                <span className={styles.miniLogo}>
                  <img src="/physics.jpg" alt="Vercel Logo" width={100} height={50} />
                </span>
                </h2>
                <h4>{this.displaySubjectStats('physics')}</h4>
              </a>
    
              <a className={styles.card} onClick={(e) => this.loadSubjectPage(e, "mathematics")}>
                <h2>Maths &rarr;
                  <span className={styles.miniLogo}>
                    <img src="/maths4.jpg"  width={100} height={60} />
                  </span>
                </h2>
                <h4>{this.displaySubjectStats('mathematics')}</h4>
              </a>
    
              <a className={styles.card} onClick={(e) => this.loadSubjectPage(e, 'economics')}>
                <h2>Economics &rarr;
                  <span className={styles.miniLogo}>
                    <img src="/economics.jpg" alt="Vercel Logo" width={100} height={50} />
                  </span>
                </h2>
                <h4>{this.displaySubjectStats('econmics')}</h4>
              </a>
            </div>
    
            <p className={styles.description}>
              We know how difficult and expensive it is for students who are studying for their <a className= {styles.link} href='https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-advanced/cambridge-international-as-and-a-levels/'>
              CAIE A level examinations.</a>
              Therefore, we have brought to you a platform where you can practice questions and keep track of past papers. 
              Please make note that the website is still in the testing stage and has some bugs that are being worked out posthaste. 
              Moreover, new, exciting features shall be added based on user reviews and recommendations.
            </p>
          </main>
    
          <footer className={styles.footer}>        
            <a className= {styles.link} href="mailto: gradebuilder1@gmail.com">  Contact Us  </a>
          </footer>
        </div>
      )
    }
}

const homePageWithAuth = withAuth(HomePage)

export const getServerSideProps = async (context) => {
    const initialAuth = getServerSideAuth(context.req);
    return { props: {initialAuth}};
};

export default homePageWithAuth;
