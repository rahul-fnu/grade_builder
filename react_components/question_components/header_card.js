import React, { Component } from 'react';
import styles from '../../styles/Question.module.css'
export default class Header extends Component {
    render() {
        const subject = this.props.q.subject.charAt(0).toUpperCase() + this.props.q.subject.slice(1);
        return (
            <div className = {styles.container}>
                <div className = {styles.header_card}>
                    <p>{`Question ${this.props.q.question_number}`}</p>

                    <p>{`${subject} paper ${this.props.q.component_region}, marks: ${this.props.q.marks}`}</p>

                    <p>{this.props.q.exam_period}</p>
                </div>
            </div>
        );
    }
}