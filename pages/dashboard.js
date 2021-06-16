import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export class HomePage extends Component {
    constructor(props) {
        super(props);
    }    

    render(){
      return (
        <div>
          <p>Welcome.</p>
          <p>You have attempted these questions from the ones available</p>
          <PieChart id='Chemistry' size={30}
            data={[
                { title: 'One', value: this.props.q.length, color: '#E38627' },
                { title: 'Two', value: 1, color: '#C13C37' },
            ]}
            
            />;
        </div>
      );
    }
}

export default function Home({questions}){
    return <HomePage q={questions}></HomePage>
}

Home.getInitialProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/questions');
    const questions = (await res.json()).data

    return {
        questions: questions
    }
}