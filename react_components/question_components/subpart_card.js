import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';


export default class Subpart extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <div className={styles.subpart_card}>
                    <p>{`Part ${this.props.s.part}: ${this.props.s.prompt}`}</p>
                    <p>{`Points: ${this.props.s.marks}`}</p>
                    <textarea></textarea>
                </div>
            </div>
        );
    }
}