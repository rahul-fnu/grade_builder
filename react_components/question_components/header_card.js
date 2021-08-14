import React, { Component } from 'react';
import styles from '../../styles/Question.module.css'
export default class Header extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <div className = {styles.header_card}>
                    <p>{`Question ${this.props.q.question_number}`}</p>

                    <p>{`${this.props.q.subject} Paper ${this.props.q.component_region}, marks: ${this.props.q.marks}`}</p>

                    <p>{this.props.q.exam_period}</p>
                </div>
            </div>
        );
    }
}