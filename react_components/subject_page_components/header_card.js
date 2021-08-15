import React, { Component } from 'react';
import styles from '../../styles/Question.module.css'
export default class Header extends Component {
    render() {
        return (
            <div className = {styles.header_card}>
                    <span>{` ${this.props.subject}`}</span>
                    {console.log(this.props.subject)}
            </div>
        );
    }
}