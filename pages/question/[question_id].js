import Header from '../../react_components/question_components/header_card';
import NavTabs from '../../react_components/question_components/question_header';
import { Component } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import NavigationBar from '../../react_components/navbar'
import {
    useAuth,
    getServerSideAuth,
    useAuthFunctions
  } from "../../auth";
import styles from '../../styles/Question.module.css';

function withAuth(Component) {
    return function WrappedComponent(props) {
      const router = useRouter();
      const auth = useAuth(props.initialAuth);
      const question = props.question
      const {logout} = useAuthFunctions();
      return <Component {...props} auth={auth} logout = {logout} question = {question}  userData = {props.userData} router = {router}/>;
    }
  }
export class Question extends Component{
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question,
            // userData : this.props.email
        }
        this.auth = props.auth
        this.logout = props.logout
        this.router = props.router
        this.userData = props.userData
    }
    updateScore = async (score) => {
        console.log(score)
        const new_question = {
            _id : this.state.question._id,
            subject : this.state.question.subject, 
            score : score
        }
        // if (!this.userData) return;
        const questions_solved = this.userData.questions_solved
        for (let question of this.userData.questions_solved) {
            if (question._id === this.state.question._id) {
                continue;
            } else {
                const obj = {
                    _id : question._id,
                    score : question.score,
                    subject : question.subject
                }
                questions_solved.push(obj);
            }
        }
        questions_solved.push(new_question)
        const newData = {...this.userData, questions_solved : questions_solved}
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'
        const request = await axios({
            url: '../api/users',
            method: 'POST',
            data: {
                operation: 'UPDATE',
                user : newData,
                id : this.userData._id
            },
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        console.log(request);
    }
    render() {
        return (
            <>
                <div className={styles.container}>
                    <NavigationBar logout = {this.logout} parentCallback = {() => this.router.push('/dashboard')}></NavigationBar>
                    <Header q = {this.state.question}></Header>
                    <NavTabs ques = {this.state.question} parentCallback = {(score) => this.updateScore(score)}></NavTabs>
                </div>
            </>
        );
    }
}

const questionWithAuth = withAuth(Question)
export const getServerSideProps = async (context) => {
    const initialAuth = getServerSideAuth(context.req);
    const {type, question_id} = context.query
    // console.log(type)
    const question = {
       _id: question_id
    }
    const data = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/api/questions',
        data: {
           data: question,
           operation: "GET"
        }
    })
    const userInfo = {
        email : initialAuth ? initialAuth.idTokenData.email : ""
    }

    const userData = userInfo.email ? await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        data: {
            data: userInfo,
            operation: 'GET'
        }
    }) : {};
    console.log(userData)
    return { props: {auth : initialAuth, question : data.data.data[0], userData: userData.data ? userData.data.data[0] : {} }};
};

export default questionWithAuth;

