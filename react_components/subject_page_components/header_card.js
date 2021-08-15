import React, { Component } from 'react';
import styles from '../../styles/Subject.module.css'
export default class Header extends Component {
    render() {
        return (
            <div className = {styles.header_card}>
                <div>
                    <p>{` ${this.props.subject}`}</p>
                </div>
            </div>
        );
    }
}