import React, { Component} from 'react';
import GradingBlock from './grading_block';
import styles from '../../styles/Question.module.css'

export default class GradingPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: {}
        }
    }
    updateScore = (part, value) => {
        const newScores = this.state.score
        if (typeof value === 'number') {
            newScores[part] = value;
        } else {
            const keys = Object.keys(value);
            for (var key of keys) {
                newScores[key] = value[key];
            }
        }
        this.setState({score: newScores}, () => {
            this.props.parentCallback(this.state.score);
        });
    }
    render() {
        return (
            <div className = {styles.container}>
                <div className = {styles.prompt_card}>
                        <p>{`Part ${this.props.part}`}</p>
                        {typeof this.props.ans == 'string' ?
                            <div>
                                <GradingBlock part = {this.props.part} ans = {this.props.ans} ms ={this.props.ms} parentCallback = {(score) => this.updateScore(this.props.part, score)}/>
                            </div>
                            :
                            <div className={styles.container}>
                                {this.props.ans ? this.state.keys = Object.keys(this.props.ans).sort() : this.state.keys = []}
                                {this.state.keys.length > 0 ? this.state.keys.map(key => <GradingPanel ans = {this.props.ans[key]} ms = {this.props.ms[key]}  part = {key} parentCallback = {(score) => this.updateScore(this.props.part, score)}/>) : <p>Please submit your answers again</p>}
                            </div>
                        }
                </div>
            </div>
        )
    }
}