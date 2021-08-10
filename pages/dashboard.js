import React from 'react';
import {Component} from 'react';
import NavigationBar from '../Components/navigation_bar.js';
import styles from '../styles/Dashboard.module.css';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        
    }

    displaySubjectStats = (subject) => {
        const userData = {};
        userData.email = 'ali@outlook.com';
        userData.client_id = 'FUFUFUFUFUFUF';
        userData.first_name = 'Alyan';
        userData.last_name = 'Qureshi';
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
        
        const total = this.props.q.filter(e => e.subject === subject);
        const solved = userData.questions_solved.filter(e => e.subject === subject);
        console.log(userData);
        //solved = this.props.u.solvedfilter()
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

export default function Home({data}){
    return <HomePage q={data.questions} u= {data.users}></HomePage>
}

Home.getInitialProps = async (context) => {
    const res1 = await fetch('http://localhost:3000/api/questions');
    const res2 = await fetch('http://localhost:3000/api/users');
    const questions = (await res1.json()).data
    const users = (await res2.json()).data
    return {
        data: {questions: questions, users: users} 
    }
}