import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';

export default class Prompt extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <div className={styles.prompt_card}>
                    <p>{`Part ${this.props.p.part}: ${this.props.p.prompt}`}</p>
                    <p>{`Points: ${this.props.p.marks}`}</p>
                    <textarea/>
                </div>
            </div>
        );
    }
}