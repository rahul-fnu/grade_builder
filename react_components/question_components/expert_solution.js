import React, { Component} from 'react';
import styles from '../../styles/Question.module.css';

export default class ExpertSolution extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <div className = {styles.expert_solution}>
                    {this.props.q.expert_solution.map(es => <ul>{es}</ul>)}
                </div>
            </div>
        )
    }
}