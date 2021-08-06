import React, {Component} from 'react';
import styles from '../../styles/Question.module.css';
import MarkSchemeComponent from './ans';
export default class MarkingScheme extends Component {
    render() {
        return (
            <div className = {styles.container}>
                {console.log(this.props.q)}
                {this.props.q.marking_scheme.map(ms => <MarkSchemeComponent msq={ms}/>)}
            </div>
        )
    }
}