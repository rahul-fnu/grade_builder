import React, {Component} from 'react';
import Checkbox from './checkbox';
import styles from '../../styles/Question.module.css'
import NewTextRenderer from './text_renderer_new';
export default class CheckboxBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score:0
        }
    }
    updateScore(score) {
        this.state.score += score;
        this.props.parentCallback(this.state.score)
    }
    render() {
        return (
            <div className = {styles.subpart_card}>
                {Array.isArray(this.props.ans) ? this.props.ans.map((ans) => <Checkbox container={ans} parentCallback = {score=> this.updateScore(score)}/>) : <NewTextRenderer content = {"fe"} />}
            </div>
        )
    }
}