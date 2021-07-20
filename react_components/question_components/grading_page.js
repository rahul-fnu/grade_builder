import React, {Component} from 'react';
import GradingPanel from './grading_panel'

export default class GradingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score : 0
        }
    }
    score = (score) => {
        this.setState({score: this.state.score + score.score})
    }
    onTrigger = (event) => {
        console.log(this.state.score);
        event.preventDefault();
    }
    render() {
        const keys = Object.keys(this.props.ms);
        return (
            <>
                <div>
                    {console.log(this.props.ms)}
                    {console.log(this.props.ans)}
                    {keys.map(key => <GradingPanel ms = {this.props.ms[key]} part={key} ans = {this.props.ans[key]} parentCallback = {this.score}/>)}
                </div>
                <button onClick= {this.onTrigger}>Save</button>
            </>
        )
    }
}