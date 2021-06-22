import React from 'react';
import {Component} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import NavigationBar from '../Components/navigation_bar.js';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.bio = this.props.q.filter(e => e.subject === 'biology');
        this.chem = this.props.q.filter(e => e.subject === 'chemistry');
        this.phy = this.props.q.filter(e => e.subject === 'physics');
        this.econ = this.props.q.filter(e => e.subject === 'economics');
    }
    
    render(){
      return (
        <div>
            <NavigationBar></NavigationBar>
          <p>Welcome.</p>
          <p>You have attempted these questions from the ones available</p>

            <h2>Biology</h2>
            <PieChart id='Biology'
                data={[
                    { title: this.props.q.length, value: this.props.q.length, color: 'green' },
                    { title: this.bio.length, value: this.bio.length, color: 'cyan' }
                ]}
            />;

            <PieChart id='Chemistry'
                data={[
                    { title: this.chem.length, value: this.chem.length, color: 'grey' },
                    { title: this.props.q.length, value: this.props.q.length, color: 'blue' }
                ]}
            />;

            <PieChart id='Physics'
                data={[
                    { title: this.phy.length, value: this.phy.length, color: 'brown' },
                    { title: this.props.q.length, value: this.props.q.length, color: 'yellow' }
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