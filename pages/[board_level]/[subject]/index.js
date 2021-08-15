import Head from 'next/head'
import styles from '../../../styles/Subject.module.css'
import { useRouter } from 'next/router'
import { Component } from 'react';
import axios from 'axios';
import QuestionList from '../../../react_components/subject_page_components/question_list';
// import QuestionList from '../../../react_components/'
import Header from '../../../react_components/subject_page_components/header_card'
// import GridList from '@material-ui/GridList';
import NavigationBar from '../../../react_components/navbar'
import {
    useAuth,
    getServerSideAuth,
    useAuthFunctions
  } from "../../../auth";
function withAuth(Component) {
    return function WrappedComponent(props) {
      const router = useRouter();
      const auth = useAuth(props.initialAuth);
      const question = props.question
      const {logout} = useAuthFunctions();
      return <Component {...props} auth={auth} logout = {logout} question = {question}  subject = {props.subject} board_level = {props.board_level} router = {router}/>;
    }
  }
export class SubjectPage extends Component {
    constructor(props) {
        super(props)
        this.questions = props.question
        this.questionList = <Component></Component>
        this.auth = props.auth
        this.logout = props.logout
        this.router = props.router
        this.subject = props.subject
        this.state = {
            questions: this.questions,
            yearly : {},
            topical : {},
            lists : []
        }
    }
    arrangeQuestions() {
        const topics = {}
        const sessions = {}
        for (let question of this.state.questions) {
            if ((Object.keys(sessions).length  > 0) && (Object.keys(sessions).includes(question.exam_period))) {
                sessions[question.exam_period].add(question);
            } else if ((Object.keys(sessions).length  > 0) && !(Object.keys(sessions).includes(question.exam_period))) {
                sessions[question.exam_period] = new Set();
                sessions[question.exam_period].add(question);
            } else {
                sessions[question.exam_period] = new Set();
                sessions[question.exam_period].add(question);
            }
            for (let topic of question.topics) {
                if ((Object.keys(topics).length  > 0) && (Object.keys(topics).includes(topic))) {
                    topics[topic].add(question);
                } else if ((Object.keys(topics).length  > 0) && !(Object.keys(topics).includes(topic))) {
                    topics[topic] = new Set();
                    topics[topic].add(question);
                } else {
                    topics[topic] = new Set();
                    topics[topic].add(question);
                }
            }
        }
        this.state.topical = topics;
        this.state.yearly = sessions;
        console.log(this.router.pathname)

    }
    loadQuestionPage(question_id) {
        console.log(this.router.query)
        this.router.replace(`question/${question_id}`);
    }
    render() {
        var subject = this.props.subject.charAt(0).toUpperCase() + this.props.subject.slice(1);
        this.YearlyList = Object.keys(this.state.yearly).map(key => {
            return (
                <QuestionList title={key} question={this.state.yearly[key]} parentCallback = {(question_id) => this.loadQuestionPage(question_id)} />
            )
        })
        this.TopicalList = Object.keys(this.state.topical).map(key => {
            return (
                <QuestionList title={key} question={this.state.topical[key]} parentCallback = {(question_id) => this.loadQuestionPage(question_id)} />
            )
        })
        this.state.lists = this.YearlyList
        return (
            <div className={styles}>
                <NavigationBar logout = {this.logout}></NavigationBar>
                <Head>
                    <title>{`${this.props.board_level} ${subject}`}</title>
                    <meta name='description' content='Generated by Saif the human' />
                    <link rel='icon' href='/favicon.ico' />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                </Head>
                <main className={styles.main}>
                    <Header subject = {subject} />
                    {this.arrangeQuestions()}
                    <br />
                    <div class="container">
                        <div class = "row">
                            <button onClick={() => this.state.lists = this.TopicalList}>Arrange Topically</button>
                            <button onClick={() => this.state.lists = this.YearlyList}>Arrange Yearly</button>
                        </div>
                         <div class="row">
                            {this.state.lists}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
const subjectPageWithAuth = withAuth(SubjectPage)
export const getServerSideProps = async (context) => {
    const initialAuth = getServerSideAuth(context.req);
    const params = context.resolvedUrl.split('/')
    const board_level = params[1];
    const subject_name = params[2];
    console.log(subject_name)
    const questions = {
        subject: subject_name
    }
    const data = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/api/questions',
        data: {
           data: questions,
           operation: "GET"
         }
    })
    return { props: {auth : initialAuth, subject : subject_name, board_level :  board_level, question : data.data.data}};
};

export default subjectPageWithAuth;
