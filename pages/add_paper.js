import React from 'react';
import {Component} from 'react';
import { Route, Router, Link } from 'react-router-dom';

export class AdminPage extends Component {
    constructor(props) {
        super(props);   
    }

    render(){
      return (
        <div>
            <p>Hi</p>
        </div>
      );
    }
}

export default function Admin({data}){
    return <AdminPage q={data.questions} u= {data.users}></AdminPage>
}

Admin.getInitialProps = async (context) => {
    const res1 = await fetch('http://localhost:3000/api/questions');
    const res2 = await fetch('http://localhost:3000/api/users');
    const questions = (await res1.json()).data
    const users = (await res2.json()).data
    return {
        data: {questions: questions, users: users} 
    }
}