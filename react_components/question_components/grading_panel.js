import React, { Component} from 'react';
import GradingBlock from './grading_block';
import styles from '../../styles/Question.module.css'

export default class GradingPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }
    score = (score) => {
        this.setState({score: this.state.score + score});
    }
    onTrigger = (event) => {
        this.props.parentCallback(this.state.score);
        console.log(this.state.score)
        event.preventDefault();
    }
    render() {
        return (
            <div className = {styles.container}>
                <div className = {styles.prompt_card}>
                        <p>{`Part ${this.props.part}`}</p>
                        {typeof this.props.ans == 'string' ?
                            <div>
                                <GradingBlock part = {this.props.part} ans = {this.props.ans} ms ={this.props.ms} parentCallback = {this.score}/>
                            </div>
                            :
                            <div className={styles.container}>
                                {this.state.keys = Object.keys(this.props.ans).sort()}
                                {this.state.keys.map(key => <GradingPanel ans = {this.props.ans[key]} ms = {this.props.ms[key]}  part = {key} parentCallback = {this.score}/>)}
                            </div>
                        }
                        <button className={styles.button} onClick={this.onTrigger}>Save Score</button>
                </div>
            </div>
        )
    }
}