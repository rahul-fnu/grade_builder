import React, {Component} from 'react';
import NewTextRenderer from './text_renderer_new';
import styles from '../../styles/Question.module.css';
import CheckboxBlock from './checkbox_block';
export default class GradingBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        }
    }
    score = (score) => {
        this.setState({score: score})
        console.log(this.state)
    }
    returnScore = () => {
        this.props.parentCallback(this.state.score)
    }
    render() {
        return (
            <div className = {styles.container}>
                <div className = "row">
                    <div className ="col-6">
                        <NewTextRenderer content={this.props.ans} />
                    </div>
                    <div className = "col-6">
                        <CheckboxBlock ans={this.props.ms} parentCallback = {score => this.returnScore(score)} />
                    </div>
                    {/* <button onClick= {this.returnScore}>fjrffrkr </button> */}
                </div>
            </div>
        )
    }
}