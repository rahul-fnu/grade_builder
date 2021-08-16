import React, {Component} from 'react';
import GradingPanel from './grading_panel';
import styles from '../../styles/Question.module.css';
import PopupComponent from './submit_ans_popup';
export default class GradingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score : {},
            points : 0
        }
    }
    updateScore = (key, value) => {
        const newScore = this.state.score
        newScore[key] = value
        this.setState({score: newScore}, () => {
            const points = this.calculatePoints(this.state.score);
            this.setState({points: points}, () => {
            })

        });
    }
    calculatePoints = (score) => {
        var total = 0;
        const keys = Object.keys(score);
        for (var key of keys) {
            if (typeof score[key] === 'number') {
                total += score[key];
            } else {
                total += this.calculatePoints(score[key]);
            }
        }
        return total;
    }
    onTrigger = (event) => {
        this.props.parentCallback(this.state.points);
        console.log("flnern");
        event.preventDefault();
    }
    render() {
        const keys = Object.keys(this.props.ms).sort();
        return (
            <>
                <div>
                    {keys.map(key => <GradingPanel ms = {this.props.ms[key]} part={key} ans = {this.props.ans[key]} parentCallback = {(score) => this.updateScore(key, score)}/>)}
                </div>
                <button className = {styles.button} onClick= {this.onTrigger}>Save</button>
            </>
        )
    }
}

