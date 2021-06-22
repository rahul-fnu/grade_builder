import React, {Component} from 'react';
import styles from '../../styles/Question.module.css';

export default class MarkingScheme extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <div className = {styles.marking_scheme}>
                    {this.props.q.marking_scheme.map(ms => <ul>{ms}</ul>)}
                </div>
            </div>
        )
    }
}