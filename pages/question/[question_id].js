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
function withAuth(Component) {
    return function WrappedComponent(props) {
      const router = useRouter();
      const auth = useAuth(props.initialAuth);
    //   console.log(auth)
      const question = props.question
      const {logout} = useAuthFunctions();
      return <Component {...props} auth={auth} logout = {logout} question = {question}  router = {router}/>;
    }
  }
export class Question extends Component{
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question,
            email : this.props.email
        }
        this.auth = props.auth
        this.logout = props.logout
        this.router = props.router
    }
    render() {
        return (
            <>
                <NavigationBar logout = {this.logout}></NavigationBar>
                <Header q = {this.state.question}></Header>
                <NavTabs ques = {this.state.question}></NavTabs>
            </>
        );
    }
}

const questionWithAuth = withAuth(Question)
export const getServerSideProps = async (context) => {
    const initialAuth = getServerSideAuth(context.req);
    const {type, question_id} = context.query
    console.log(type)
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
    console.log(data)
    return { props: {auth : initialAuth, question : data.data.data[0]}};
};

export default questionWithAuth;

