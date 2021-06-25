import React from 'react';
import {Component} from 'react';
import { Route, Router, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export class AdminPage extends Component {
    constructor(props) {
        super(props);
        
    }

    render(){
      return (
        <div>
            <h1>Total number of questions: {this.props.q.length}</h1>
            <h1>Number of users: {this.props.u.length}</h1>
            <button id="Error_report"> Error Reports</button><br/><br/>
            <Router>
                <Route path="./dashboard.js" />
                <Link to="./dashboard">About</Link>
                </Router>
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