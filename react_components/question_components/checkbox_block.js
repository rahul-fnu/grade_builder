import React, {Component} from 'react';
import Checkbox from './checkbox';
import styles from '../../styles/Question.module.css'
export default class CheckboxBlock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = {styles.container}>
                {this.props.ans.map((ans) => <Checkbox container={ans} />)}
            </div>
        )
    }
}