import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import NavigationBar from '../Components/navigation_bar.js';
import styles from '../styles/Dashboard.module.css';
import {
    useAuth,
    getServerSideAuth,
  } from "../auth";
  
function withAuth(Component) {
return function WrappedComponent(props) {
    const auth = useAuth(props.initialAuth);
    return <Component {...props} auth={auth}/>;
}
}

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.auth.idTokenData.email,
            userData: {}
        }
    }
    // loadUserData = async (user) => {
    //     const data = await axios({
    //         method: 'GET',
    //         url: '/api/users',
    //         data: user
    //     })
    //     // console.log(data);
    //     this.setState({userData : JSON.parse(data.config.data)});
    // }
    // loadUserData({user:this.state.email});
    displaySubjectStats = (subject) => {
        // const ab = this.loadUserData({email : this.state.email})
        console.log(this.props)
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
            </div>
        )
    }
    
    render(){
      return (
        <div className= {styles.container}>
            <NavigationBar></NavigationBar><br/>

            <span className={styles.upperLeft}>{this.displaySubjectStats('physics')}</span>
            <span className={styles.upperRight}>{this.displaySubjectStats('chemistry')}</span><br/>
            <div className={styles.space}></div>
            <span className={styles.lowerLeft}>{this.displaySubjectStats('maths')}</span>        
            <span className={styles.lowerRight}>{this.displaySubjectStats('economics')}</span>
        </div>
      );
    }
}

export const getServerSideProps = async (context) => {
    const initialAuth = getServerSideAuth(context.req);
    return { props: { initialAuth }};
};

const homePageWithAuth = withAuth(HomePage)

// export default function homePageAuth(data){
//     return <HomePage q={data.questions} u= {data.users}></HomePage>
// }
export default homePageWithAuth;
// homePageWithAuth.getInitialProps = async (context) => {
//     console.log(1)
//     // const res1 = await fetch('http://localhost:3000/api/questions');
//     // const res2 = await fetch('http://localhost:3000/api/users');
//     // const questions = (await res1.json()).data
//     // const users = (await res2.json()).data
//     return {
//         data: JSON.parse(data.config.data) 
//     }
// }
