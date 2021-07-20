import React, {Component} from 'react';
import Checkbox from './checkbox';
import styles from '../../styles/Question.module.css'
import NewTextRenderer from './text_renderer_new';
export default class CheckboxBlock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = {styles.subpart_card}>
                {Array.isArray(this.props.ans) ? this.props.ans.map((ans) => <Checkbox container={ans} />) : <NewTextRenderer content = {"fe"} />}
            </div>
        )
    }
}