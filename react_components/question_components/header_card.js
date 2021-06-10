import React, { Component } from 'react';
import styles from '../../styles/Question.module.css'
export default class Header extends Component {
    //const
    render() {
        return (
            <div className = {styles.header_card}>
                <p className = {styles.title}>{`Question ${this.props.q.question_number}`}</p>
                <br></br>
                <p className = {styles.title_question}>{`${this.props.q.subject} Paper ${this.props.q.component_region}, marks: ${this.props.q.marks}`}</p>
                <br></br>
                <p className = {styles.title_question}>{this.props.q.exam_period}</p>
            </div>
        );
    }
}