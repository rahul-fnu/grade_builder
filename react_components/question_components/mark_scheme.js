import React, {Component} from 'react';
import styles from '../../styles/Question.module.css';
import MarkSchemeComponent from './ans';
export default class MarkingScheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: Object.keys(this.props.q).sort()
        }
    }
    render() {
        return (
            <div className = {styles.container}>
                {this.state.parts.map(part => <MarkSchemeComponent part={part} msq={this.props.q[part]}/>)}
            </div>
        )
    }
}