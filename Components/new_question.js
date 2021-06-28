import React from 'react';
import {Component} from 'react';

export class AddQuestionPage extends Component {
    constructor(props) {
        super(props);   
    }

    render(){
      return (
        <div>
            <form>

            </form>
        </div>
      );
    }
}

export default function AddQuestion({data}){
    return <AddQuestionPage q={data.questions} u= {data.users}></AddQuestionPage>
}

AddQuestion.getInitialProps = async (context) => {
    const res1 = await fetch('http://localhost:3000/api/questions');
    const res2 = await fetch('http://localhost:3000/api/users');
    const questions = (await res1.json()).data
    const users = (await res2.json()).data
    return {
        data: {questions: questions, users: users} 
    }
}